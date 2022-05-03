import { FC, useState } from 'react'
import MainButton from '../layout/buttons/MainButton'
import InputText from '../layout/inputs/InputText'
import style from './LoginWrapper.module.css'
import Dumbell from '../layout/svg/Dumbell'
import useResponsive from '../../hooks/useResponsive'

const LoginWrapper: FC = () => {
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const currRes = useResponsive()

    const handleSubmit = (): void => {
        console.log('click')
    } //end_handleSubmit

    return (
        <>
            <div className={style['login-container']}>
                <form className={style['login-form']}>
                    <div className={style['login-header']}>
                        <Dumbell />
                        <h2>Fit Helper</h2>
                    </div>
                    <div className={style['login-greating']}>¿Como llevas el día?</div>
                    <InputText type="email" placeholder='Correo electrónico' onChange={e => setEmail(e.target.value)} value = {email}/>
                    <InputText type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} value = {password} />
                    <div className={style.submitButton}>
                        <MainButton onClick={handleSubmit} color="red">Acceder</MainButton>
                    </div>
                </form>
                {
                    currRes.width > 1024 &&

                        <div className={style.infoContainer}>
                            <Dumbell className = {style.iconBackground} />
                            <div className = {style.infoSentences}>
                                <div>Logra tus objetivos</div>
                                <div>Anota tus progresos</div>
                                <div>Ajusta tu plan nutricional y entrenamiento</div>
                                <div>Descubre tu potencial</div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
} //end_LoginWrapper

export default LoginWrapper