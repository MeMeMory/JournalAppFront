import { FC } from 'react'

import Layout from '@/ui/layout/Layout'

const Home: FC = () => {
  // const { data: users, isLoading } = useQuery(
  //   ['users'],
  //   () => UserService.getUsers(),
  //   { select: ({ users }) => users }
  // )

  // if (isLoading) return <Loader />
  return (
    <Layout title='Home page'>
      {/* {users?.length ? (
        <div>
          {users.map(user => (
            // <div key={user.id}>{user.id}</div>
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div>Users not found</div>
      )} */}
      {/* <Calendar schema={'dark'} /> */}
    </Layout>
  )
}

export default Home
