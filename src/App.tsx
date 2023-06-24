import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./containers/MainPage/MainPage";
import Projects from "./containers/Projects/Projects";
import AboutMe from "./containers/Aboutme/AboutMe";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';
import Page404 from "./containers/404/page404";

const App = () => (
    <div className="App">
        <main className="flex-shrink-0">
            <Navbar />
            <Routes>
                <Route path="/" element={(
                    <MainPage />
                )} />

                <Route path="/projects" element={(
                    <Projects />
                )} />

                <Route path="/about-me" element={(
                    <AboutMe />
                )} />

                <Route path="/contact" element={(
                    <Contact />
                )} />

                <Route path="*" element={(
                    <Page404 />
                )} />
            </Routes>
        </main>
        <Footer />
    </div>
);

export default App;
