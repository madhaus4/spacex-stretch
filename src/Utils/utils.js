//need to check if any have the isFavorited === true, if so, return those over the false statement. 
export const cleanData = (data) => {
   const updatedData = data.map(element => {
    element.isFavorited = false
    return element
  })
  return updatedData
  // checkFavorited(updatedData)
}

export const checkFavorited = (data) => {
  // console.log(localStorage, ' : localstorage');
 const keys = Object.keys(localStorage)
//  console.log(data, ' :data in utils');
//  console.log(keys, ' :keys in utils');
  keys.map(key => { 
    data.filter(history => {
      console.log(history, ' :histroy<<<');
      return history.id == key ? history.isFavorited : !history.isFavorited
    })
  })
}

// export default cleanData, checkFavorited;