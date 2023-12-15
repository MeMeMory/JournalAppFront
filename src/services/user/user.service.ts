import axios from 'axios'

import { UserData, UserProfileData } from './user.types'
import { user_url } from '@/constants/constants'
import { IUser } from '@/types/user.interface'

export const UserService = {
  async getProfile() {
    return axios<IUser>({
      url: `${user_url}/profile`,
      method: 'GET'
    })
  },

  async updateProfile(data: UserProfileData) {
    return axios<IUser>({
      url: `${user_url}/profile`,
      method: 'PUT',
      data
    })
  },

  async getAll() {
    return axios<IUser>({
      url: user_url,
      method: 'GET'
    })
  },

  async getUser(id: number) {
    return axios<IUser>({
      url: `${user_url}/${id}`,
      method: 'GET'
    })
  },

  async updateUserProfile(id: number, data: UserData) {
    return axios<IUser>({
      url: `${user_url}/${id}`,
      method: 'PUT',
      data
    })
  }
}
