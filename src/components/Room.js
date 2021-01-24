import React from 'react'
import WaitingRoom from './Waiting-room'
import GameStarted from './Game-started'
import GameEnded from './Game-ended'

function GameRoom() {
    return (
        <div className='gameScreen'>
            <div className='gameScreenLeft'>
                <p className='playersLabel'>
                    players:
                    {/* Get list of players (API call) */}
                </p>
                <div className='playersList'>
                    <li>
                        ahaha
                    </li>
                </div>
            </div>
            <div className='gameScreenRight'>
                <WaitingRoom />
            </div>
        </div>
    );
}

export default GameRoom;
