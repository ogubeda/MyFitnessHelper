import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { FC, ReactChild } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Layout = ({ children, home = false, login = false }) => {
    const isAuthenticated = useSelector<RootState>(state => state.auth.isAuthenticated)

    return (
        <div className={styles.container}>
            {!login ?

                <header className={styles.header}>
                </header>
                : null}
            {children}
        </div>
    )

}// end_Layout

type LoginProps = {
    children: ReactChild
}// end_LoginProps

const Login: FC = ({ children }: LoginProps) => {

    return (
        <>

        </>
    )

}// end_Login

export default Layout