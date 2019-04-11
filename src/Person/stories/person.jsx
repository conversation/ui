import React from 'react'
import { withDocs } from 'storybook-readme'

import { Avatar, Person } from '../../index'
import { GridLayout } from '../../util'

const md = `
# Person

The \`<Person>\` component renders a name and a caption in a consistent manner.

Should be used when you need to attribute a user with some other content on the page.

Eg.

 - Author of content
 - Donations message
 - Comment

You can optionally include an avatar, but the behaviour isn't great yet. Will be refined shortly.

## Example

<!-- STORY -->
`

export default withDocs(md, () =>
  <GridLayout>
    <Person name='Colonel Koala' caption='Leader of the Koala Freedom Collective'>
      <Avatar />
    </Person>
  </GridLayout>
)
