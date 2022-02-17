function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [accountType, setAccountType] = React.useState("Checking");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      alert("Account must include " + label);
      return false;
    }
    return true;
  }

  function validateEmail(userInput) {
    if(userInput.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password); 
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (!validateEmail(password)) return;
    handleCreateUserDb({ name, email, password, balance: 0, accountType })
    setShow(false);
    alert("User must login after creating account to access badbank functions");
  }

  function handleCreateUserDb(user){
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify(user)
    };
    console.log(requestOptions)
    fetch('http://' + window.location.hostname + ':3000/account/create', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            Account Type
            <br />
            <select 
              type="select"
              id="account-type" 
              name="account-type"
              value={accountType}
              onChange={(e) => setAccountType(e.currentTarget.value)}
              >
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleCreate}
              disabled={name == "" && email == "" && password == ""}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
