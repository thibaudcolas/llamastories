import React from 'react';
import PropTypes from 'prop-types';

import './FizzBuzz.scss';

const themes = {
    dark: 'fizzbuzz fizzbuzz--dark',
    light: 'fizzbuzz fizzbuzz--light',
};

/**
 * Classic FizzBuzz, silly React edition.
 */
const FizzBuzz = ({ theme, count }) => {
    const className = themes[theme];

    if (count % 3 === 0) {
        if (count % 5 === 0) {
            return <div className={className}>15</div>;
        }

        return <div className={className}>Fizz</div>;
    }

    if (count % 5 === 0) {
        return <div className={className}>Buzz</div>;
    }

    return <div className={className}>{count}</div>;
};

FizzBuzz.propTypes = {
    theme: PropTypes.oneOf(Object.keys(themes)),
    count: PropTypes.number.isRequired,
};

FizzBuzz.defaultProps = {
    className: null,
    theme: 'light',
};

export default FizzBuzz;
