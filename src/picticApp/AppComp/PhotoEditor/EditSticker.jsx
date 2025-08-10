import { useState } from 'react';
import StickerSrc from '../../AppJson/btnSticker.json';
import AppButton from '../AppBtn';

const EditPhotoSticker = ({ addSticker }) => {

    
    const [btnDropdown, setDropdown] = useState(false);

    const handleDropDown = () => {
        !btnDropdown ? setDropdown(true) : setDropdown(false)
    }

    return (
        <>
            {!btnDropdown ? (
                <div className='w-full flex flex-col items-center gap-2'>
                    <AppButton
                        icon={'fa-solid fa-caret-down'}
                        label={'Select stickers'}
                        btnDesign={'text-sm font-small text-white text-center p-2 bg-gray-500 shadow-md rounded-md cursor-pointer hover:bg-white hover:text-gray-500'}
                        onClick={handleDropDown}
                    />
                </div>
            ) : (
                <div className="w-full flex flex-col items-center gap-2">
                    <AppButton
                        icon={'fa-solid fa-caret-up'}
                        label={'Select stickers'}
                        btnDesign={'text-sm font-small text-gray-500 text-center p-2 rounded-md cursor-pointer'}
                        onClick={handleDropDown}
                    />

                    <div className='flex flex-wrap gap-4 justify-center bg-white p-4 shadow-md rounded-sm'>

                        {Object.entries(StickerSrc).map(([key, src], idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={key}
                                className="w-auto h-12 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => addSticker(src)}
                            />
                        ))}


                    </div>

                </div>
            )
            }
        </>

    );
}

export default EditPhotoSticker;
