import { storiesOf } from '@storybook/react';
import React from 'react';

import Button, { BUTTON_THEMES } from './Button';

storiesOf('Button', module).add('Reference', () => (
    <>
        <p>Buttons:</p>
        {BUTTON_THEMES.map((theme) => (
            <Button
                key={theme}
                theme={theme}
                icon={theme.includes('circle') ? 'microphone' : null}
            >
                {theme.includes('circle') ? null : theme}
            </Button>
        ))}
        <p>Link buttons:</p>
        {BUTTON_THEMES.map((theme) => (
            <Button
                to={theme}
                key={`to-${theme}`}
                theme={theme}
                title={theme}
                icon={theme.includes('circle') ? 'microphone' : null}
            >
                {theme.includes('circle') ? null : theme}
            </Button>
        ))}
    </>
));
