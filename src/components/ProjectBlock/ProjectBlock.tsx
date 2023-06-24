import React from 'react';

import {IProject} from "../../types/types";
import {useNavigate} from "react-router-dom";

interface IProps {
    projects: IProject[];
}

const style: React.CSSProperties = {
    cursor: "pointer",
};
const styles: React.CSSProperties = {
    width: "300px",
    height: "400px",
};
const ProjectBlock: React.FC<IProps> = ({projects}) => {
    const navigate = useNavigate();
    return (
        <section className="py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span>
                    </h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {
                            projects.map(project => (
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" style={style}
                                     onClick={() => navigate(project.route)}>
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">{project.title}</h2>
                                                <p>{project.description}</p>
                                            </div>

                                            <img style={styles} className="img-fluid" src={project.image}
                                                 alt={project.title}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectBlock;