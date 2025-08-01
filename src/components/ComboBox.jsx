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
                className=" appearance-none bg-black/80 w-full text-green-400  rounded-lg  px-4 py-3 pr-10 min-w-48 cursor-pointer shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_25px_#22c55e]  transition-colors duration-200  border border-white hover:border-white/30
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-400
                    focus:border-transparent"
            >
                <option value="" disabled className="bg-black/80 text-green-400">
                    {placeholder}
                </option>
                {options.map((option, i) => (
                    <option
                        key={i}
                        value={option}
                        className="bg-black/80 text-green-400"
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