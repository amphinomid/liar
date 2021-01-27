import React from 'react'

function WaitingRoom() {
    return (
        <div>
            <p className='linkLabel'>send your friends this link:</p>
            <p className='link'>{'liar-ga.me' + window.location.pathname.replace('room', 'enter')}</p>
            <button className='block' style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>start</button>
        </div>
    );
}

export default WaitingRoom;
