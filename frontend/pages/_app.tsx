import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import appStore from '../store'
import AuthContent from '../components/auth/AuthContent';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>My Fitness Helper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store = {appStore}>
        <AuthContent>
          <Component {...pageProps} />
        </AuthContent>
      </Provider>
    </>
  )
}

export default MyApp