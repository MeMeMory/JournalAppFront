// export interface IUser {
//   id: string
//   name: string
// }

export interface IUser {
  id: number
  email: string
  name: string
  surName: string
  groupId: number
  isAdmin: 'USER' | 'ADMIN'
}

export interface IUserResponse {
  users: IUser[]
}
