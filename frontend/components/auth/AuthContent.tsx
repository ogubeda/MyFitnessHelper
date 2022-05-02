import { FC, useState, useEffect } from 'react'
import { connect } from "react-redux";
import { RootState } from '../../store'
import { useRouter } from 'next/router';

interface pageProps {
    children: any;
}

const AuthContent: FC<pageProps> = ({ children }) => {
    const router = useRouter()
    const [ authorized, setAuthorized ] = useState<boolean>(false)

    useEffect(() => {
        authCheck(router.asPath);

        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

    }, []);
    const authCheck = (url: string) => {
        const publicPaths = ['/login']
        const currentPath = url.split('?')[0]

        if (!publicPaths.includes(currentPath)) {
            setAuthorized(false)
            router.push({
                pathname: '/login',
            })
        } else setAuthorized(true)
    } // end_authCheck


    return (authorized && children)

} // end_AuthContent

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, {})(AuthContent);