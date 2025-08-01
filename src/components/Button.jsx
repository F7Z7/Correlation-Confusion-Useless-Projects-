import React from 'react';

function Button({text, onClick,icon: Icon,gradient}) {
    return (
        <div>
            <button onClick={onClick} className={`flex p-3 text-white text-center justify-center items-center gap-2 border rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 w-[170px] ${gradient}`}>
                {Icon && <Icon className="w-5 h-5" />}
                {text}
            </button>
        </div>
    );
}

export default Button;