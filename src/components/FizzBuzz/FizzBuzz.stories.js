import { storiesOf } from '@storybook/react';
import React from 'react';

import FizzBuzz from './FizzBuzz';

storiesOf('FizzBuzz', module)
    .add('1', () => <FizzBuzz count={1} />)
    .add('2', () => <FizzBuzz count={2} />)
    .add('Fizz', () => <FizzBuzz count={3} />)
    .add('4', () => <FizzBuzz count={4} />)
    .add('Buzz', () => <FizzBuzz count={5} />)
    .add('FizzBuzz', () => <FizzBuzz count={15} />);
