import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
         <div className="container-fluid">
       <a className="navbar-brand" href="#">CODER-SHOP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">CATEGORIA 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CATEGORIA 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CATEGORIA 3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">CATEGORIA 4</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default NavBar;