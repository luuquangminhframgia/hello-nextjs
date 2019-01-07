import Link from 'next/link'
import { hydrate, css } from 'react-emotion'
import { Layout } from '../components/Layout'

const Index = () => (
  <Layout>
    <h1>Home - Hello Next.js</h1>
    <Link as="login" href="/login">
      <a>Login</a>
    </Link>
    <Link as="register" href="/register">
      <a>Register</a>
    </Link>
  </Layout>
)

export default Index