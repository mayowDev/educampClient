// @ts-nocheck
import React from 'react';
import IButtonProps from './types';
import { Link } from 'react-router-dom';

const Button: React.FC<IButtonProps> = ({className, disable, onClick, value, type, size, to, iconType}) => {

    const button = () => (
        <button disabled={disable} className={`button ${`${'button__'+size}` || ''} ${type || ''} ${className || ''} ${iconType === "next" ? 'button__icon-animate' : ''}`} onClick={onClick}>
            {iconType === "next" &&
            <>
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.79526 6.41466L1.8456 10.774C1.5726 11.0753 1.13117 11.0753 0.861084 10.774L0.204743 10.0496C-0.0682479 9.74829 -0.0682479 9.26107 0.204743 8.96296L3.00436 5.87295L0.204743 2.78294C-0.0682482 2.48163 -0.0682482 1.99441 0.204743 1.6963L0.861083 0.971884C1.13407 0.670575 1.57551 0.670575 1.8456 0.971884L5.79526 5.33124C6.06825 5.62613 6.06825 6.11336 5.79526 6.41466Z" fill="white"/>
              </svg>
            </>
            }
            {iconType === "check" &&
            <>
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.6437 7.84288L0.157101 4.35628C-0.0523671 4.14681 -0.0523671 3.80718 0.157101 3.59769L0.915668 2.8391C1.12514 2.62961 1.46479 2.62961 1.67426 2.8391L4.023 5.18782L9.05374 0.157101C9.26321 -0.0523671 9.60286 -0.0523671 9.81233 0.157101L10.5709 0.915689C10.7804 1.12516 10.7804 1.46479 10.5709 1.67428L4.40229 7.8429C4.1928 8.05237 3.85317 8.05237 3.6437 7.84288Z" fill="#1A1A1A"/>
              </svg>
              &nbsp;&nbsp;
            </>
            }
            <span>{value}</span>
        </button>
    );

    return (
        <>
        {
            to ? (
                <Link to={to}>
                    {button()}
                </Link>
            ) : (
                <>
                {button()}
                </>
            )
        }
        </>
    )
}

export default Button;
