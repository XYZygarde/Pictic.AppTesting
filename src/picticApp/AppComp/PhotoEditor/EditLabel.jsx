import { useState, useRef } from "react";
import labelColors from '../../AppJson/labelColor.json';
import AppButton from '../AppBtn';

const EditLabel = ({ setLabelColor }) => {

    const [btnDropdown, setDropdown] = useState(false)
    const colorInputRef = useRef(null);

    const handleDropDown = () => {
        if (!btnDropdown) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    const handleCustomColorChange = (e) => {
        setLabelColor(e.target.value.replace('#', ''));
    };

    const handleCustomColorClick = () => {
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };


    return (
        <>
            {!btnDropdown ? (
                <div className='w-full flex flex-col items-center gap-2'>
                    <AppButton
                        icon={'fa-solid fa-caret-down'}
                        label={'Select label color'}
                        btnDesign={'text-sm font-small text-white text-center p-2 bg-gray-500 shadow-md rounded-md cursor-pointer hover:bg-white hover:text-gray-500'}
                        onClick={handleDropDown}
                    />
                </div>
            ) : (
                <div className="w-full flex flex-col items-center gap-2">
                    <AppButton
                        icon={'fa-solid fa-caret-up'}
                        label={'Select label color'}
                        btnDesign={'text-sm font-small text-gray-500 text-center p-2 rounded-md cursor-pointer'}
                        onClick={handleDropDown}
                    />
                    <div className="flex flex-wrap gap-4 justify-center bg-white p-4 shadow-md rounded-sm">
                        {Object.entries(labelColors).map(([name, colorName]) => (
                            <button
                                key={name}
                                onClick={() => setLabelColor(colorName)}
                                className={`w-8 h-8 rounded-lg shadow-md border transition-all cursor-pointer border border-gray-500`}
                                style={{ backgroundColor: `#${colorName}` }}
                                title={name}
                            />
                        ))}
                        <button
                            onClick={handleCustomColorClick}
                            className="w-8 h-8 rounded-lg border border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:border-blue-500"
                            title="Pick custom color"
                        >
                            +
                        </button>

                        <div className="flex justify-center items-center w-full">
                            <input
                                type="color"
                                ref={colorInputRef}
                                className="w-1 h-1 opacity-0"
                                onChange={handleCustomColorChange}
                            />
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default EditLabel;
