import { FC } from 'react'
import Layout from '../components/layout/layout';
import LoginWrapper from '../components/login/LoginWrapper';

const Login: FC = () => {
    return (
        <>
            <Layout>
                <LoginWrapper />
            </Layout>
        </>
    )
} //end_Login

export default Login;