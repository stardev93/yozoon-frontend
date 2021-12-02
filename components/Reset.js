import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  const successError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken.code
    : undefined;
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.error);
    console.log(res);
    resetForm();
  }

  return (
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Reset your password</h2>
      <ErrorMessage error={error || successError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success ! You Can Now Sign In</p>
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
        <label htmlFor='password'>
          Psassword
          <input
            type='password'
            name='password'
            placeholder='password'
            autoComplete='password'
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type='submit'>Reset Password</button>
      </fieldset>
    </Form>
  );
}
