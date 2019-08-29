import * as Storage from '~/utils/storage'

export const EXCEPT_PAGE = [
  'startup',
  'auth-signin',
  'auth-signup',
  'logout'
]

export default function ({ route, redirect }) {
  const role = Storage.getStorage('role')

  if (EXCEPT_PAGE.indexOf(route.name) !== -1) {
    return
  }

  if (!role) {
    redirect('/startup')
  }
}
