// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/InputFile'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { InputFile, InputFile as default }

declare namespace InputFile {
    // InputEvent
    type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

    interface Props extends Common.Global, Common.SpaceAfter {
        readonly label?: Common.Translation;
        readonly title?: React.ReactNode;
        readonly name?: string;
        readonly placeholder?: Common.Translation;
        readonly fileName?: string;
        readonly allowedFileTypes?: string | string[];
        readonly help?: React.ReactNode;
        readonly error?: React.ReactNode;
        readonly tabIndex?: string;
        readonly onChange?: Event;
        readonly onFocus?: Event;
        readonly onBlur?: Event;
        readonly onRemoveFile?: Common.Callback;
        readonly ref?: Common.Ref;
    }
}

declare class InputFile extends React.Component<InputFile.Props> {}
