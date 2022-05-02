import { FC } from 'react'
import style from './MainButton.module.css'

type Props = {
    children: any,
    onClick: () => void,
    color: string
}

const MainButton: FC<Props> = ({ children, onClick, color }) => {

    const handleClick = (e): void => {
        e.preventDefault()
        onClick()
    } //end_handleClick

    return (
        <>
            <button className = {`${style['main-button']} ${style[color]}`} onClick = {(e) => handleClick(e)}>{children}</button>
        </>
    )
} //end_MainButton

export default MainButton