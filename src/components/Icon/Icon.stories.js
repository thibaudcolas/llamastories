import { storiesOf } from '@storybook/react';
import React from 'react';

import Icon from './Icon';

// Automagically retrieve the list of available icons from the sprite
const ALL_ICONS = [
    ...document.querySelectorAll('[data-storybook-svg-icons] symbol'),
]
    .map((symbol) => symbol.id)
    .sort();

storiesOf('Icon', module).add('All', () => (
    <table>
        <caption>All available icons</caption>
        <tbody>
            {ALL_ICONS.map((icon) => (
                <tr key={icon}>
                    <td>
                        <Icon name={icon} />
                    </td>
                    <td>
                        <code>{icon}</code>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
));
