import React from "react";
import '../assets/font-fam.css';
import AboutImage from "../assets/imgsrc/about-img2.png";

function About() {
  return (
    <div className="container mx-auto p-6 align-center h-screen flex flex-col items-left my-8 justify-center">


      {/* 1st Section */}
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-1 md:space-y-0 p-2 gap-6 md:gap-6 overflow-hidden">
        <div className="flex flex-col mb-8 align-center justify-center w-auto  mx-auto">
          <h1 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 font-ab">About Pictic</h1>
          <p className="md:text-xl mb-4 text-gray-700 font-ws">
            Pictic is your user-friendly digital photobooth app, designed to capture and share moments effortlessly.
          </p>
          <p className="md:text-xl mb-4 text-gray-700 font-ws">
            With Pictic, you can take photos, apply fun stickers and filters, and print them instantly without using accounts. Enjoy various templates and designs to make your photos unique and memorable.
          </p>
          <p className="md:text-xl mb-4 text-gray-700 font-ws">
            Our goal from developing this app is to provide a accessible yet seamless and enjoyable experience for users of all ages, whether for special events or just for fun.
          </p>
          <p className="md:text-xl mb-4 text-gray-700 font-ws">
            Join us in celebrating life's moments with Pictic!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img src={AboutImage} alt="About Pictic" className="w-256 h-full max-w-md mx-auto"/>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-1 md:space-y-0 p-2 gap-6 md:gap-6 overflow-hidden">

      </div>

    </div>
  );
}

export default About;