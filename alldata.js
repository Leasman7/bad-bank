function AllData() {
  const status = React.useState(status);
  const [balance, setBalance, users] = React.useContext(UserContext);

  function userDisplay(user) {
    return (
      <div>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Balance: {user.balance}</p>
      </div>
    );
  }
  return users.map((user, i) => {
    return (
      <Card
        bgcolor="secondary"
        header={user.name}
        status={status}
        body={userDisplay(user)}
      />
    );
  });
}
