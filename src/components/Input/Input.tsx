// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import IInputProps from './types';
import DarkEye from '../../assets/icons/eye-close-up.svg';
import BrightEye from '../../assets/icons/eye-close-up-bright.svg';
import { P2 } from '../Typography';
import smoothscroll from 'smoothscroll-polyfill';


const Input: React.FC<IInputProps> = ({name, label, onChange, value, placeholder, type, className, disabled, onMouseLeave, autoComplete, passwordVisible, errorMsg}) => {
    const [focus, setFocus] = useState(false);
    const [passVisible, setPassVisibility] = useState(false);
    // const [inputValue, setValue] = useState(value || '');
    const [browser, setBrowser] = useState('');
    const InputRef = useRef(null);

    const handleBlur = () => {
        // if(inputValue === ''){
        //     setFocus(false);
        // }
        if(value === ''){
            setFocus(false);
        }
    };

    const getBrowser = () => {
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        if(isChrome === true){
            return 'chrome';
        }
        else if (isFirefox === true){
            return 'firefox';
        }
        else if (isSafari === true){
            return 'safari';
        }
        else{
            return '';
        }
    }

    const reValue = () => {
        if(browser === 'chrome') {
            const allFields = document.querySelectorAll('.input-field');
            allFields && allFields.forEach(field => (field.value = field.value));
        }
    };

    // useEffect(() => {
    //     setValue(value);
    // }, [value]);

    useEffect(() => {
        setBrowser(getBrowser());
        smoothscroll.polyfill();
        // setValue(value);
    }, []);

    const handleFocus = (el) => {
        if(browser === 'chrome' && window.innerWidth < 554){
            const elementTop = window.pageYOffset + el.target.getBoundingClientRect().top;
            // var elDistanceToTop = window.pageYOffset + e.getBoundingClientRect().top
            window.scrollTo(0, elementTop - 180);
            // window.scroll({ top: elementTop - 180, behavior: 'smooth' });
        };
    };

    const handlePasswordVisibility = () => {
        setPassVisibility(!passVisible);
    };

    return (
        <>
            <label id={name} onFocus={(e) => handleFocus(e)}  className={`input ${className} ${type ? 'input--password' : ''} ${errorMsg ? 'input--error' : ''} ${(focus || value || className.includes('input--error')) ? 'active' : ''} ${disabled ? 'input--disabled' : ''} ${name || ''}`} onMouseLeave={onMouseLeave} onClick={() => reValue()} >
                <p className={`label`}>
                    {label}
                </p>
                <input
                    ref={InputRef}
                    onFocus={() => {setFocus(true);}}
                    onBlur={handleBlur}
                    disabled={disabled}
                    id={name}
                    name={name}
                    type={type === 'password' ? (passVisible ? 'text' : 'password') : type}
                    autoComplete={autoComplete ? autoComplete : "false"}
                    onChange={onChange}
                    value={value}
                    className="input-field"
                    placeholder={placeholder}
                />
                {
                    type === 'password' &&
                    <div onClick={() => handlePasswordVisibility()} className={`eye-icon ${className.includes('input__bright')  ? '' : 'bright'} ${passVisible ? 'password-visible' : ''}`}>
                      <img src={className.includes('input__bright') ? DarkEye : BrightEye} alt='eye' />
                    </div>
                }
                {window.innerWidth <= 780 && errorMsg && <P2 className={`input-err-msg`} value={errorMsg} />}
            </label>
        </>
    )
};

export default Input;
