const Form = ({
  setLogin,
  setPassword,
  handleSubmit,
}: {
  setLogin: Function;
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="password"> password</label>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
