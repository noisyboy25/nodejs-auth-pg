const Form = ({
  login,
  setLogin,
  password,
  setPassword,
  handleSubmit,
}: {
  login: string;
  setLogin: Function;
  password: string;
  setPassword: Function;
  handleSubmit: Function;
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div>
        <input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <label htmlFor="login"> login</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="password"> password</label>
        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
