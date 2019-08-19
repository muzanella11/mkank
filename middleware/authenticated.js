import { formulaCombination } from '~/utils/security'
import * as Storage from '~/utils/storage'

export const EXCEPT_PAGE = [
  'startup',
  'auth-signin',
  'auth-signup',
  'dashboard',
  'index'
]

export default function ({ route, store, redirect }) {
  const userData = Storage.getStorage('userData')
  const dataStorage = userData ? JSON.parse(formulaCombination(userData, 'decode')) : false

  if (EXCEPT_PAGE.indexOf(route.name) !== -1) {
    return
  }

  if (!dataStorage.token) {
    redirect('/startup')
  } else {
    redirect('/')
  }
}
