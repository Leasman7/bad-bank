function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleWithdraw() {
    let newTotal = balance - withdraw;
    setBalance(newTotal);
    setShow(false);
  }

  function clearForm() {
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance: ${balance}
            <br />
            Withdraw Amount
            <input
              type="input"
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
