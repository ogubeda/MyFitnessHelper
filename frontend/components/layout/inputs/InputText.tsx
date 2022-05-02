import { FC } from 'react'
import style from './InputText.module.css'

interface Props {
    type: string,
    placeholder?: string
}

const InputText: FC<Props> = ({ type, placeholder }) => {

    return (
        <>
            <input className = {style.inputText} type = {type} placeholder = {placeholder} />
        </>
    )
}// end_InputText

export default InputText