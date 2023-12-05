import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Layout from '@/ui/layout/Layout'
import Loader from '@/ui/loader/Loader'

import UserItem from '../user/UserItem'

import { UserService } from '@/services/user.service'

const Home: FC = () => {
  const { data: users, isLoading } = useQuery(
    ['users'],
    () => UserService.getUsers(),
    { select: ({ users }) => users }
  )

  if (isLoading) return <Loader />
  return (
    <Layout title='Home page'>
      {users?.length ? (
        <div>
          {users.map(user => (
            // <div key={user.id}>{user.id}</div>
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div>Users not found</div>
      )}
      {/* <Calendar schema={'dark'} /> */}
    </Layout>
  )
}

export default Home
