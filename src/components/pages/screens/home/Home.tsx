import { FC } from 'react'

import Layout from '@/ui/layout/Layout'

import { useActions } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

const Home: FC = () => {
  const { user } = useAuth()
  const { logout } = useActions()

  return <Layout></Layout>
}

export default Home
