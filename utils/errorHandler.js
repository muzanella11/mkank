export const run = messages => {
  const toast = window.$nuxt.$toast
  const errorMessages = messages

  if (Array.isArray(errorMessages)) {
    errorMessages.forEach(el => {
      toast.error(el)
    })
  } else {
    toast.error(messages)
  }
}
