import React from "react";
import { Image } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import Project from "./Project";

const App = () => {
    return (
        <BrowserRouter>
            <Image src="/img/deethedev-logo.png" style={{width: 500}} className="d-block mx-auto" alt="Deethedev Logo"/>
            <div className="container rounded">
                <Header />
                <Route exact path="/" component={Profile} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/project" component={Project} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
