import request from '@/utils/webfluxRequest'

export function fetchList(query) {
  return request({
    url: '/user/findByPage',
    method: 'get',
    params: {
      'pageNum': query.page,
      'limit': query.limit
    }
  })
}

export function createUser(req) {
  return request({
    url: '/user/create',
    method: 'put',
    data: req
  })
}

export function updatePassword(req) {
  return request({
    url: '/user/updatePassword',
    method: 'post',
    data: {
      'username': req.username,
      'password': req.password
    }
  })
}

export function updateDescription(req) {
  return request({
    url: '/user/updateDescription',
    method: 'post',
    data: {
      'username': req.username,
      'description': req.description
    }
  })
}
