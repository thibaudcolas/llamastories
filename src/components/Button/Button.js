import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import './Button.scss';

import Icon from '../Icon/Icon';

const THEMES = {
    default: 'button button-rounded',
    primary: 'button button-rounded button-rounded--pink',
    secondary: 'button button-rounded button-rounded--pink-ghost',
    primaryAlt: 'button button-rounded button-rounded--blue',
    secondaryAlt: 'button button-rounded button-rounded--blue-ghost',
    action: 'button button-action',
    link: '',
};
export const BUTTON_THEMES = Object.keys(THEMES);

const Button = ({
    children,
    to,
    href,
    theme,
    className,
    icon,
    iconBefore,
    iconAfter,
    ...rest
}) => {
    const btnClassName = `${THEMES[theme]} ${className || ''} ${
        icon ? 'button--icon-only' : ''
    }`;

    const contents = (
        <>
            {iconBefore ? (
                <Icon
                    name={iconBefore}
                    className="button__icon button__icon--before"
                />
            ) : null}
            {icon ? (
                <Icon
                    name={icon}
                    className="button__icon button__icon--center"
                />
            ) : (
                children
            )}
            {iconAfter ? (
                <Icon
                    name={iconAfter}
                    className="button__icon button__icon--after"
                />
            ) : null}
        </>
    );

    if (to) {
        return (
            <Link to={to} {...rest} className={btnClassName}>
                {contents}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} {...rest} className={btnClassName}>
                {contents}
            </a>
        );
    }

    return (
        <button type="button" {...rest} className={btnClassName}>
            {contents}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    theme: PropTypes.oneOf(BUTTON_THEMES),
    className: PropTypes.string,
    icon: PropTypes.string,
    iconBefore: PropTypes.string,
    iconAfter: PropTypes.string,
};

Button.defaultProps = {
    children: null,
    to: null,
    href: null,
    theme: 'default',
    className: null,
    icon: null,
    iconBefore: null,
    iconAfter: null,
};

export default Button;
