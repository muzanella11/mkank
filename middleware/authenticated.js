import * as Storage from '~/utils/storage'

export const EXCEPT_PAGE = [
  'startup',
  'auth-signin',
  'auth-signup',
  'logout',
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

  console.info('srole : ', role)
  console.info('srole : ', token)

  if (!token && !role) {
    redirect('/startup')
  }
}
