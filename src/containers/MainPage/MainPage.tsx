import React from 'react';
import MainBlock from "../../components/Mainpage/MainBlock";
import MainAboutMeBlock from "../../components/Mainpage/MainAboutMeBlock";

const MainBlockData = {
    subtitle: 'DESIGN · DEVELOPMENT · MARKETING',
    title: 'I can help your business to',
    gradientTitle: 'Get online and grow fast'
}

const AboutMeData = {
    title: 'About Me',
    subtitle: 'My name is Samuel Jackson and I help brands grow.',
    text: 'I am a Web developer with experience in creating interactive and scalable web applications. I have a deep understanding of the React ecosystem and the ability to apply modern development approaches and best practices. I strive to write elegant and efficient code, and I am committed to continuous learning and embracing new challenges in the frontend development world.',

}
const MainPage = () => {
    return (
        <>
            <MainBlock title={MainBlockData.title} subtitle={MainBlockData.subtitle} gradientTitle={MainBlockData.gradientTitle} />
            <MainAboutMeBlock title={AboutMeData.title} subtitle={AboutMeData.subtitle} text={AboutMeData.text} />
        </>
    );
};

export default MainPage;