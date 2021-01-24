import React from 'react'

function GameEnded() {
    return (
        <div>
            <div className='liarLabel'>
                {/* Get liar (API call) */}
                ahaha was the liar!
            </div>
            <button className='block' style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>play again</button>
        </div>
    );
}

export default GameEnded;
