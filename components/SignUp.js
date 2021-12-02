import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';
import ErrorMessage from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      name
      email
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.error);
    console.log(res);
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Sign Up for new Account</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} -- please go head and sign in
            !
          </p>
        )}
        <label htmlFor='name'>
          Name
          <input
            type='name'
            name='name'
            placeholder='name'
            autoComplete='name'
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            placeholder='email'
            autoComplete='email'
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            placeholder='password'
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Sign Up</button>
      </fieldset>
    </Form>
  );
}
