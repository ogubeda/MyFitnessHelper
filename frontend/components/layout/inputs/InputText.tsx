import { ChangeEventHandler, FC } from 'react'
import style from './InputText.module.css'

interface Props {
    type: string,
    placeholder?: string,
    onChange?: any,
    value?: string,
}

const InputText: FC<Props> = ({ type, placeholder, onChange, value }) => {


    return (
        <>
            <input className = {style.inputText} type = {type} placeholder = {placeholder} onChange = {onChange} value = {value}/>
        </>
    )
}// end_InputText

export default InputText