const cleanData = (data) => {
  return data.map(element => {
    element.isFavorited = false
    return element
  })
}

export default cleanData;