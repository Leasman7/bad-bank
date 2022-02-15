function Login() {
    const [show, setShow] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [currentUser, setCurrentUser] = React.useContext(UserContext);
    
    function handleSetCurrentUser(user) {
        if(user == null) {
            setCurrentUser(null);
            return;
        }
        setCurrentUser(user);
    }

    function validateLogin() {
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
            body: JSON.stringify({email, password})
        };
        console.log(requestOptions)
        fetch('http://localhost:3000/account/get', requestOptions)
            .then(response => response.json())
            .then(data => handleSetCurrentUser(data));
    }
    
    function handleLogin() {
        validateLogin();
        console.log(currentUser);
    }

    function clearForm() {
        setEmail("");
        setPassword("");
        setShow(true);
      }

    return (
        <Card
          bgcolor="info"
          header="Login to Account"
          status={status}
          body={
            show ? (
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
                <h5>You successfully logged in</h5>
                <button type="submit" className="btn btn-dark" onClick={clearForm}>
                  Sign Out
                </button>
              </>
            )
          }
        />
    );
}