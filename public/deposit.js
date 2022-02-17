function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [currentUser, setCurrentUser] = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState(0);

  function setBalanceInDb(name, email, password, balance, accountType) {
    const requestOptions = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json' },
      body: JSON.stringify({name, email, password, balance, accountType})
  };
  console.log(requestOptions)
  fetch('http://' + window.location.hostname + ':3000/account/update', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }

  function handleDeposit() {
    if (!currentUser.isValid || !isValidDeposit(deposit)) {
      return;
    }
    let newTotal = currentUser.balance + parseInt(deposit);
    setCurrentUser({"name": currentUser.name, "email": currentUser.email, "password": currentUser.password, "balance": newTotal, "accountType": currentUser.accountType, "isValid": true})
    setBalanceInDb(currentUser.name, currentUser.email, currentUser.password, newTotal, currentUser.accountType);
    setShow(false);
    setDeposit(0);
  }

  function isValidDeposit(userInput) {
    if (isNaN(userInput)) {
      alert("Input must be a number");
      return false;
    }
    if (userInput <= 0) {
      alert("Deposit cannot be a negative number");
      return false;
    }
    return true;
  }

  function clearForm() {
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            Balance: ${currentUser.balance}
            <br />
            Deposit Amount
            <input
              className="form-control"
              id="deposit"
              placeholder="ex. 10"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleDeposit}
              disabled={deposit == "" || !currentUser.isValid}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Make another deposit
            </button>
          </>
        )
      }
    />
  );
}
