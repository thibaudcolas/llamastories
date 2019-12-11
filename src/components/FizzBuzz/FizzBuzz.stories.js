import { storiesOf } from '@storybook/react';
import React from 'react';

import FizzBuzz from './FizzBuzz';

storiesOf('FizzBuzz', module)
    .add('1', () => <FizzBuzz count={1} />)
    .add('2', () => <FizzBuzz count={1} />)
    .add('Fizz', () => <FizzBuzz count={1} />)
    .add('4', () => <FizzBuzz count={1} />)
    .add('Buzz', () => <FizzBuzz count={1} />)
    .add('FizzBuzz', () => <FizzBuzz count={1} />);
