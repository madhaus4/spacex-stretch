export const getData = (version, category) => {
  return fetch(`https://api.spacexdata.com/${version}/${category}`)
    .then(res => res.json())
    .then(data => data)
}
