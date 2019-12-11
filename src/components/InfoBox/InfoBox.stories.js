import { storiesOf } from '@storybook/react';
import React from 'react';
// import { withKnobs, text } from '@storybook/addon-knobs';

import InfoBox from './InfoBox';

const wrapperStyles = {
    padding: '20px',
    backgroundColor: 'yellow',
};

storiesOf('InfoBox', module)
    .addDecorator((Story) => (
        <div style={wrapperStyles}>
            <Story />
        </div>
    ))
    // .addDecorator(withKnobs)
    .add('Default', () => {
        return (
            <InfoBox ctaLabel={'Read more'} ctaHref="/faq">
                <h2>This is a title</h2>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
            </InfoBox>
        );
    });
