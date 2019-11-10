export default () => ({
  layoutSettings: {
    titleApps: null,
    drawer: null,
    toolbar: true,
    breadcrumbVisibility: true,
    breadcrumbs: []
  },
  isOnline: true,
  isLoading: {
    example: false
  },
  isTimeout: {
    example: false
  },
  messagesConnection: {
    offline: 'Anda berada pada mode offline',
    online: 'Anda telah terhubung kembali'
  },
  snackbarOptions: {
    text: 'Hello :)',
    color: 'pink',
    buttonColor: 'white',
    isShown: false
  }
})
