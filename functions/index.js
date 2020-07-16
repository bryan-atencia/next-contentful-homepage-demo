export async function getHome() {
  let fetchHome = await fetch("https://cdn.contentful.com/spaces/8x9h02x0glox/environments/master/entries/J5koEV03Su6H84xFZ0q3v?access_token=FA0YXUdosKtX2pFUzZ0RjDdOjq-Vqk3rhsQZH1pNZNA")
  let homeData = await fetchHome.json()
  let data = homeData

  return data.fields.home
}
