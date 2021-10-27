function AllData() {
    const status = React.useState(status);
    const ctx = React.useContext(UserContext);

    return (
        <Card
            bgcolor="secondary"
            header="All Data"
            status={status}
            body={JSON.stringify(ctx)}
        />
    );
}
