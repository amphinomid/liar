import React from 'react'

function EnterUsername() {
    return (
        <div className='container'>
            <label className='usernameLabel' for='username'>username:</label> {/*check for uniqueness*/}
            <input className='usernameInput' type='text' id='username' />
            <button class='block' style={{ marginLeft: `auto`, marginRight: `auto` }}>enter</button>
        </div>
    );
}

export default EnterUsername;
