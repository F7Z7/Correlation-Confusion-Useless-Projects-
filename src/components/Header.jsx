import React from 'react';

function Header({title}) {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-green-400 tracking-tight font-mono drop-shadow-[0_0_10px_#22c55e]">
                {title}
            </h1>
        </div>
    );
}

export default Header;