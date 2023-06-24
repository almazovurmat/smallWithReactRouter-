import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0">Copyright &copy; Samuel Jackson - 2023</div>
                    </div>
                    <div className="col-auto">
                        <Link className="small" to="/about-me">Resume</Link>
                        <span className="mx-1">&middot;</span>
                        <Link className="small" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;