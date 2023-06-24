import React from 'react';
import {IEducation, IExperience} from "../../types/types";

interface IProps {
    experience: IExperience[];
    education: IEducation[];
    professionalSkills: string [];
    languages: string[];
}
const AboutMe: React.FC <IProps> = ({experience, education, professionalSkills, languages}) => {
    const renderSkillsAndLanguages = (array: string[]) => {
        const rows = [];
        for (let i = 0; i < array.length; i += 3) {
            const rowSkills = array.slice(i, i + 3);
            const row = (
                <div className="row row-cols-1 row-cols-md-3 mb-4" key={i}>
                    {rowSkills.map((skill, index) => (
                        <div className="col mb-4 mb-md-0" key={index}>
                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{skill}</div>
                        </div>
                    ))}
                </div>
            );
            rows.push(row);
        }
        return rows;
    };

    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <section>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                        </div>
                        {
                            experience.map(experienceData => (
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div
                                                        className="text-primary fw-bolder mb-2">{experienceData.year}</div>
                                                    <div className="small fw-bolder">{experienceData.position}</div>
                                                    <div className="small text-muted">{experienceData.company}</div>
                                                    <div className="small text-muted">{experienceData.location}</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>{experienceData.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                        {
                            education.map(educationData => (
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div
                                                        className="text-secondary fw-bolder mb-2">{educationData.year}</div>
                                                    <div className="mb-2">
                                                        <div
                                                            className="small fw-bolder">{educationData.university}</div>
                                                        <div className="small text-muted">{educationData.location}</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">{educationData.degree}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>{educationData.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <div className="pb-5"></div>
                    <section>
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div
                                            className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-tools"></i></div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span>
                                        </h3>
                                    </div>
                                    {
                                        renderSkillsAndLanguages(professionalSkills)
                                    }
                                </div>
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div
                                            className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-code-slash"></i></div>
                                        <h3 className="fw-bolder mb-0"><span
                                            className="text-gradient d-inline">Languages</span></h3>
                                    </div>
                                    {
                                        renderSkillsAndLanguages(languages)
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;