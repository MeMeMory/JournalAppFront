import { instance } from '@/api/api.interceptor'

import { UserData, UserProfileData } from './user.types'
import { user_url } from '@/constants/constants'
import { IUser } from '@/types/user.interface'

export const UserService = {
  async getProfile() {
    return instance<IUser>({
      url: `${user_url}/profile`,
      method: 'GET'
    })
  },

  async updateProfile(data: UserProfileData) {
    return instance<IUser>({
      url: `${user_url}/profile`,
      method: 'PUT',
      data
    })
  },

  async getAll() {
    return instance<IUser>({
      url: user_url,
      method: 'GET'
    })
  },

  async getUser(id: number) {
    return instance<IUser>({
      url: `${user_url}/${id}`,
      method: 'GET'
    })
  },

  async updateUserProfile(id: number, data: UserData) {
    return instance<IUser>({
      url: `${user_url}/${id}`,
      method: 'PUT',
      data
    })
  }
}
