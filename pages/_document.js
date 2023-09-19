import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-[#0d1117] bg-white dark:text-white text-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
