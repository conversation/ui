import Person from './Person'
import React from 'react'
import { mount } from 'enzyme'

describe('<Person />', () => {
  it('renders a caption if the prop is provided', () => {
    const wrapper = mount(<Person name='Steve' caption='Big Boss' />)
    const heading = wrapper.find('h6')
    const title = wrapper.find('p')

    expect(heading.length).toBe(1)
    expect(heading.text()).toBe('Steve')

    expect(title.length).toBe(1)
    expect(title.text()).toBe('Big Boss')
  })

  it('does not render a caption if not provided', () => {
    const wrapper = mount(<Person name='Steve' />)
    const heading = wrapper.find('h6')
    const title = wrapper.find('p')

    expect(heading.length).toBe(1)
    expect(heading.text()).toBe('Steve')

    expect(title.length).toBe(0)
  })
})
