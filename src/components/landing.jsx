import { Link } from "react-router-dom";
import '../assets/landing.css';
import '../assets/font-fam.css';
import LandingLogo from '../assets/imgsrc/Picticlogo.png';
import eximg1 from '../assets/imgsrc/landing-img1.png';
import eximg2 from '../assets/imgsrc/landing-img2.png';
import eximg3 from '../assets/imgsrc/landing-img3.png';
import eximg4 from '../assets/imgsrc/landing-img4.png';

function Home() {
    return (
        <>
            <section className="container mx-auto px-4 py-16 md:py-36 flex flex-col md:flex-column items-center justify-center gap-8 md:gap-8">
                <div className="w-full md:w-1/2 text-center md:text-center items-center flex flex-col">
                    <img src={LandingLogo} alt="Landing" className="w-1/2 max-w-xs sm:max-w-sm md:max-w-1/2 h-auto object-cover animate-bounce-custom" />
                    <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 font-ab">
                        Shot your moments with Pictic
                    </h1>
                    <p className="text-sm md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:w-3/4 md:mx-0 font-ws">
                        Experience the joy of instant photo printing with fantastic designs.
                    </p>

                    <Link to="/photobooth" className="bg-black text-white rounded-md hover:text-black hover:bg-white shadow-md transition duration-300
                   inline-flex items-center justify-center space-x-2
                   text-bs px-4 py-4 sm:text-bs sm:px-4 sm:py-4 font-ws font-medium">
                        <i className="fa-solid fa-camera text-base mr-2"></i>
                        Capture Now
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center
                      space-y-4 md:flex-row md:space-x-1 md:space-y-0
                      p-2 gap-6 md:gap-6 overflow-hidden">
                 
                    <img src={eximg1} alt="Example 1" className="md:w-1/4 h-132 object-contain transform rotate-3 -translate-x-2 md:overflow-hidden " />
                    <img src={eximg2} alt="Example 2" className="md:w-1/4 h-132 object-contain transform -rotate-6 translate-x-2 md:overflow-hidden" />
                    <img src={eximg3} alt="Example 3" className="md:w-1/4 h-132 object-contain transform rotate-8 -translate-x-4 md:overflow-hidden" />
                    <img src={eximg4} alt="Example 4" className="md:w-1/4 h-132 object-contain transform -rotate-6 translate-x-1 md:overflow-hidden" />
                  
                 </div>



                

            </section>
         
        </>
    )
}

export default Home;