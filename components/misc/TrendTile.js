import React from "react"
import { Grid, Typography, makeStyles} from "@material-ui/core"
import Link from 'next/link'
// import QuickShopTag from "./QuickShopTag"

const useStyles = makeStyles(theme => ({
      bannersDescription: {
        margin: "17px auto 18px",
        fontFamily:theme.fonts.futuraPTDemi,
        [theme.breakpoints.down("sm")]: {
          margin: "25px auto 20px"
        }
      },
      bannersActionText: {
        ...theme.links.ctaLink,
        width: "fit-content",
        margin: "0 auto"
      },
      bannerImage: {
        "& amp-img": {
          width: "100%"
        }
      }
}))

export default (props) => {

        const { data } = props
        const classes = useStyles(props)

        return <>
                  <Grid  style={{ width: "100%"}}>
                        <img
                            src={ data.mediaurl }
                            style={{ "height": "auto", "width": "100%" }}
                            className={classes.bannerImage}
                        />
                    { /* data.quickLinks &&
                      data.quickLinks.map((x, y) => <QuickShopTag key={y}
                                                                  data={x}
                                                                  app={app}
                                                                  hover={true}
                                                                  category={category}
                                                                  label={x.actionSku}
                                                                  />) */}
                  </Grid>
                     {data.header_level_one && data.header_level_one !== '' && (
                       <Typography align="center" variant="h5" className={`${classes.bannersDescription} bannerDescription`} >{data.header_level_one}</Typography>
                     )}
                     {data.actiontext && data.actiontext !== '' && (
                       <div style={{ "padding": "3px 0px 40px 0px", margin:"0 auto" }} className="trendTileActionTextGrid">
                         <Typography align="center" className={`${classes.bannersActionText} trendTileActionText`} >{data.actiontext}</Typography>
                       </div>
                     )}
               </>
}
