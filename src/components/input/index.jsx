import React from 'react'
import './styles.css'
export const Input = ({
     placeholder,
    type = 'text',
    required = false,
    id,
    name,
    onFocus,
    onBlur,
    onChange,
    value,
    className,
}) => {
    return (
        <div className={className}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                value={value}
            />
            <label htmlFor={id}>
                {name}
            </label>
        </div>
    )
}
