import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-h-screen bg-desktop-light 
        bg-no-repeat bg-left-top'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
