import Link from 'next/link'

const Register = () => (
  <div>
    <h1>Register page</h1>
    <Link as="" href="/">
      <a>Home</a>
    </Link>
    <Link as="login" href="/login">
      <a>Login</a>
    </Link>
  </div>
)
  
export default Register