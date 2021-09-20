export const cleanData = (data) => {
   const updatedData = data.map(element => {
    element.isFavorited = false
    return element
  })
  return checkFavorited(updatedData)
}

export const checkFavorited = (data) => {
 const keys = Object.keys(localStorage)
  return data.reduce((arr, item) => {
    if (keys.includes(item.id)) {
      item.isFavorited = true;
    }
    arr.push(item)
    return arr;
  }, [])
    
  }