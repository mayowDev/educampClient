export interface IIconBtnProps {
    type: string,
    onClick?: (e?:any) => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    onMouseDown?: () => void,
    onMouseUp?: () => void,
    to?: string,
    className?: string,
    secondary?: boolean;
    noHover?: boolean;
}
