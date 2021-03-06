import { FC, useState } from 'react'
import MainButton from '../layout/buttons/MainButton'
import InputText from '../layout/inputs/InputText'
import style from './LoginWrapper.module.css'
import Dumbell from '../layout/svg/Dumbell'
import useResponsive from '../../hooks/useResponsive'
import useTestEmail from '../../hooks/useTestEmail'
import useTestPassword from '../../hooks/useTestPassword'
import { TiWarningOutline } from 'react-icons/ti'
import { logIn } from '../../store/auth/actions/auth.actions'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

const LoginWrapper: FC = () => {
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ showEmailErr, setShowEmailErr ] = useState<boolean>(false)
    const [ showPasswordErr, setShowPasswordErr ] = useState<boolean>(false)
    const dispath = useAppDispatch()
    const emailTest = useTestEmail(email)
    const passwordTest = useTestPassword(password) 
    const currRes = useResponsive()
    const state = useAppSelector(state => state)

    console.log(state)

    const changeEmail = (event) => {
        setEmail(event.target.value)
    } //end_changeEmail

    const changePassword = (event) => {
        setPassword(event.target.value)
    } //end_changePassword

    const handleSubmit = (): void => {
        setShowEmailErr(!emailTest)
        setShowPasswordErr(!passwordTest)
        
        if (emailTest && passwordTest) {
            console.log("perfect")
            dispath(() => logIn(email, "user"))
        }
    } //end_handleSubmit

    return (
        <>
            <div className={style['login-container']}>
                <form className={style['login-form']}>
                    <div className={style['login-header']}>
                        {currRes.width < 1024 && <Dumbell />}
                        <h2>{currRes.width > 1024 ? "Acceso" : "Fit Helper"}</h2>
                    </div>
                    <div className={style['login-greating']}>??Como llevas el d??a?</div>
                    <div className= {style.loginInput}>
                        <InputText type="text" placeholder='Correo electr??nico' onChange={e => changeEmail(e)} value = {email}/>
                        <TiWarningOutline className= {`${style.loginInputWarning} ${showEmailErr && style.show}`} />
                    </div>
                    <div className= {style.loginInput}>
                        <InputText type="password" placeholder='Contrase??a' onChange={e => changePassword(e)} value = {password} />
                        <TiWarningOutline className= {`${style.loginInputWarning} ${showPasswordErr && style.show}`} />
                    </div>
                    <div className={style.submitButton}>
                        <MainButton onClick={handleSubmit} color="red">Acceder</MainButton>
                    </div>
                </form>
                {
                    currRes.width > 1024 &&

                        <div className={style.infoContainer}>
                            <div className = {style.infoSentences}>
                                <div>
                                    <div className = {style.infoHeader}>
                                        <Dumbell className={style.iconHeader} />
                                        <h1>Fit Helper</h1> 
                                    </div>
                                    <br />
                                    <p className = {style.infoDesc}>Fit Helper es una aplicaci??n dise??ada para ayudarte a cumplir tus objetivos.</p>
                                    <p className = {style.infoDesc}>Con ella podr??s crear tus rutinas de ejercicios, establecer tus planes nutricionales, anotar tus progresos e introducir las comidas que has realizado durante el d??a.</p>
                                </div>
                                
                            </div>
                        </div>
                }
            </div>
        </>
    )
} //end_LoginWrapper

export default LoginWrapper