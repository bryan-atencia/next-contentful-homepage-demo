var butter = require('buttercms')("8d6d186981c0902966f48b2f7db8a6aaa5205822");

export async function getHome() {
  let fetchHome = await butter.page.retrieve('*', 'home')
  let homeData = await fetchHome
  let data = homeData.data.data.fields

  return data
}
