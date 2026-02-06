export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => {
  return array.find((item) => item.id === id)
}

export const findIndex = (id, array) => {
  return array.findIndex((item) => item.id === id)
}

export const removeObjectbyId = (id, array) => {
  return array.filter((item) => item.id !== id)
}
