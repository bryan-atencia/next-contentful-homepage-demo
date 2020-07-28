export async function getHome() {

  let fetchHome = await fetch("https://cdn.contentful.com/spaces/8x9h02x0glox/environments/master/entries/J5koEV03Su6H84xFZ0q3v?access_token=FA0YXUdosKtX2pFUzZ0RjDdOjq-Vqk3rhsQZH1pNZNA")
  let homeData = await fetchHome.json()
  let data = homeData

  return data.fields.home
}

export async function getProducts(plp){

  let token = await fetch("https://web-dev.thetiebar.com/api/token", {
    headers: {
      "x-client-id": "7c1f4a77f8f7443bb0d0af8fca9f27f8",
      "Cookie":"moov_bucket=79; .ASPXANONYMOUS=kgDGsKVYEQQM6ymrXI8HRZdnKM4yxvf1Ot2QduvA_Vc6_ddKa64eYgXH50EbBxOLtuReFsCmIBfeezONm6Pp4WCZx9e7yB1qWa5d6IknLxUEP0xA9H3xWE_OMx0RimQNVXfOZA2; moov_=3b370d15-6234-4ebe-bfcd-05ab980e4040"
    }
  })

  let fetcher = await fetch(`https://web-dev.thetiebar.com/api/products/${plp}`, {
    headers: {
      "x-client-id": "7c1f4a77f8f7443bb0d0af8fca9f27f8",
      "x-Access-Token": await token.json(),
      "Cookie": "moov_bucket=79; .ASPXANONYMOUS=kgDGsKVYEQQM6ymrXI8HRZdnKM4yxvf1Ot2QduvA_Vc6_ddKa64eYgXH50EbBxOLtuReFsCmIBfeezONm6Pp4WCZx9e7yB1qWa5d6IknLxUEP0xA9H3xWE_OMx0RimQNVXfOZA2; moov_=3b370d15-6234-4ebe-bfcd-05ab980e4040"
      }
    })

  return await fetcher.json()
}

export async function getProduct(sku){

  let token = await fetch("https://web-dev.thetiebar.com/api/token", {
    headers: {
      "x-client-id": "7c1f4a77f8f7443bb0d0af8fca9f27f8",
      "Cookie":"moov_bucket=79; .ASPXANONYMOUS=kgDGsKVYEQQM6ymrXI8HRZdnKM4yxvf1Ot2QduvA_Vc6_ddKa64eYgXH50EbBxOLtuReFsCmIBfeezONm6Pp4WCZx9e7yB1qWa5d6IknLxUEP0xA9H3xWE_OMx0RimQNVXfOZA2; moov_=3b370d15-6234-4ebe-bfcd-05ab980e4040"
    }
  })

  let fetcher = await fetch(`https://web-dev.thetiebar.com/api/product/${sku}`, {
    headers: {
      "x-client-id": "7c1f4a77f8f7443bb0d0af8fca9f27f8",
      "x-Access-Token": await token.json(),
      "Cookie": "moov_bucket=79; .ASPXANONYMOUS=kgDGsKVYEQQM6ymrXI8HRZdnKM4yxvf1Ot2QduvA_Vc6_ddKa64eYgXH50EbBxOLtuReFsCmIBfeezONm6Pp4WCZx9e7yB1qWa5d6IknLxUEP0xA9H3xWE_OMx0RimQNVXfOZA2; moov_=3b370d15-6234-4ebe-bfcd-05ab980e4040"
      }
    })

  return await fetcher.json()
}
