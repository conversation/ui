import { doc } from 'storybook-readme'

const md = `
# Theme

To apply our default theme, you will need to wrap all your components with a
single top-level \`<ThemeProvider>\` component.

The theme provider will automatically pass the current theme to the child
components using a react [context](https://reactjs.org/docs/context.html).

~~~js
import { Button, ThemeProvider } from '@theconversation/ui'

<ThemeProvider>
  <Button>Click Me!</Button>
</ThemeProvider>
~~~
`

export default doc(md)
