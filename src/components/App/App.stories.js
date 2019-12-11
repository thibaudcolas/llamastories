import { storiesOf } from '@storybook/react';
import React from 'react';

import App from './App';

storiesOf('App', module).add('Hello, World! This is your first story', () => {
    return <App />;
});
