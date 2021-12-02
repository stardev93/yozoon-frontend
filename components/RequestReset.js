import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, error, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.error);
    console.log(res);
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Request reset password</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success ! Check your email for a link !</p>
        )}
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

        <button type='submit'>Request Reset</button>
      </fieldset>
    </Form>
  );
}
