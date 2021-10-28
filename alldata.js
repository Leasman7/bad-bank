function AllData() {
    const status = React.useState(status);
    const [balance, setBalance, users] = React.useContext(UserContext);

    function userDisplay(user) {
        return <div>
            <h2>Name: {user.name}</h2>
            
        </div>
    }
    return (
        users.map((user, i) => {
            return <Card
            bgcolor="secondary"
            header="All Data"
            status={status}
            body={userDisplay(user)}
            />
        })
        
    );
}
