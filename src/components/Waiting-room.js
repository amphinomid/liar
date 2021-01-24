import React from 'react'

function WaitingRoom() {
    return (
        <div>
            <div className='linkLabel'>
                send your friends this link: ———
            </div>
            {/* If host */}
            <button class='block' style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>start</button>
        </div>
    );
}

export default WaitingRoom;
