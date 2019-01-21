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
                    <h3 className="menu-title">UI elements</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i className="menu-icon fa fa-laptop"></i>Components</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-puzzle-piece"></i><a href="#/html-component/buttons">Buttons</a></li>
                            <li><i className="fa fa-id-badge"></i><a href="#/html-component/badges">Badges</a></li>
                            <li><i className="fa fa-bars"></i><a href="#/html-component/tabs">Tabs</a></li>
                            <li><i className="fa fa-share-square-o"></i><a href="#/html-component/social-button">Social Buttons</a></li>
                            <li><i className="fa fa-id-card-o"></i><a href="#/html-component/cards">Cards</a></li>
                            <li><i className="fa fa-exclamation-triangle"></i><a href="#/html-component/alerts">Alerts</a></li>
                            <li><i className="fa fa-spinner"></i><a href="#/html-component/progress-bars">Progress Bars</a></li>
                            <li><i className="fa fa-fire"></i><a href="#">Modals</a></li>
                            <li><i className="fa fa-book"></i><a href="#/html-component/switches">Switches</a></li>
                            <li><i className="fa fa-th"></i><a href="#/html-component/grids">Grids</a></li>
                            <li><i className="fa fa-file-word-o"></i><a href="#/html-component/typoGraphy">Typography</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="fa fa-table"></i><a href="#">Basic Table</a></li>
                            <li><i className="fa fa-table"></i><a href="#">Data Table</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children active dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-th"></i><a href="#">Basic Form</a></li>
                            <li><i className="menu-icon fa fa-th"></i><a href="#">Advanced Form</a></li>
                        </ul>
                    </li>
                    <h3 className="menu-title">Icons</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-fort-awesome"></i><a href="#">Font Awesome</a></li>
                            <li><i className="menu-icon ti-themify-logo"></i><a href="#">Themefy Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"> <i className="menu-icon ti-email"></i>Widgets </a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-line-chart"></i><a href="#">Chart JS</a></li>
                            <li><i className="menu-icon fa fa-area-chart"></i><a href="#">Flot Chart</a></li>
                            <li><i className="menu-icon fa fa-pie-chart"></i><a href="#">Peity Chart</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-map-o"></i><a href="#">Google Maps</a></li>
                            <li><i className="menu-icon fa fa-street-view"></i><a href="#">Vector Maps</a></li>
                        </ul>
                    </li>
                    <h3 className="menu-title">Extras</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="#">Login</a></li>
                            <li><i className="menu-icon fa fa-sign-in"></i><a href="#">Register</a></li>
                            <li><i className="menu-icon fa fa-paper-plane"></i><a href="#">Forget Pass</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
}

export default SideBar;