import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home - Hello Next.js</h1>
    <Link as="login" href="/login">
      <a>Login</a>
    </Link>
    <Link as="register" href="/register">
      <a>Register</a>
    </Link>
  </div>
)
  
export default Index