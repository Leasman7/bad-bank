function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleWithdraw() {
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
            Balance
            <br />
            Withdraw Amount
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setBalance(e.currentTarget.value)}
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
