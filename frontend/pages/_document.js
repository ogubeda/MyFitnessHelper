import { Html, Main, Head,NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head />
        <body>
          <div className='wrapper'>
            <Main />
            <NextScript />
          </div>
        </body>
    </Html>
  )
}