function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [balance, setBalance] = React.useState(0);
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext); 
  
    function handleDeposit() {
        let newTotal = balance + deposit;
        setBalance(newTotal);
        setShow(false);
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
            Balance: ${balance}
            <br />
            Deposit Amount
            <input
              type="number"
              min="1"
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