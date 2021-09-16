//need to check if any have the isFavorited === true, if so, return those over the false statement. 
export const cleanData = (data) => {
  const updatedData = data.map(element => {
    element.isFavorited = false
    return element
  })
  checkFavorited(data)
  return updatedData
}

export const checkFavorited = (data) => {
  console.log(localStorage, ' : localstorage');
 const keys = Object.keys(localStorage)
 console.log(data, ' :data in utils');
 console.log(keys, ' :keys in utils');
  keys.map(key => { 
    // console.log(key);
    data.filter(history => {
      return history.id == localStorage[key] ? history.isFavorited = true : history.isFavorited = false
    })
  })
}

// export default cleanData, checkFavorited;