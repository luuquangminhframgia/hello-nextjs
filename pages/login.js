import Link from 'next/link'
import { Formik } from 'formik'
import { hydrate, css } from 'react-emotion';
import { Layout } from '../components/Layout'

const inputContainerStyle = css`
  margin-bottom: 10px;
`;

const inputStyle = css`
  border: 1px solid #eee;
  line-height: 20px;
  padding: 5px 10px;
  background: #F2F2F2;
`;

const errorStyle = css`
  color: red;
`;

const buttonStyle = css`
  border: none;
  line-height: 20px;
  padding: 5px 15px;
  background: blue;
  color: #00B242;
  text-transform: uppercase;
  cursor: pointer;
`;

const Login = () => (
  <Layout>
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
          <div css={inputContainerStyle}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Your email"
              css={inputStyle}
            />
            <div css={errorStyle}>{errors.email && touched.email && errors.email}</div>
          </div>
          <div css={inputContainerStyle}>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Your password"
              css={inputStyle}
            />
            <div css={errorStyle}>{errors.password && touched.password && errors.password}</div>
          </div>
          <button type="submit" disabled={isSubmitting} css={buttonStyle}>
            Login
          </button>
        </form>
      )}
    </Formik>
  </Layout>
)
  
export default Login