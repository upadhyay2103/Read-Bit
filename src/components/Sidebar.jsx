function Sidebar({tab,handleClick}) {

    return <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side" style={{width: '180px'}}>
            <br />
            <br />
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={`nav-link text-white ${tab==="Home"?'active':''}`} aria-current="page" onClick={handleClick}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className={`nav-link text-white ${tab!=="Home"?'active':''}`} onClick={handleClick}>
                        Create Post
                    </a>
                </li>
            </ul>
            <hr></hr>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default Sidebar;