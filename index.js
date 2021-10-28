function Spa() {
  const [balance, setBalance] = React.useState(0);
  const [users, setUsers] = React.useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
  ]);

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={[balance, setBalance, users, setUsers]}>
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
