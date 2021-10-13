function CreateAccount() {
    const ctx = React.useContext(UserContext);
    return (
        <h1>CreateAccount<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}