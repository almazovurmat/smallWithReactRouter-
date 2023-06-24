import React from 'react';
import Resume from "../../components/AboutMe/AboutMe";
import {IEducation, IExperience} from "../../types/types";

const experienceData: IExperience[] = [
    {
        year: '2016-Present',
        position: 'Lead Web Developer',
        company: 'Innovate Digital',
        location: 'Seattle, WA',
        description: `As the Lead Web Developer at Innovate Digital, I spearheaded the development of complex web applications for a diverse range of clients. I collaborated with cross-functional teams, including designers and project managers, to deliver high-quality solutions within strict deadlines. Additionally, I stayed up-to-date with industry trends, incorporating new techniques and frameworks to optimize the development process and enhance user experiences.`
    },
    {
        year: '2012-2016',
        position: 'Senior Web Developer',
        company: 'XYZ Tech Solutions',
        location: 'San Francisco, CA',
        description: `At XYZ Tech Solutions, I took on a more senior role, leading web development projects from conception to deployment. I worked closely with clients to understand their requirements and implemented innovative solutions using cutting-edge technologies. I also mentored junior developers, conducted code reviews, and contributed to process improvements.`
    },
    {
        year: '2008-2012',
        position: 'Junior Web Developer',
        company: 'ABC Web Solutions',
        location: 'New York, NY',
        description: `During my time at ABC Web Solutions, I gained practical experience in web development, working on various client projects. I collaborated with a team of developers to create and maintain websites, ensuring they were visually appealing, user-friendly, and optimized for performance.`
    }
];

const educationData: IEducation[] = [
    {
        year: '2014-2017',
        degree: "Ph.D. in Computer Science",
        university: 'Massachusetts Institute of Technology (MIT)',
        location: 'Cambridge, MA',
        description: 'During my Ph.D. studies at MIT, I focused my research on web application security and optimization. I collaborated with leading researchers in the field, published academic papers, and presented my findings at conferences. This experience allowed me to gain a deep understanding of the theoretical aspects of web development and expand my expertise in building secure and efficient web solutions.'
    },
    {
        year: '2012-2014',
        degree: "Master's Degree in Software Engineering",
        university: 'Stanford University',
        location: 'Stanford, CA',
        description: 'At Stanford University, I pursued a Master\'s degree in Software Engineering with a specialization in web development. The program provided in-depth knowledge of advanced web technologies, database management, and software architecture. I also had the opportunity to work on research projects, further honing my skills in designing and implementing scalable web applications.'
    },
    {
        year: '2008-2012',
        degree: "Bachelor's Degree in Computer Science",
        university: 'Columbia University',
        location: 'New York, NY',
        description: `During my undergraduate studies at Columbia University, I gained a solid foundation in computer science principles, algorithms, and programming languages. I also took elective courses focused on web development, enhancing my knowledge of HTML, CSS, and JavaScript.`
    }
]

const professionalSkills = [
    'SEO/SEM Marketing',
    'Statistical Analysis',
    'Web Development',
    'Network Security',
    'Adobe Software Suite',
    'User Interface Design'
];

const languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'PHP',
    'Symfony',
    'React',
    'TypeScript',
    'Ruby'
];
const AboutMe = () => {
    return (
        <>
            <Resume experience={experienceData} education={educationData} professionalSkills={professionalSkills} languages={languages} />
        </>
    );
};

export default AboutMe;