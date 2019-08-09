import Store from 'store'

export const getStorage = key => Store.get(key)

export const setStorage = (key, value) => {
  Store.set(key, value)
}

export const removeItemStorage = key => {
  Store.remove(key)
}

export const clearStorage = () => {
  Store.clearAll()
}
