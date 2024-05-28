'use client'

import React from "react"

interface PropsInput{
    label: string,
    props?: React.InputHTMLAttributes<HTMLInputElement>
}

const Input = ({label, props}:PropsInput) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="">{label}</label>
            <input 
                className="border rounded-md max-w-[220px] outline-none" 
                type="text"
                {...props} 
            />
        </div>
    )
}

export default Input;

