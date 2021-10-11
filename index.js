function Spa() {
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const MashRouter = ReactRouterDOM.MashRouter;

    return (
        <HashRouter>
            <div>
                <h1>Routing - Hellow World</h1>
                <Link to="/">Home</Link>
                <Link to="/about/">About</Link>
                <Link to="/products/">Products</Link>
                <hr/>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
            </div>
        </HashRouter>
    );
}