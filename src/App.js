import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

function closeDrawer() {
    var layout = document.querySelector('.mdl-layout');
    layout.MaterialLayout.toggleDrawer();
}

function App() {
    return (
    <div className="demo-big-content">
    <Layout className="main-bg">
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Header className="header-color" transparent title="Bhavdeep Singh" scroll>
            <Navigation>
                <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
                <Link to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
                <Link to={process.env.PUBLIC_URL + "/resume"}>Resume</Link>
                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </Navigation>
            </Header>
        </Link>
        <Drawer title="Bhavdeep Singh">
            <Navigation>
                <Link to={process.env.PUBLIC_URL + "/"} onClick={closeDrawer}>Home</Link>
                <Link to={process.env.PUBLIC_URL + "/about"} onClick={closeDrawer}>About</Link>
                <Link to={process.env.PUBLIC_URL + "/projects"} onClick={closeDrawer}>Projects</Link>
                <Link to={process.env.PUBLIC_URL + "/resume"} onClick={closeDrawer}>Resume</Link>
                <Link to={process.env.PUBLIC_URL + "/contact"} onClick={closeDrawer}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
);
}

export default App;
