/* 用户相关请求模块 */
import request from '@/utils/request'
// import store from '@/store'

/* 用户登录 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

/* 获取短信验证码 */
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}

/* 获取用户自己的信息 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  //   // 发送请求头数据
  //   headers: {
  //     // 该接口需要授权才能访问
  //     Authorization: `Bearer ${store.state.user.token}`
  //   }
  })
}

/* 获取用户频道列表 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/* 关注用户 */
export const addFollow = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target
    }
  })
}

/* 取消关注用户 */
export const deleteFollow = target => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${target}`
  })
}

/* 获取指定用户信息 */
export const getUserById = userId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user/${userId}`
  })
}

/* 获取当前登录用户个人资料 */
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
  })
}

/* 更新用户个人资料 */
export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/profile',
    data
  })
}

/* 更新用户照片资料 */
export const updateUserPhoto = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    data
  })
}
