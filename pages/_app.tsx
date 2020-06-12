import React from 'react';
import App from 'next/app';
import Head from "next/head";
import "../public/css/tailwind.css";
import "../public/css/main.css";

export default class MyApp extends App {
    

    render() {
        const {Component, pageProps} = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>switchbla.de</title>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}
