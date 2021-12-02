import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import { ApolloProvider } from '@apollo/client';

import PageChange from "components/PageChange/PageChange.js";
import withData from '../lib/withData';
import CookiesNotification from 'components/CookiesNotification';

import { LanguageProvider } from '../contexts/LanguageContext';
import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import "styles/globals.css";




Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});


class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* Yozoon using NextJS Material Kit
=========================================================
* Product Page: https://yozoon.com/
* Copyright 2021 Star Team
* Coded by Dmitriy Kushkulov
=========================================================
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
        <React.Fragment>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Yozoon</title>
            <link href="//db.onlinewebfonts.com/c/e4c8318ba2d7dcf9a7eec8d56346dedb?family=ITC+Ronda" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Head>
          <ApolloProvider client={apollo}>
            <LanguageProvider>
              <CookiesNotification />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LanguageProvider>
          </ApolloProvider>
        </React.Fragment>
      
    );
  }
}

export default withData(MyApp);
