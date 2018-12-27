import Link from 'next/link'
import { Formik } from 'formik'

const Login = () => (
  <div>
    <h1>Login page</h1>
    <Link as="" href="/">
      <a>Home</a>
    </Link>
    <Link as="register" href="/register">
      <a>Register</a>
    </Link>
    <p>This is login form 111</p>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(values.email.length > 20) {
            errors.email = 'Maximum length is 20 characters';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          console.log('submit form')
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Your email"
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Your password"
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  </div>
)
  
export default Login