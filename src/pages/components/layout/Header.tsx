import Image from "next/image";

export const Header = () => {
    return(
        <>
            <header>
            <nav className="navbar navbar-expand-lg fw-bold ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <Image
                                src="/logo1.jpeg"
                                width="64" height="64"
                                    alt="CMSS Logo"
                                loading="lazy"
                            />
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto ">
                            <li className="nav-item mx-3" >
                                <a className="nav-link navLink" href="#">ACCUEIL</a>
                            </li>
                            <li class="nav-item dropdown mx-3">
                                <a
                                    className="nav-link dropdown-toggle navLink"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    C M S S
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="navLink">
                                        <a className="dropdown-item" href="#">Historique & Mission</a>
                                    </li>
                                    <li className="navLink">
                                        <a className="dropdown-item" href="#">Textes & lois</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="navLink">
                                        <a className="dropdown-item" href="#">Staff - direction</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown navLink mx-3">
                                <a
                                    className="nav-link dropdown-toggle navLink"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Organisation
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">C.A.</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Direction Générale</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Directions Régionaux</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Centre de paiement</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle navLink mx-3"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Direction
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Nationale</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Koulikoro</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Directions Régionaux</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Centre de paiement</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item-">
                                <a className="nav-link navLink mx-3" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">



                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
        </>

    );
}