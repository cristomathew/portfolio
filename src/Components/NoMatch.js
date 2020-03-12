import React from 'react'
import '../Styling/css/style.css'
// import '../Styling/css/font-awesome.min.css'
export const NoMatch = () => (
    <div>
        <div id="notfound">
            <div class="notfound-bg">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page Not Found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="/">Homepage</a>
                <div class="notfound-social">
                    <a href="https://www.instagram.com/cris00707/"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/cristo-mathew-6b145a160/"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.github.com/cristomathew"><i class="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
)