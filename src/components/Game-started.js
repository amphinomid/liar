import React from 'react'

function GameStarted() {
    return (
        <div>
            <div className='promptLabel'>
                {/* Get category, word, liar, etc. (API call) */}
                category is FOOD<br />
                word is APPLE / you are the LIAR
            </div>
            <button className='block' style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>end</button>
        </div>
    );
}

export default GameStarted;

