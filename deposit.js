function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [balance, setBalance] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext); 
  
    function handleDeposit() {
        
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
            Balance
            <br />
            Deposit Amount
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setBalance(e.currentTarget.value)}
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