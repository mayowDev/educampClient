import React from 'react';
import { Link } from 'react-router-dom'
import { IMenuItemProps } from './types';

const MenuItem:React.FC<IMenuItemProps> = ({ to, value, icon, className }) => {
    return (
        <Link to={to} className={'menu-item' + (className ? ` ${className}` : '')}>
            {icon && <img src={icon} alt='icon' />}
            {value}
        </Link>
    )
};

export default MenuItem;
