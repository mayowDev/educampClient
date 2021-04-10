export interface ITextProps {
    value: string,
    className?: string,
}

export interface IParagraphProps{
    className?: string;
    onClick?: (val?: string) => void;
    value: string;
}

export interface ITimeLineProps{
    className?: string;
    value: string;
}

export interface ISubtitleProps {
    value?: string,
    className?: string,
    link?: string,
    to?: string,
    onClick?: () => void,
}

export interface ITitleProps{
    className?: string;
    value: string;
}

export interface IAnchorProps{
    className?: string;
    target?: string;
    value: string;
    to?: string;
    inline?: string | boolean;
    bold?: boolean;
}