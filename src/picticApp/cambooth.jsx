import '../assets/font-fam.css';
import { useState, useRef, useEffect } from 'react';
import PhotoFrameA from './AppFrame/photoFrame-A';
import PhotoFrameB from './AppFrame/photoFrame-B';
import PhotoFrameC from './AppFrame/photoFrame-C';
import PhotoFrameD from './AppFrame/photoFrame-D';
import PhotoFrameE from './AppFrame/photoFrame-E';
import PhotoFrameF from './AppFrame/photoFrame-F';
import frameImages from './AppJson/imgsrc.json';
import Webcam from 'react-webcam';
import FilterBtns from './AppComp/PhotoFilter';
import EditImage from './editPanel';
import '../assets/frame.css';
import UploadPhoto from './AppComp/PhotoUpload';
import AppButton from './AppComp/AppBtn';
import FilterToCss from './AppJson/filter.json';
import { select } from 'framer-motion/client';
//import testComp from ../_test_/testComp.json';


function Cambooth() {
    const frames = [ PhotoFrameA, PhotoFrameB, PhotoFrameC, PhotoFrameD, PhotoFrameE, PhotoFrameF ]; // frame selection 
    const frameCont = [ frameImages.setA, frameImages.setB, frameImages.setC, frameImages.setD, frameImages.setE, frameImages.setF]; // image source
    const [selectFrame, setSelectedFrame] = useState(null); //for selecting frame
    const [filter, setFilter] = useState(''); //for selecting filter
    const webcamRef = useRef(null); //for camera initialization 
    const [captImages, setCaptImages] = useState([]); // storage of images
    const [isCapturing, setIsCapturing] = useState(false); 
    const [captAttempt, setCaptAttempt] = useState(null)
    const [countdown, setCountdown] = useState(null); 
    const [nextStep, setNextStep] = useState(false);
    const [showUploader, setShowUploader] = useState(false);


    useEffect(() => {
        if (selectFrame === null) return;

        switch (selectFrame) {
            case 0:
                setCaptAttempt(4);
                break;
            case 1:
                setCaptAttempt(2);
                break;
            case 2:
                setCaptAttempt(6);
                break;
            case 3:
                setCaptAttempt(3);
                break;
            case 4:
                setCaptAttempt(4);
                break;
            case 5:
                setCaptAttempt(1);
                break;
            default:
                console.log('error occurred in selecting frames');
                break;
        }
    }, [selectFrame]);


    //Capture images
    const screenShotImg = async () => {
        if (!webcamRef.current || captAttempt == null) return;

        setIsCapturing(true);
        setCaptImages([]);
        const captured = [];

        const video = webcamRef.current.video;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');

        for (let i = 0; i < captAttempt; i++) {
            for (let c = 5; c > 0; c--) {
                setCountdown(c);
                await new Promise((res) => setTimeout(res, 1000));
            }

            setCountdown(null);


            ctx.filter = FilterToCss[filter] || 'none';
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = canvas.toDataURL('image/jpeg');
            captured.push(imageData);

            setCaptImages((prev) => [...prev, imageData]);
        }
        setIsCapturing(false);
    };

    //Selecting Photo Frame
    const selectionPhase = () => (
        <div className="w-full max-w-7xl mx-auto pt-20 px-4 py-8 md:px-6 md:py-10 z-10">
            <div className="text-center mb-5">
                <h1 className="text-1xl sm:text-2xl md:text-4xl font-bold text-gray-800 font-ar leading-tight md:mt-16">
                    Choose your frames
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center bg-gray-100">
                {frames.map((FrameComponent, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedFrame(index)}
                        className={` p-4 md:p-6 flex flex-col items-center cursor-pointer transition duration-200 ease-in-out hover:scale-[1.02] ${selectFrame === index ? 'ring-4 ring-blue-500' : ''
                            }`}
                    >
                        <h2 className="text-base sm:text-lg font-semibold text-black mb-3 font-ar">
                            Frame {index + 1}
                        </h2>
                        <FrameComponent
                            photo={frameCont[index]}
                            images={{ layout: 'bg-white frame-scale',
                                      enableDate: false, 
                                      colorPicked: '#000000',
                                      selectedColor: '000000',
                                      colorBorder: '000000'   
                                    }}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );



    const handleUpload = () => {
        setShowUploader(true);
    
    }

    //Button function for changing frame
    const changeFrame = () => {
        setSelectedFrame(null);
        setCaptImages([]);
    }


    const capturePhase = () => (
        (showUploader ?
            (
                <div className='h-screen w-screen flex items-center justify-center'>
                    <UploadPhoto maxAttempts={captAttempt} onClose={() => setShowUploader(false)} onNextStep={setNextStep} imgCont={setCaptImages} />
                </div>
            ) 
            :
            (
                <div className="container mx-auto p-4 md:p-6 z-10">
                    <div className="w-full text-center mt-8 md:mt-16 p-5 md:p-6 h-auto">
                        {/* Webcam & Controls */}
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                            {/* Webcam */}
                            <div className="relative w-full max-w-full aspect-video md:aspect-[16/12] flex items-center justify-center">
                                {countdown && (
                                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black opacity-60 z-30">
                                        <span className="text-white text-6xl font-bold animate-pulse">{countdown}</span>
                                    </div>
                                )}

                                <Webcam
                                    audio={false}
                                    screenshotFormat="image/jpeg"
                                    ref={webcamRef}
                                    className={`w-full h-full object-cover rounded-lg shadow-lg filter ${filter} z-25`}
                                />

                                <div className="absolute bottom-4 w-full flex justify-center z-40">
                                    <button
                                        className={
                                            `p-2 rounded-full flex items-center justify-center shadow-md md:p-4 ${isCapturing ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                                            }`
                                        }
                                        onClick={screenShotImg}
                                        disabled={isCapturing}
                                    >
                                        <i className="fa-solid fa-camera text-lg"></i>
                                        {captImages.length > 0 && !isCapturing && (<p className='ml-3 text-sm md:text-sm'>Retake Photo</p>)}
                                    </button>
                                </div>
                            </div>


                            {/* Button panel */}
                            <div className="w-full h-auto md:w-2/3 aspect-video md:min-h-[320px] flex flex-col justify-center items-center p-4">
                                {isCapturing ?
                                    <p className="md:text-lg text-red-500 p-4 font-ws">You have 5 seconds to take shot</p>
                                    :
                                    <p className="md:text-lg text-black p-4 font-ws">Pick your filter</p>
                                }
                                {!isCapturing && <FilterBtns filter={filter} setFilter={setFilter} />}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mt-16">
                                    {!isCapturing && (
                                        <AppButton 
                                        icon={'fa-rotate-right'} 
                                        label={'Change Frame'} 
                                        btnDesign={'text-white bg-orange-800 py-2 px-4 rounded font-ws cursor-pointer text-sm md:inline-flex items-center hover:bg-gray-900 transition'} 
                                        onClick={changeFrame} />
                                    )}
                                    {!isCapturing && (
                                        <AppButton
                                        icon={'fa-image'} 
                                        label={'Upload Photo'} 
                                        btnDesign={'text-white bg-blue-800 py-2 px-4 rounded font-ws cursor-pointer text-sm md:inline-flex items-center hover:bg-gray-900 transition'} 
                                        onClick={handleUpload} />
                                    )}
                                    {captImages.length > 0 && !isCapturing && (
                                        <AppButton 
                                        icon={'fa-chevron-right'} 
                                        label={'Next Step'} 
                                        btnDesign={'text-white bg-green-800 py-2 px-4 rounded font-ws cursor-pointer text-sm md:inline-flex items-center hover:bg-gray-900 transition'} 
                                        onClick={() => setNextStep(true)} />
                                    )}
                                </div>


                            </div>
                        </div>

                        {/* Captured Images */}
                        <div className="w-full bg-[#F6F5F2] rounded-lg shadow-lg mt-4 p-4">
                            <p className="md:text-lg text-gray-500 p-4 font-ws">View your image here:</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {captImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-32 sm:w-40 md:w-48 lg:w-56 aspect-video rounded-lg shadow-md overflow-hidden"
                                    >
                                        <img
                                            src={img}
                                            alt={`Shot ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    );


    const initComponent = selectFrame !== null ? capturePhase : selectionPhase;

    return nextStep ? 
    <EditImage 
        Photo={captImages} 
        Frame={selectFrame} 
        closeEditor={setNextStep} 
        closeUpload={setShowUploader} 
        clearPhoto={setCaptImages}/> 
    : initComponent();
}

export default Cambooth;
