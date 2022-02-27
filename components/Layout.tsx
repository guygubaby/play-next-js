import React from 'react'
import Head from 'next/head'

type Props = {
  children?: React.ReactNode
  title?: string
}

export default function Layout({ children, title = '' }: Props) {
  return (
    <div className="font-sans">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
