import React, { Component } from 'react'

class Header extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Guest',
            email: 'guest@example.com'
        }
    }

    onClickHandler = () => {
        // console.log('Button clicked');
        // console.log(this.state.name);
        // this.state.name = 'John';
        // console.log(this.state.name);
        this.setState({
            name: 'John',
            email: 'john@example.com'
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}, { this.state.email }</h1>
                <button onClick={this.onClickHandler}>Login</button>
            </div>
        )

    }
}
export default Header;
