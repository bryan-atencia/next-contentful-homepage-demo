import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import regeneratorRuntime from "regenerator-runtime";

import { Grid, Typography, makeStyles } from "@material-ui/core"

import { getHome } from "../functions"

import Layout from '../components/layout'
import Header from "../components/home/Header"
import Divider from "../components/home/Divider"
import TrendBanners from "../components/home/TrendBanners"
import VideoBanner from "../components/home/VideoBanner"
import OptionsBanner from "../components/home/OptionsBanner"
import CelebrityBannerHeader from "../components/home/CelebrityBannerHeader"
import CelebrityBanner from "../components/home/CelebrityBanner"

const useStyles = makeStyles((theme) => ({
  homePage: {
    // maxWidth: '1180px',
    margin: '0 auto',
    overflow: 'hidden'
  },
  homePageMainBodyGrid: {
    padding: '0 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  }
}))

export default (props) => {

   const classes = useStyles(props)
   const {
     data: {
       homebanner,
       trendbanners,
       videobanner,
       optionbanners,
       options,
       celebritybanners,
       mediabanners
     }
   } = props

   return <Layout>
              <Grid>
                <Header data={ homebanner }  />
                <Divider margin="50" />
                <Grid className={classes.homePageMainBodyGrid}>
                  <TrendBanners data={trendbanners}  classData={classes} />
                  <Divider margin="50" />
                  <VideoBanner data={videobanner} classData={classes} />
                  <Divider margin="50" />
                  <OptionsBanner data={optionbanners} classData={classes} />
                  <Divider margin="50" />
                  <CelebrityBannerHeader classData={classes} />
                  <Divider margin="23" />
                  <CelebrityBanner data={celebritybanners} classData={classes} />
                  <Divider margin="67" />
                </Grid>
              </Grid>
            </Layout>

}

export async function getStaticProps() {

  return {
    props: {
      fallback: true,
      data: await getHome()
    }
  }
}
