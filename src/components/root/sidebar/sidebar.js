import React from 'react';
import logoImg from '../../../images/logo.png';
import logo2 from '../../../images/logo2.png';

const SideBar = (props) => {
    return <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#"><img src={logoImg} alt="Logo" /></a>
                <a className="navbar-brand hidden" href=".#"><img src={logo2} alt="Logo" /></a>
            </div>
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </a>
                    </li>
                    {/* <h3 className="menu-title">Users</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i className="menu-icon fa fa-laptop"></i>Actions</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-users"></i><a href="#/user">Users</a></li>
                        </ul>
                    </li> */}
                   
                    
                   
                    
                </ul>
            </div>
        </nav>
    </aside>
}

export default SideBar;