import React, {lazy, Suspense} from 'react';
import Project from './Project';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
export const Home = () => (
    <div>
        <h2>Hi My Name is Cristo</h2>
        <p>This is a Website that describes some details about me and will be devoloped further depending on my free time.</p>
        <h3>Some of my projects are:</h3>
        
        <Carousel arrows infinite>
            <Project image="https://mnrpa.org/wp-content/uploads/2014/02/old_books_outdoors-wallpaper-1680x1050.jpg"
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