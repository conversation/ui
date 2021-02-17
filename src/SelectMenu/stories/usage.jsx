import React, { useState } from 'react'
import { withDocs } from 'storybook-readme'
import { action } from '@storybook/addon-actions'
import CheckIcon from '@material-ui/icons/Check'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import SelectMenu from '../SelectMenu'
import Button from '../../Button'
import SelectMenuItem from '../SelectMenuItem'
import Typography from '../../Typography'
import { Grid } from '../../index'

const md = `
# Usage

<!-- STORY -->
`

function SelectableMenuItem ({ name, select, selected }) {
  const clickMenuItem = (event) => { action('Clicked menu item')(event) }

  return (
    <SelectMenuItem
      onClick={(e) => {
        clickMenuItem(e)
        select(name)
      }}
      selected={selected}
    >
      <Grid container>
        <Grid item xs={2}>
          { selected ? <CheckIcon /> : null }
        </Grid>
        <Grid item xs={9}>
          <Typography variant='button'>{name}</Typography>
          <Grid item xs={12}>
            <Typography variant='caption'>Selects the "{name}" option</Typography>
          </Grid>
        </Grid>
      </Grid>
    </SelectMenuItem>
  )
}

function ExampleMenu () {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedItem, selectItem] = useState('One')
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    action('Opening menu: sets anchorEl')(event)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    action('Closing menu: removes anchorEl')()
    setAnchorEl(null)
  }

  return (
    <div>
      <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />}>
        Open Menu
      </Button>
      <SelectMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ style: { width: '250px' } }}
      >
        <SelectableMenuItem
          name='One'
          select={() => {
            selectItem('One')
            handleClose()
          }}
          selected={selectedItem === 'One'}
        />
        <SelectableMenuItem
          name='Two'
          select={() => {
            selectItem('Two')
            handleClose()
          }}
          selected={selectedItem === 'Two'}
        />
        <SelectableMenuItem
          name='Three'
          select={() => {
            selectItem('Three')
            handleClose()
          }}
          selected={selectedItem === 'Three'}
        />
        <SelectableMenuItem
          name='Four'
          select={() => {
            selectItem('Four')
            handleClose()
          }}
          selected={selectedItem === 'Four'}
        />
      </SelectMenu>
    </div>
  )
}

export default withDocs(md, () => <ExampleMenu />)
