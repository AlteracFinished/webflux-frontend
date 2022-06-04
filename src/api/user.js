import request from '@/utils/webfluxRequest'

export function login(data) {
  return request({
    url: '/signIn',
    method: 'POST',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/getCurrentUser',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/signOut',
    method: 'post'
  })
}
