function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState(0);

  function handleWithdraw() {
    if (!isValidWithdraw(withdraw)) {
      return;
    }
    let newTotal = balance - parseInt(withdraw);
    setBalance(newTotal);
    setShow(false);
    setWithdraw(0);
  }

  function isValidWithdraw(userInput) {
    if (isNaN(userInput)) {
      alert("Input is not a number");
      return false;
    }
    if (balance - userInput < 0) {
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
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance: ${balance}
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
              disabled={withdraw == ""}
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