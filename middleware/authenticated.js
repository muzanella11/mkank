import * as Storage from '~/utils/storage'

export const EXCEPT_PAGE = [
  'startup',
  'auth-signin',
  'auth-signup',
  'pagesNotFound'
]

export default function ({ route, redirect }) {
  const role = Storage.getStorage('role') || false
  const token = Storage.getStorage('MKANK_TOKEN') || false

  if (EXCEPT_PAGE.indexOf(route.name) !== -1) {
    if (token) {
      redirect('/')
    }

    return
  }

  if (!token && !role) {
    redirect('/startup')
  }
}
