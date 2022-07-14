import React, { FunctionComponent } from "react"

interface Props {
    variant: "primary" | "secondary" | "disabled"
    type?: "button" | "submit" | "reset" | undefined
    className?: string;
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

const STYLE_MAP = {
    primary: 'text-sm',
    secondary: 'text-sm',
    disabled: 'text-sm'
}

const Button: FunctionComponent<Props> = (props: Props) => {
    return (
        <button
            className={`${STYLE_MAP[props.variant]} ${props.className}`}
            type={props.type ? props.type : "button"}
            onClick={props.onClick}
            disabled={props.disabled ? props.disabled : false}
        >
            {props.text}
        </button>
    )
}

export { Button }