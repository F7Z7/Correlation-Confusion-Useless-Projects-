import React from 'react';

function Header({title}) {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight t">
                {title}
            </h1>
        </div>
    );
}

export default Header;