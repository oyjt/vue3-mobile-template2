import myAxios from '../utils/request'

export function getChannels () {
  return myAxios({
    url: '/v1_0/user/channels',
    method: 'GET'
  })
}

// goods.js
export function getListAPI (paramsList) {
  return myAxios({
    url: '/api/list',
    method: 'get',
    params: paramsList
  }, {
    loading: true
  }, {
    message: '加载中...',
    forbidClick: true
  })
}
