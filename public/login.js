function Login() {

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
                <h5>You successfully logged in as ${email}</h5>
                <button type="submit" className="btn btn-dark" onClick={clearForm}>
                  Sign Out
                </button>
              </>
            )
          }
        />
    );
}