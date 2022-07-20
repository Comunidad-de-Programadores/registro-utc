export const LoginMicrosoft = ({ handleLogin }) => {
  return (
    <button
      className='button w-100 button--microsoft text-white shadow-lg'
      onClick={() => {
        handleLogin();
      }}
      type='button'>
      Login With Microsoft 365
    </button>
  );
};
