import React from 'react';
import Project from './Project';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from 'react-fa';
export const Home = () => (
    <div>
        <h2>Hi My Name is Cristo</h2>
        <p>This is a Website that describes some details about me and will be devoloped further depending on my free time.</p>
        <h3>Some of my projects are:</h3>
        
        <Carousel autoPlay={5000} animationSpeed={1000} arrows infinite rtl dots 
        arrowLeft={<Icon name="angle-double-left" />}
        arrowLeftDisabled={<Icon name="angle-left" />}
        arrowRight={<Icon name="angle-double-right" />}
        arrowRightDisabled={<Icon name="angle-right" />}
        addArrowClickHandler>

            <Project image="https://wallpaperplay.com/walls/full/5/e/b/77588.jpg"
            front="BS - A Website like Olx" link="https://github.com/cristomathew/B-S"> A website that is similar to Olx built entirely using django
            the admin page and admin table is customized according to my preferences
            </Project>
            <Project image="http://www.lisbdnet.com/wp-content/uploads/2018/08/Digital-Library.jpg"
            front="Libreo" link="https://github.com/cristomathew/libreo"> A Library Management Application made using Ionic
            which supports both ios and android platform
            </Project>
            <Project image="https://yt3.ggpht.com/a/AGF-l7-wyxt5UPf7QXjahmaivgiQPdS8LYWD-Kt6nQ=s900-c-k-c0xffffffff-no-rj-mo"
            front="Eyogi" link="https://github.com/cristomathew/eyogi">An Application Build for a startup(Eyogi)
            </Project>
            <Project image="https://www.kendomanager.com/wp-content/uploads/2019/10/project-manager-1030x579.png"
            front="Vilicus Operis" link="https://github.com/cristomathew/project_manager"> A website that helps teachers and students 
            alike to add details about projects and grade it accordingly
            </Project>
        </Carousel>
       
    </div>
)