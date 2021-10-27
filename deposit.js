function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [balance, setBalance] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);
    const ctx = React.useContext(UserContext); 
  
    function handleDeposit() {
      if(!isValidDeposit(deposit)) { 
        return;
      }
      let newTotal = balance + parseInt(deposit);
      setBalance(newTotal);
      setShow(false);
      setDeposit(0);
    }

    function isValidDeposit(userInput) {
      if(isNaN(userInput)) {
        alert('Input is not a number');
        return false;
      }
      if(userInput <= 0) {
        alert('Input is not a valid deposit');
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
            Balance: ${balance}
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
              disabled = {deposit == ''}
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