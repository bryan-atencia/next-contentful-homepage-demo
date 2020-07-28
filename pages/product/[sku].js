import React from "react"
import Link from 'next/link'

import { getProduct } from "../../functions"

import { Grid, Typography, Select, MenuItem, Checkbox, makeStyles } from "@material-ui/core"

export default (props) => {
  const {
    productData: {
      result: {
          product
      }
    }
  } = props

  console.log(product)

  return <Grid>
          <Link href={`/${product.details.category}`}>
            <Typography>Back to Category</Typography>
          </Link>
          <Grid container justify="center" alignItems="center" direction="column">
            <img src={ `${product.details['productImage']}` } style={{ width:"50%" }} />
            <Typography>{ product.details.title }</Typography>
            <Typography>{ product.details.price }</Typography>
          </Grid>
         </Grid>
}

export async function getServerSideProps( context ) {

  try {
    await getProduct(context.query.sku)
  } catch(error) {
    context.res.writeHead(301, { Location:"/" })
    context.res.end()
  }

  let productData = await getProduct(context.query.sku)
  return {
    props: {
      productData
    }
  }
}
