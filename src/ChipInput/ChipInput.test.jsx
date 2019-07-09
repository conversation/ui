import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import InputBase from '@material-ui/core/InputBase'
import React from 'react'
import { shallow, mount } from 'enzyme'

import ChipInput from './ChipInput'

describe('<ChipInput />', () => {
  it('displays the initial entries in chips', () => {
    const tree = mount(
      <ChipInput entries={['foo', 'bar', 'foobar']} />
    )
    expect(tree.find('ForwardRef(Chip)').map((chip) => chip.text())).toEqual(['foo', 'bar', 'foobar'])
  })

  it('displays added chips', () => {
    const tree = mount(
      <ChipInput entries={['foo', 'bar']} />
    )
    tree.find('input').getDOMNode().value = 'test'
    tree.find('input').simulate('keyDown', { keyCode: 13 }) // press enter
    expect(tree.find('ForwardRef(Chip)').map((chip) => chip.text())).toEqual(['foo', 'bar', 'test'])
  })

  it('calls onChange when adding new chips', () => {
    const handleChange = jest.fn()
    const tree = mount(
      <ChipInput onChange={handleChange} />
    )

    tree.find('input').getDOMNode().value = 'foo'
    tree.find('input').simulate('keyDown', { keyCode: 13 }) // press enter
    expect(handleChange).toBeCalledWith([{ 'valid': true, 'value': 'foo' }])

    tree.find('input').getDOMNode().value = 'bar'
    tree.find('input').simulate('keyDown', { keyCode: 13 }) // press enter
    expect(handleChange).toBeCalledWith([{ 'valid': true, 'value': 'foo' }, { 'valid': true, 'value': 'bar' }])
  })

  it('calls onChange when deleting chips with backspace key', () => {
    const handleChange = jest.fn()
    const tree = mount(
      <ChipInput entries={['foo', 'bar']} onChange={handleChange} />
    )

    tree.find('input').simulate('keyDown', { keyCode: 8 }) // backspace (to focus the chip)
    tree.find('input').simulate('keyDown', { keyCode: 8 }) // backspace (to remove the chip)
    expect(handleChange).toBeCalledWith([{ 'valid': true, 'value': 'foo' }])
  })

  it('calls onChange when deleting chips with delete key', () => {
    const handleChange = jest.fn()
    const tree = mount(
      <ChipInput entries={['foo', 'bar']} onChange={handleChange} />
    )

    tree.find('input').simulate('keyDown', { keyCode: 8 }) // backspace (to focus the chip)
    tree.find('input').simulate('keyDown', { keyCode: 46 }) // del (to remove the chip)
    expect(handleChange).toBeCalledWith([{ 'valid': true, 'value': 'foo' }])
  })

  it('calls onChange when deleting chips by clicking on the remove button', () => {
    const handleChange = jest.fn()
    const tree = mount(
      <ChipInput entries={['foo', 'bar']} onChange={handleChange} />
    )
    tree.find('ForwardRef(SvgIcon)').first().simulate('click')
    expect(handleChange).toBeCalledWith([{ 'valid': true, 'value': 'bar' }])
  })

  it('does not add empty chips', () => {
    const handleChange = jest.fn()
    const tree = mount(
      <ChipInput onChange={handleChange} />
    )

    tree.find('input').getDOMNode().value = ' '
    tree.find('input').simulate('keyDown', { keyCode: 13 }) // press enter
    expect(handleChange).not.toBeCalled()
  })

  describe('when disabled', () => {
    it('marks the form label as disabled', () => {
      const wrapper = mount(
        <ChipInput disabled label='Hello' />
      )
      const formLabel = wrapper.find(FormLabel)
      expect(formLabel.props().disabled).toBe(true)
    })

    it('marks the input as disabled', () => {
      const tree = mount(
        <ChipInput disabled />
      )

      expect(tree.find(InputBase).props().disabled).toBe(true)
    })
  })

  describe('with label', () => {
    it('renders a label', () => {
      const wrapper = mount(
        <ChipInput label='lorem' />
      )
      const formLabel = wrapper.find(FormLabel)
      expect(formLabel.contains('lorem')).toBe(true)
    })

    it('sets the htmlFor prop', () => {
      const wrapper = mount(
        <ChipInput id='foo' label='lorem' />
      )
      const formLabel = wrapper.find(FormLabel)
      expect(formLabel.props().htmlFor).toBe('foo')
    })
  })

  describe('with helper text', () => {
    it('renders helper text', () => {
      const wrapper = shallow(
        <ChipInput helperText='lorem' />
      ).dive().find(FormHelperText)
      expect(wrapper.contains('lorem')).toBe(true)
    })
  })

  describe('with validation', () => {
    it('it should validate entries passed through the prop', () => {
      const items = ['First']
      const wrapper = shallow(
        <ChipInput entries={items} />
      ).dive()
      expect(wrapper.state().entries).toEqual([{ 'valid': true, 'value': 'First' }])
    })

    it('it should validate entries with the passed validator', () => {
      const items = ['First', 'Second']
      const wrapper = shallow(
        <ChipInput entries={items} onValidateEntry={(e) => e === 'First'} />
      ).dive()
      expect(wrapper.state().entries).toContainEqual({ 'valid': true, 'value': 'First' })
      expect(wrapper.state().entries).toContainEqual({ 'valid': false, 'value': 'Second' })
    })
  })

  describe('with sorting', () => {
    it('it should not sort items by default', () => {
      const items = ['B', 'A']
      const wrapper = shallow(
        <ChipInput entries={items} />
      ).dive()
      expect(wrapper.state().entries[0]).toEqual({ 'valid': true, 'value': 'B' })
    })

    it('it should sort items when the sorted prop is true', () => {
      const items = ['B', 'A']
      const wrapper = shallow(
        <ChipInput sorted entries={items} />
      ).dive()
      expect(wrapper.state().entries[0]).toEqual({ 'valid': true, 'value': 'A' })
    })
  })

  describe('placeholder', () => {
    it('displays a placeholder', () => {
      const tree = mount(
        <ChipInput placeholder='Placeholder' />
      )

      expect(tree.find('input').getDOMNode().getAttribute('placeholder')).toBe('Placeholder')
    })

    it('is hidden if there are chips', () => {
      const tree = mount(
        <ChipInput placeholder='Placeholder' entries={['foo']} />
      )

      expect(tree.find('input').getDOMNode().getAttribute('placeholder')).toBe(null)
    })
  })

  describe('chip focusing', () => {
    function getFocusedChip (tree) {
      return tree.find('ForwardRef(Chip)').filterWhere((chip) => chip.getDOMNode().style.backgroundColor !== 'rgb(100, 181, 246)')
    }

    function focusChip (tree, name) {
      tree.find('ForwardRef(Chip)').filterWhere((chip) => chip.text() === name).simulate('click')
    }

    it('focuses a chip on click', () => {
      const tree = mount(
        <ChipInput entries={['foo', 'bar']} />
      )
      tree.find('ForwardRef(Chip)').at(1).simulate('click')
      expect(getFocusedChip(tree).length).toBe(1)
      expect(getFocusedChip(tree).text()).toBe('bar')
    })

    it('focuses the last chip when pressing backspace', () => {
      const tree = mount(
        <ChipInput entries={['a', 'b', 'c']} />
      )
      tree.find('input').simulate('keyDown', { keyCode: 8 }) // backspace
      expect(getFocusedChip(tree).text()).toBe('c')
    })

    it('focuses the last chip when pressing the left arrow key if the input is empty', () => {
      const tree = mount(
        <ChipInput entries={['a', 'b', 'c']} />
      )
      tree.find('input').simulate('keyDown', { keyCode: 37 }) // arrow left
      expect(getFocusedChip(tree).text()).toBe('c')

      // don't focus the chip if the input is not empty
      tree.find('input').getDOMNode().value = 'd'
      tree.find('input').simulate('keyDown')
      expect(getFocusedChip(tree).length).toBe(0)
      tree.find('input').simulate('keyDown', { keyCode: 37, target: { value: 'd' } }) // arrow left
      expect(getFocusedChip(tree).length).toBe(0)
    })

    it('unfocuses the focused chip while adding a new chip', () => {
      const tree = mount(
        <ChipInput entries={['foo', 'bar']} />
      )
      focusChip(tree, 'foo')
      tree.find('input').simulate('keyDown')
      expect(getFocusedChip(tree).length).toBe(0)
    })

    it('unfocuses the focused chip on blur', () => {
      const tree = mount(
        <ChipInput entries={['foo', 'bar']} />
      )
      focusChip(tree, 'foo')
      tree.find('input').simulate('blur')
      expect(getFocusedChip(tree).length).toBe(0)
    })

    it('moves the focus to the left when pressing the left arrow key', () => {
      const tree = mount(
        <ChipInput entries={['a', 'b', 'c']} />
      )
      focusChip(tree, 'b')
      tree.find('input').simulate('keyDown', { keyCode: 37 }) // arrow left
      expect(getFocusedChip(tree).text()).toBe('a')

      // keep the first element focused when pressing left if the first element is already focused
      tree.find('input').simulate('keyDown', { keyCode: 37 }) // arrow left
      expect(getFocusedChip(tree).text()).toBe('a')
    })

    it('moves the focus to the right when pressing the right arrow key', () => {
      const tree = mount(
        <ChipInput entries={['a', 'b', 'c']} />
      )
      focusChip(tree, 'b')
      tree.find('input').simulate('keyDown', { keyCode: 39 }) // arrow right
      expect(getFocusedChip(tree).text()).toBe('c')

      // unfocus all chips if the right arrow key is pressed when focusing the last chip
      tree.find('input').simulate('keyDown', { keyCode: 39 }) // arrow right
      expect(getFocusedChip(tree).length).toBe(0)
    })

    it('focuses the chip to the left when removing a chip by pressing backspace', () => {
      const tree = mount(
        <ChipInput entries={['a', 'b', 'c']} />
      )
      focusChip(tree, 'b')

      tree.find('input').simulate('keyDown', { keyCode: 8 }) // backspace
      expect(getFocusedChip(tree).text()).toBe('a')
    })
  })
})
