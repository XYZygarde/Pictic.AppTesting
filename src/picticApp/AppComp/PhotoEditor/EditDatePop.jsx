import { useState } from "react";

const EditDatePop = ({ setShowDate }) => {
    const [enabled, setEnabled] = useState(false);

    const handleToggle = () => {
        setEnabled(!enabled);
        setShowDate(!enabled);
    };

    return (
        <>
            <div className="w-1/2 flex flex-row items-center justify-between gap-2 shadow-sm rounded-md p-4 bg-white mx-auto">
                <h3 className="text-sm font-semibold text-black">Show Date: </h3>
                <button
                    onClick={handleToggle}
                    className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors duration-300 cursor-pointer ${enabled ? "bg-gray-500" : "bg-gray-300"
                        }`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                            }`}
                    />
                </button>
            </div>
        </>
    );
}

export default EditDatePop;