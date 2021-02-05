// Code your solution here

const findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  let query = new RegExp (`^${string}`, `i`)
  return drivers.filter( driver => driver.match(query))
}

const matchName = (drivers, string) => {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}