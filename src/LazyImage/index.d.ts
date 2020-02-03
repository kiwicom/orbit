// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/LazyImage'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { LazyImage, LazyImage as default }

declare namespace LazyImage {
    interface Image {
        jpg: string;
        webp: string;
    }

    interface Props {
        readonly placeholder?: Image;
        readonly original: Image;
        readonly name: Common.Translation;
    }

    interface State {
        loaded: boolean;
    };
}

declare class LazyImage extends React.Component<LazyImage.Props> {}
