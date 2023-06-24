import React from 'react';
import ProjectBlock from "../../components/ProjectBlock/ProjectBlock";
import ProjectContactMeBlock from "../../components/ProjectBlock/ProjectContactMeBlock";
import {IProject} from "../../types/types";

import burgerImg from '../../assets/burger.jpeg';
import messengerImg from '../../assets/messenger.png';

const projectsData: IProject[] = [
    {
        title: "Project: Make your Burger",
        description: "\"Project: Make your Burger\" is an innovative web application that empowers users to create their own customized burgers. The project offers a user-friendly interface where users can select from a wide range of ingredients, toppings, and condiments to design their perfect burger. With interactive visuals and intuitive controls, the application allows users to experiment with different combinations and visualize their creations in real-time. Whether it's choosing the type of bun, adding various meats and veggies, or selecting from a variety of sauces, \"Make your Burger\" provides an engaging and enjoyable experience for burger enthusiasts to unleash their culinary creativity.",
        image: burgerImg,
        route: "/projects/burger"
    },
    {
        title: "Project: Custom Messenger",
        description: "\"Project: Custom Messenger\" is an exciting web development project aimed at creating a personalized messaging application. The project focuses on building a user-friendly interface that allows users to communicate seamlessly through text messages, voice calls, and file sharing. With a strong emphasis on security and privacy, the Custom Messenger project incorporates end-to-end encryption and advanced authentication mechanisms to ensure a secure messaging experience. Additionally, the project aims to provide a customizable and scalable platform, allowing users to personalize their messaging experience with various themes, stickers, and interactive features.",
        image: messengerImg,
        route: "/projects/messenger"
    }
];

const contactMe = {
    title: "Let's build something together",
    route: "/contact"
}
const Projects = () => {
    return (
        <>
            <ProjectBlock projects={projectsData} />
            <ProjectContactMeBlock title={contactMe.title} route={contactMe.route}  />
        </>
    );
};

export default Projects;