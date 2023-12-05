import axios from 'axios'

import { IUser, IUserResponse } from '@/types/user.interface'

axios.defaults.baseURL = 'https://dummyjson.com/users'

export const UserService = {
  async getUsers() {
    const response = await axios.get<IUserResponse>('/', {
      params: {
        limit: 5
      }
    })
    return response.data
  },
  async getUserById(id: string) {
    const response = await axios.get<IUser>(`/${id}`)
    return response.data
  }
}
