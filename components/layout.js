import React, { useEffect } from "react"
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme.js"

export default ({ children }) => {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return <div>
          <Head>
            <title>HomePage Demo</title>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
            <ThemeProvider theme={ theme }>
              { children }
            </ThemeProvider>
          </div>
}
