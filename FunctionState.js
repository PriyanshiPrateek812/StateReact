import React, { useState } from 'react';

const Header = () => {

    const [name, setName] = useState('Guest');

    const onClickHandler = () => {
        setName('John');
    }

    return(
        <div>
            <h1>Welcome { name }</h1>
            <button onClick={ onClickHandler }>Login</button>
        </div>
    )
}
export default Header;
