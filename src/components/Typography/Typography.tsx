// @ts-nocheck
import React  from 'react';
import {ITextProps, ITitleProps, ISubtitleProps, IAnchorProps, IParagraphProps, ITimeLineProps} from './types';
import {Link} from 'react-router-dom';

export const H1: React.FC<ITextProps> = ({value, className}) => {
    return (
        <h1 className={`h1 ${className || ''}`}>
            {value}
        </h1>
    )
};
export const Heading = ({value, className ="", ...rest}) => {
    return (
        <h1 className={`heading ${className}`} {...rest}>
            {value}
        </h1>
    )
};

export const H2: React.FC<ITextProps> = ({value, className}) => {
    return (
        <h2 className={`h2 ${className || ''}`}>
            {value}
        </h2>
    )
};

export const H3: React.FC<ITextProps> = ({value, className}) => {
    return (
        <h3 className={`h3 ${className || ''}`}>
            {value}
        </h3>
    )
};

export const H4: React.FC<ITextProps> = ({value, className}) => {
    return (
        <h4 className={`h4 ${className || ''}`}>
            {value}
        </h4>
    )
};

export const P1: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`p1 ${className || ''}`}>
            {value}
        </p>
    )
};

export const P2: React.FC<ITextProps> = ({value, className}) => {
    const italic = (value && value !== undefined && value.split('{'));
    return (
        <p className={`p2 ${className || ''}`}>
            {italic ? italic[0] : value} {italic && value.indexOf('{') !== -1 && <span><i>{italic[1]}</i></span>}
        </p>
    )
};

export const P3: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`p3 ${className || ''}`}>
            {value}
        </p>
    )
};

export const Detail: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`detail ${className || ''}`}>
            {value}
        </p>
    )
};

export const Title:React.FC<ITitleProps> = ({value, className}) => {
    return (
        <h1 className={`title ${className || ''}`}>
            {value}
        </h1>
    )
};

export const Title2:React.FC<ITitleProps> = ({value, className}) => {
    return (
        <h3 className={`title sub-title` + (className ? (' ' + className) : '')}>
            {value}
        </h3>
    )
};

export const SubTitle: React.FC<ISubtitleProps> = ({onClick, value, className, link, to}) => {
    return (
        <p className={`subtitle ${className || ''}`} onClick={onClick}>
            {value} {link && <Link to={to}>{link}</Link>}
        </p>
    )
};

export const Tooltip: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`tooltip ${className || ''}`}>
            {value}
        </p>
    )
};

export const Navigation1: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`navigation1 ${className || ''}`}>
            {value}
        </p>
    )
};

export const Navigation2: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`navigation2 ${className || ''}`}>
            {value}
        </p>
    )
};

export const Label: React.FC<ITextProps> = ({value, className}) => {
    return (
        <p className={`label ${className || ''}`}>
            {value}
        </p>
    )
};

export const Paragraph:React.FC<IParagraphProps> = ({value, className, onClick = ()=>{}}) => {
    return (
        <p className={`paragraph ${className || ''}`} onClick={() => onClick()}>
            {value}
        </p>
    )
};

export const Timeline: React.FC<ITimeLineProps> = ({value, className}) => {
    return (
        <p className={'timeline' + (className ? (' ' + className) : '')}>
            {value}
        </p>
    )
};

export const SmallLabel = ({value}) => {
    return (
        <p className='sm-label'>
            {value}
        </p>
    )
};

export const Anchor: React.FC<IAnchorProps> = ({value, to, inline, className, bold, target}) => {
    return (
        <>
            <a href={to} className={'anchor' + `${inline ? ' inline' : ''}` + `${bold ? ' bold' : ''}` + `${className ?  (' ' + className) : ''}`} target={target}>
                {value}
            </a>
        </>
    )
};

