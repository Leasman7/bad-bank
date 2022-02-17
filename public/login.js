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
        accountType: null,
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
      body: JSON.stringify({ "email": email, "password": password }),
    };
    console.log(requestOptions);
    fetch('http://' + window.location.hostname +'/account/get', requestOptions)
        .then(response => response.json())
        .then(data => handleSetCurrentUser(data));
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
      accountType: null,
      isValid: false,
    });
  }

  function handleUserKeyPress(e) {
    if(e.key == "Enter") {
      handleLogin();
    }
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
              onKeyPress={handleUserKeyPress}
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
              onKeyPress={handleUserKeyPress}
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
