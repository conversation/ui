import React from 'react'
import { withDocs } from 'storybook-readme'

import { GridLayout } from '../../util'
import ChipInput from '../ChipInput'

const md = `
# States

## Example

<!-- STORY -->
`
export default withDocs(md, () => (
  <GridLayout>
    <ChipInput
      entries={['Books', 'Movies']}
      label={'Default'}
      helperText={'Helper text'}
    />
    <ChipInput
      entries={['Books', 'Movies']}
      label={'Required'}
      helperText={'Helper text'}
      required
    />
    <ChipInput
      entries={['Books', 'Movies']}
      label={'Disabled'}
      helperText={'Helper text'}
      disabled
    />
    <ChipInput
      entries={['Books', 'Movies']}
      label={'Error'}
      helperText={'Helper text'}
      error
    />
    <ChipInput
      entries={['Books', 'Movies']}
      label={'Validations'}
      helperText={'I validate my chips'}
      onValidateEntry={(e) => e === 'Books'} />
    <ChipInput
      entries={['Iron Man', 'Avengers']}
      label={'Sorting'}
      helperText={'I sort my chips'}
      sorted />
  </GridLayout>
))
