import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import AppButton from './AppBtn';

export default function UploadPhoto({ maxAttempts, onClose, onNextStep, imgCont }) {
    const [photos, setPhotos] = useState(Array(maxAttempts).fill(null));
    
    const handleNextprocess = () => {
        const allPhotosFilled = photos.every(photo => photo !== null && photo !== undefined);

        if(allPhotosFilled){
            onNextStep(true);
            imgCont(photos)
        } else {

        }
        
    }

    const handleUploadChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updated = [...photos];
            updated[index] = URL.createObjectURL(file);
            setPhotos(updated);
        }
    };
  

    return (
        <div className="relative w-full max-w-[100vw] md:max-w-3xl mx-auto mt-8  p-4 md:p-6  overflow-hidden">
            
            <AppButton icon={'fa-times'} btnDesign={'text-2xl absolute top-4 right-4 text-black hover:text-red-500 cursor-pointer'} onClick={onClose}/>
        
            <h2 className="text-center font-rg text-black font-semibold p-4 text-base md:text-3xl mb-4">
                Upload your image here
            </h2>

            
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {photos.map((photo, index) => (
                    <label
                        key={index}
                        className="relative flex items-center justify-center border border-dashed border-black rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[180px] cursor-pointer overflow-hidden group"
                    >
                        {photo ? (
                            <img
                                src={photo}
                                alt={`Upload ${index}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <FaPlus className="text-2xl text-black" />
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleUploadChange(e, index)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />

                        {photo && (
                            <div className="absolute inset-0 bg-black bg-opacity-30 hidden group-hover:flex items-center justify-center text-white text-sm font-medium">
                                Change Image
                            </div>
                        )}
                    </label>
                ))}
            </div>

            <div className="mt-6 flex justify-center sm:justify-end">
                <AppButton icon={'fa-chevron-right'} onClick={handleNextprocess} btnDesign={'bg-green-700 hover:bg-green-800 cursor-pointer text-white font-semibold py-2 px-6 rounded shadow'} label={'Next step'}/>
            </div>
        </div>
    );
}
 