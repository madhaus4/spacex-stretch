export const getData = (category) => {
  return fetch(`https://api.spacexdata.com/v4/${category}`)
    .then(res => res.json())
    .then(data => data)
}
