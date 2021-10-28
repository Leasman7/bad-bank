function NavBar() {
  function isActive(input) {
    console.log(input);
    if(ReactRouterDOM.useLocation().pathname.includes(input)){
      return true;
    }
    return false;
  }  
  return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item" title="description to use">
          <a className={"nav-link" + (isActive ("home") ? " active" : "")} aria-current="page" href="#/home">Home</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link" + (isActive ("createaccount") ? " active" : "")} href="#/createaccount" onSelect={isActive}>Create Account</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link" + (isActive ("deposit") ? " active" : "")} href="#/deposit">Deposit</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link" + (isActive ("withdraw") ? " active" : "")} href="#/withdraw">Withdraw</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link" + (isActive ("alldata") ? " active" : "")} href="#/alldata">All Data</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}
