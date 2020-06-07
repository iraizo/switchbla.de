import React from "react";
import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render () {
        return (
            <html lang='en-US'>
                <Head>
                    <meta name="theme-color" content="#fa2a43"/>
                    <meta name="description" content="raizo - soft and web developer."/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}