import React from 'react';
import PropTypes from 'prop-types';

/**
 * Classic FizzBuzz, silly React edition.
 */
const FizzBuzz = ({ count }) => {
    if (count % 3 === 0) {
        if (count % 5 === 0) {
            return <span className="fizzbuzz fizzbuzz--fizzbuzz">15</span>;
        }

        return <span className="fizzbuzz fizzbuzz--fizz">Fizz</span>;
    }

    if (count % 5 === 0) {
        return <span className="fizzbuzz fizzbuzz--buzz">Buzz</span>;
    }

    return <span className="fizzbuzz">{count}</span>;
};

FizzBuzz.propTypes = {
    count: PropTypes.number.isRequired,
};

FizzBuzz.defaultProps = {
    className: null,
};

export default FizzBuzz;
