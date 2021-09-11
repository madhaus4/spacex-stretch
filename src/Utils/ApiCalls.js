const getData = () => {
  fetch('https://api.spacexdata.com/v4/rockets')
    .then(res => res.json())
    .then(data => console.log(data))
}


export default getData;