/* eslint-disable @typescript-eslint/no-explicit-any */

import 'react'

declare module 'react' {
  interface HTMLAttributes<T>
    extends React.AriaAttributes,
      React.DOMAttributes<T> {
    [key: string]: any
  }
}