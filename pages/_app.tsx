import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/theme-container'
import Header from '../components/header'
import Footer from '../components/footer'

import seoConfig from '../config/seo'
import '../styles/font.css'
import { NextPage } from 'next'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <Header />
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
        <Footer />
      </ThemeContainer>
    </>
  )
}

export default MyApp
