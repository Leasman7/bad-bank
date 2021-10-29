function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank"
      title="Welcome to the bank"
      text="Where we serve all you non-secure banking needs"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
