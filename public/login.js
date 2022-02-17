function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentUser, setCurrentUser] = React.useContext(UserContext);

  function handleSetCurrentUser(user) {
    if (user == null) {
      setCurrentUser({
        name: null,
        email: null,
        password: null,
        balance: 0,
        isValid: false,
      });
      return;
    }
    user.isValid = true;
    setCurrentUser(user);
  }

  function validateLogin() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    console.log(requestOptions);
    fetch('http://' + window.location.hostname + ':3000/account/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }

  function handleLogin() {
    validateLogin();
    console.log(currentUser);
    setEmail("");
    setPassword("");
  }

  function handleSignOut() {
    setCurrentUser({
      name: null,
      email: null,
      password: null,
      balance: 0,
      isValid: false,
    });
  }

  return (
    <Card
      bgcolor="info"
      header="Login to Account"
      status={status}
      body={
        !currentUser.isValid ? (
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleLogin}
              disabled={email == "" && password == ""}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>You have successfully logged in</h5>
            <button type="submit" className="btn btn-dark" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        )
      }
    />
  );
}
