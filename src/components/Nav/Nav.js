import './navstyles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/" className="navbar-brand"><h1>λ</h1></Link>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Jesse De Jong</Link>
                    </li>
                </ul>
            <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/showcase" className="nav-link active" aria-current="page">Showcase</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pastwork" className="nav-link active" aria-current="page">Past Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutme" className="nav-link active" aria-current="page">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactme" className="nav-link active" aria-current="page">Contact Me</Link>
                    </li>
                </ul>
            </div>
            </div>

            </div>
        </nav>

    );
};

export default Nav;