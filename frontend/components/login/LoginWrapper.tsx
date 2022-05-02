import { FC, useState } from 'react'
import MainButton from '../layout/buttons/MainButton'
import InputText from '../layout/inputs/InputText'
import style from './LoginWrapper.module.css'
import Dumbell from '../layout/svg/Dumbell'
import useResponsive from '../../hooks/useResponsive'

const LoginWrapper: FC = () => {
    const currRes = useResponsive(window.screen.width)

    const handleSubmit = (): void => {
        console.log('click')
    } //end_handleSubmit

    return (
        <>
            {/* <h1>Bienvenido!</h1> */}
            <div className={style['login-container']}>
                <form className={style['login-form']}>
                    <div className={style['login-header']}>
                        <Dumbell />
                        <h2>My Fitness Helper</h2>
                    </div>
                    <div className={style['login-greating']}>¿Como llevas el día?</div>
                    <InputText type="text" placeholder='Usuario' />
                    <InputText type="password" placeholder='Contraseña' />
                    <div className={style.submitButton}>
                        <MainButton onClick={handleSubmit} color="red">Acceder</MainButton>
                    </div>
                </form>
                {
                    currRes.width > 1024 ?

                        <div className={style.infoContainer}>
                            TEST
                        </div>
                        : null
                }
            </div>
        </>
    )
} //end_LoginWrapper

export default LoginWrapper