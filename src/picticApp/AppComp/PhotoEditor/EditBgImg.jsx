import { useState } from 'react';
import bgImg from '../../AppJson/btnImg.json';
import AppButton from '../AppBtn';

const EditBgImg = ({ frameBgImg, setFrameBgImg }) => {

    const [btnDropdown, setDropdown] = useState(false);
    
    const handleDropDown = () =>{
       !btnDropdown ? setDropdown(true) : setDropdown(false) 
    }
    
    return (
        <>
            {!btnDropdown ? (
                <div className='w-full flex flex-col items-center gap-2'>
                    <AppButton
                        icon={'fa-solid fa-caret-down'}
                        label={'Select frame background'}
                        btnDesign={'text-sm font-small text-white text-center p-2 bg-gray-500 shadow-md rounded-md cursor-pointer hover:bg-white hover:text-gray-500'}
                        onClick={handleDropDown}
                    />
                </div>
            ) : (
                <div className="w-full flex flex-col items-center gap-2">
                     <AppButton
                        icon={'fa-solid fa-caret-up'}
                        label={'Select frame background'}
                        btnDesign={'text-sm font-small text-gray-500 text-center p-2 rounded-md cursor-pointer'}
                        onClick={handleDropDown}
                    />
                    <div className="flex flex-wrap gap-4 justify-center bg-white p-4 shadow-md rounded-sm">
                        {Object.entries(bgImg).map(([name, imgName]) => (
                            <button
                                key={name}
                                onClick={() => setFrameBgImg(imgName)}
                                className={`w-8 h-8 rounded-lg shadow-md border-1 transition-all cursor-pointer
                        ${frameBgImg === imgName ? 'border-blue-500' : 'border-gray-400'}`}
                                style={{
                                    backgroundImage: `url(${imgName})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div
                                    className={`w-full h-full rounded-md bg-cover bg-center`}
                                    title={name}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )
            }
        </>

    );
}

export default EditBgImg;
