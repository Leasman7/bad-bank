function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [currentUser, setCurrentUser] = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState(0);

  function setWithdrawInDb(name, email, password, balance) {
    const requestOptions = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json' },
      body: JSON.stringify({name, email, password, balance})
  };
  console.log(requestOptions)
  fetch('http://localhost:3000/account/update', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data) //this.setState({ name: data.name })
      );
  }

  function handleWithdraw() {
    if (!currentUser.isValid || !isValidWithdraw(withdraw)) {
      return;
    }
    let newTotal = currentUser.balance - parseInt(withdraw);
    setCurrentUser({"name": currentUser.name, "email": currentUser.email, "password": currentUser.password, "balance": newTotal, "isValid": true})
    setWithdrawInDb(currentUser.name, currentUser.email, currentUser.password, newTotal);
    setShow(false);
    setWithdraw(0);
  }

  function isValidWithdraw(userInput) {
    if (isNaN(userInput)) {
      alert("Input is not a number");
      return false;
    }
    if (userInput <= 0) {
      alert("Input cannot be a negative number");
      return false;
    }
    if (currentUser.balance - userInput < 0) {
      alert("Cannot overdraw balance");
      return false;
    }
    return true;
  }

  function clearForm() {
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance: ${currentUser.balance}
            <br />
            Withdraw Amount
            <input
              className="form-control"
              id="withdraw"
              placeholder="ex. 10"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleWithdraw}
              disabled={withdraw == "" || !currentUser.isValid}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Make another withdrawal
            </button>
          </>
        )
      }
    />
  );
}
