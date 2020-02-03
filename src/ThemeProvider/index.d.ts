// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/ThemeProvider'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { ThemeProvider, ThemeProvider as default }

declare namespace ThemeProvider {
    interface Props {
        readonly theme: any; // @see ThemeProvider+DefaultTheme types in styled-components d.ts file
        readonly dictionary?: Common.Translations;
        readonly children: React.ReactNode;
    }
}

declare class ThemeProvider extends React.Component<ThemeProvider.Props> {}
