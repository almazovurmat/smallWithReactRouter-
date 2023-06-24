import React from 'react';
import {Link} from "react-router-dom";
import image from '../../assets/profile.png';

interface IProps {
    title: string,
    subtitle: string,
    gradientTitle: string
}
const MainBlock: React.FC <IProps> = ({title, subtitle,gradientTitle}) => {
    return (
        <>
            <section className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div className="text-uppercase">{subtitle}</div>
                                </div>
                                <div className="fs-3 fw-light text-muted">{title}</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">{gradientTitle}</span>
                                </h1>
                                <div
                                    className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                       to="/about-me">Resume</Link>
                                    <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                       to="/projects">Projects</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src={image} alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainBlock;