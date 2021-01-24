import React from 'react'
import { Link } from 'react-router-dom'

function EnterUsername() {
    return (
        <div className='container'>
            <label className='usernameLabel' for='username'>username:</label> {/*check for uniqueness, or just add a number to the end if not unique*/}
            <input className='usernameInput' type='text' id='username' />
            <Link to='/room' style={{ textDecoration: 'none' }}><button className='block' style={{ marginLeft: 'auto', marginRight: 'auto' }}>enter</button></Link>
        </div>
    );
}

export default EnterUsername;
