import App from '../components/App/App'

export const getData = (version, category) => {
  return fetch(`https://api.spacexdata.com/${version}/${category}`)
    .then(res => res.ok ? res.json() : console.log(res))
    .then(data => data)
}
