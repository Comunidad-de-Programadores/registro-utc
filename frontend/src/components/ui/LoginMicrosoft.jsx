export const LoginMicrosoft = ({ handleLogin }) => {
  return (
    <button
      className='button w-100 button--microsoft text-white shadow-lg'
      onClick={() => {
        handleLogin();
      }}>
      Login With Microsoft 365
    </button>
  );
};
