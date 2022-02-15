function NavBar() {
  const [currentUser, setCurrentUser] = React.useContext(UserContext);

    function isActive(input) {
      console.log(input);
      if (ReactRouterDOM.useLocation().pathname.includes(input)) {
        return true;
      }
      return false;
    }
    function handleSignOut() {
      setCurrentUser({
        name: null,
        email: null,
        password: null,
        balance: 0,
        isValid: false,
      })
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="left-container">
                <a className="nav-left" className="navbar-brand" href="#">
                  BadBank
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="nav-left" className="navbar-nav">
                    <li className="nav-item" title="BadBank Home Page">
                      <a
                        className={"nav-link" + (isActive("home") ? " active" : "")}
                        aria-current="page"
                        href="#/home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" title="Create a new account">
                      <a
                        className={
                          "nav-link" + (isActive("createaccount") ? " active" : "")
                        }
                        href="#/createaccount"
                        onSelect={isActive}
                      >
                        Create Account
                      </a>
                    </li>
                    <li className="nav-item" title="Add to your balance">
                      <a
                        className={
                          "nav-link" + (isActive("deposit") ? " active" : "")
                        }
                        href="#/deposit"
                      >
                        Deposit
                      </a>
                    </li>
                    <li className="nav-item" title="Subtract from your balance">
                      <a
                        className={
                          "nav-link" + (isActive("withdraw") ? " active" : "")
                        }
                        href="#/withdraw"
                      >
                        Withdraw
                      </a>
                    </li>
                    <li className="nav-item" title="View all user data">
                      <a
                        className={
                          "nav-link" + (isActive("alldata") ? " active" : "")
                        }
                        href="#/alldata"
                      >
                        All Data
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="right-container">
            <ul className="nav-right" className="navbar-nav">
             {currentUser.isValid ? 
             <>
             <li className="nav-item" title={currentUser.name}>Logged in as: {currentUser.name}</li>
             <li className="nav-item" title="Sign out" onClick={handleSignOut}>Sign Out</li>
             </>
             : 
                    <li className="nav-item" title="Login">
                    <a
                        className={"nav-link" + (isActive("login") ? " active" : "")}
                        aria-current="page"
                        href="#/login"
                      >
                        Login
                      </a>
                    </li>}
                  </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }