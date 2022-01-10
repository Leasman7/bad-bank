var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">Create Account<a/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadDeposit()" id="deposit">Deposit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadWithdraw()" id="withdraw">Withdraw</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadBalance()" id="balance">Balance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadAllData()" id="alldata">AllData</a>
        </li>
      </ul>
  </div>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;
