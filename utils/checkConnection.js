export const setStatusConnection = () => {
  window.$nuxt.$store.state.isOnline = navigator.onLine
}

export const checkConnection = () => {
  window.removeEventListener('offline', () => {})

  window.removeEventListener('online', () => {})

  window.addEventListener('offline', () => {
    setStatusConnection()
    window.$nuxt.$toast.error('Anda berada pada mode offline')
  })

  window.addEventListener('online', () => {
    setStatusConnection()
    window.$nuxt.$toast.success('Anda telah terhubung kembali')
  })

  window.onload = () => {
    setStatusConnection()
  }
}
