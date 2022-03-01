import React from "react";

import HomeLayout from "../components/HomeLayout";

const About = () => {
  return (
    <HomeLayout>
      <div className="container">
        <h1 className="text-white mb-5 text-center about-header">About Me</h1>
        <div className="row justify-content-round row4">
          <div className="col-9 col-sm-7 col-md-8">
            <h3 className="text-white">EXPERIENCES</h3>
            <p className="text-white mt-5">
              I've been working on website development since 2018, using a
              variety of languages such as HTM, CSS, Bootstrap, JavaScript
              (React js and Node js), and online deployment. For more detail you can 
              visit My git hub project.
            </p>
            <p className="text-white mt-5">
              I've also had experience with Figma, where I was able to use the
              program to create a mockup.
            </p>
            <a href="https://github.com/UWAJENEZANadine" target="blank">View GitHUB projects</a>
          </div>
          <div className="col-9 col-sm-7 col-md-1 px-5">
            <h3 className="text-white">HOBBIES</h3>
            <ul>
                <li className="text-white mt-5">  Writing/Blogging</li>
                <li className="text-white mt-3"> Video Games</li>
                <li className="text-white mt-3"> Photography</li>

            </ul>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default About;
