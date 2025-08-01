import React, {useState} from 'react';

function ComboBox({options = [], placeholder = 'Select an option...', onChange, value = ''}) {
    const [selected, setSelected] = useState('');

    const handleSelect = (event) => {
        const value = event.target.value;

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="relative inline-block">
            <select
                onChange={handleSelect}
                value={value}
                className=" appearance-none bg-white/30 w-full text-white rounded-lg  px-4 py-3 pr-10 min-w-48 cursor-pointer shadow-sm  transition-colors duration-200  border border-white hover:border-white/30
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-transparent"
            >
                <option value="" disabled className="bg-white/90 text-black">
                    {placeholder}
                </option>
                {options.map((option, i) => (
                    <option
                        key={i}
                        value={option}
                        className="bg-white/90 text-black"
                    >
                        {option}
                    </option>
                ))}
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ComboBox;