import React from 'react';
import {useNavigate} from "react-router-dom";

interface IProps {
    title: string;
    route: string;
}
const ProjectContactMeBlock: React.FC <IProps> = ({title, route}) => {
    const navigate = useNavigate();
    return (
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
            <div className="container px-5 my-5">
                <div className="text-center">
                    <h2 className="display-4 fw-bolder mb-4">{title}</h2>
                    <button className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => navigate(route)}>Contact
                        me</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectContactMeBlock;