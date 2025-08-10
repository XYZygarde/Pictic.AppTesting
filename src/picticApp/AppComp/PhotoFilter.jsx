import { useState } from "react";
import filters from '../AppJson/btnfilter.json';

const FilterBtns = ({ filter, setFilter }) => {

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(filters).map(([name, className]) => (
                <button
                    key={name}
                    onClick={() => setFilter(className)}
                    className={`w-10 h-10 rounded-lg shadow-md border-2 transition-all cursor-pointer
                             ${filter === className ? 'border-blue-500' : 'border-gray-400'}`}
                >
                    <div
                        className={`w-full h-full rounded-md filter ${className} bg-cover bg-center`}
                        style={{ backgroundImage: `url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg?width=1200')` }}
                        title={name}
                    />
                </button>
            ))}
        </div>
    );
};

export default FilterBtns;
