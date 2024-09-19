
const App = ()=> {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        <br />
        <div className="content">
            <h1>Learn Basics of Coding in React js</h1><br />
            <div className="first">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse praesentium voluptates eligendi, modi ducimus ab reprehenderit vel porro, officia iusto libero natus. Itaque voluptatem ex hic ea fugit! Ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatem repellat maiores modi repudiandae fugiat corrupti ipsam voluptates veritatis quia eum illo architecto laudantium dignissimos quisquam possimus, aut distinctio velit?</p>
            </div><br />
            <div className="second">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur consequuntur eius, in officia nemo esse quam <a href="https://legacy.reactjs.org/docs/cdn-links.html">Learn more about react here</a> voluptates temporibus maxime.</p>
                
            </div><br />
            <div className="three">
                <p>Dive more into react by learning Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas nemo provident in ea repellendus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quos recusandae nostrum. Tempora dolor voluptatum unde voluptatem quis voluptas doloribus?</p>
            </div>
        </div>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <App />
);