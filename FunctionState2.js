import React, { useState } from 'react';

const Header = () => {

    // const [name, setName] = useState('Guest');
    // name -> property
    // setName -> method
    // const [email, setEmail] = useState('guest@gmail.com');

    const [user, setUser] = useState({
        name: 'Guest',
        email: 'guest@gmail.com'
    })

    const onClickHandler = () => {
        // setName('John');
        setUser({
            ...user, //spread operator(used to copy the existing values)
            name: 'John',
        })
    }

    return(
        <div>
            <h1>Welcome { user.name }, { user.email }</h1>
            <button onClick={ onClickHandler }>Login</button>
        </div>
    )
}
export default Header;
