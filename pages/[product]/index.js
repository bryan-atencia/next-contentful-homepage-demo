import React from "react"
import Link from 'next/link'

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { getProducts } from "../../functions"

import { Grid, Typography, Select, MenuItem, Checkbox, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  productPageGrid: {
    margin: '0 auto',
    height: '100vh',
    width: '100%'
  },
  header: {
      textAlign: 'left',
      marginTop: 10,
      marginBottom: 10,
      fontSize:36,
      [theme.breakpoints.up('md')]: {
        maxWidth: '75%'
      }
    },
    description: {
      fontSize: 24
    }
}))

export default ( props ) => {
  const classes = useStyles(props)
  const router = useRouter()

  let {
    params,
    productData: {
      metadata,
      result : {
        products,
        refinables
      }
    }
  } = props

  let [ sortValue, changeSort ] = useState("Featured")
  let [ productData, changeProducts ] = useState(products)
  let [ filters, changeFilters ] = useState([])

  useEffect(() => {
    if(filters && filters.length) fetchData(filters)
  }, [filters])

  const sortOptions = [ {display:'Featured', value: 'featured'},
                        { display:'Newest', value:'newest'},
                        {display:'Best Sellers', value: 'bestsellers'} ]

  const renderProducts = () => {
    return products.map((x, y) => {
      return <Grid key={ y }>
                <img src={ x.productImage } />
             </Grid>
    })
  }

  const iconClicked = (e, data) => {
    let queryParam = data.url.split("?")[1]
    if(!filters.includes(queryParam)) changeFilters(filters => [...filters, queryParam])
  }

  const fetchData = async(data) => {
    let product = router.query.product
    router.push(`/query/${product}?${data.join("&")}`, undefined, { shallow: true })
  }

  return <Grid className={ classes.productPageGrid }>
        <Link href="/">
          <Typography variant="h5" align="center"> Back Home </Typography>
        </Link>
        <Typography variant="h1" className={ classes.header }> { metadata && metadata.header } </Typography>
        <Typography variant="h5" className={ classes.description }>{ metadata && metadata.subHeader } </Typography>
        <Grid>
          <Grid container alignItems="center" justify="space-between" style={{ margin:"20px 0" }}>
            <Grid item xs={ 2 }>Filter By</Grid>
            <Grid container item xs={ 10 } justify="center">
              <Select value="featured" onChange={ (val) => changeSort( sortValue = val) }>
                {
                  sortOptions.map(( x, y ) => {
                    return <MenuItem key={ y } value={ x.value }>{ x.display }</MenuItem>
                  })
                }
              </Select>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={ 2 }>
              {
                Object.values(refinables).map(( x, y ) => {
                  return <Grid style={{ border:".5px solid", margin:"0 0 10px", padding:"10px" }} key={ y }>
                            <Typography> { x[0]['refinable']['header'] } </Typography>
                            <Grid>
                              {
                                x.map(( a, b ) => {
                                  return <Grid container style={{ margin:"0 0 10px" }} alignItems="center" key={ b }>
                                            <Checkbox value={ a['refinable']['seoValue'] } onChange={(val, data) => iconClicked(val, a) }></Checkbox>
                                            <Typography>{ a['refinable']['value'] }</Typography>
                                         </Grid>
                                })
                              }
                            </Grid>
                         </Grid>
                })
              }
            </Grid>
            <Grid item xs={ 10 }>
              <Grid container justify="space-around">
                {
                  productData.map(( x, y ) => {
                    return <Link href={ `/product/${x.masterSku}` } key={ y } >
                              <Grid container justify="flex-start" alignItems="center" direction="column" item xs={ 4 } style={{ maxWidth:"31%" }} key={ y }>
                                <img src={ x.productImage } style={{ width:"100%" }}/>
                                <Typography>{ x.name }</Typography>
                              </Grid>
                            </Link>
                  })
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
     </Grid>
}

export async function getStaticPaths() {

  let paths = ["shirts", "pants", "ties", "clothing", "whats-new", "bow-ties"]

  paths = paths.map(x => {
    return {
      params: {
        product: x
      }
    }
  })

  return {
          paths,
          fallback: false
        }
}

export async function getStaticProps({ params }) {

  let productData = await getProducts(params.product)

  return {
    props: {
      productData,
      params
    }
  }
}
