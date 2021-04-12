interface IInputProps {
    label: string,
    name: string,
    onChange: Function,
    value?: string,
    placeholder: string,
    type: string,
    className?: string,
    errorMsg?: string,
    disabled?: boolean,
    autoComplete?: string | boolean,
    onMouseLeave?: Function,
    onFocus?: Function,
}

export default IInputProps;
