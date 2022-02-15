function Spa() {
  const [currentUser, setCurrentUser] = React.useState({
    name: null,
    email: null,
    password: null,
    balance: 0,
    isValid: false,
  });
  const [users, setUsers] = React.useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
  ]);

  return (
    <HashRouter>
      <UserContext.Provider
        value={[
          users,
          setUsers,
          currentUser,
          setCurrentUser,
        ]}
      >
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
        <Route path="/login/" component={Login} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
