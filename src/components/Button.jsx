import React from 'react';

function Button({text, onClick,icon: Icon,gradient}) {
    return (
        <div>
            <button>
                {Icon && <Icon className="w-5 h-5" />}
                {text}
            </button>
        </div>
    );
}

export default Button;