const getData = (category) => {
  fetch(`https://api.spacexdata.com/v4/${category}`)
    .then(res => res.json())
    .then(data => data)
}


export default getData;