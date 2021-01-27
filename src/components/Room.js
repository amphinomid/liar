import React from 'react'
import firebase from '../firebase.js'
import WaitingRoom from './Waiting-room'
import GameStarted from './Game-started'
import GameEnded from './Game-ended'

const id = window.location.pathname.substring(6)
const game = firebase.database().ref('games').child(id)
game.child('players').on('child_changed', function(snapshot) {
    var changed = snapshot.val()
    console.log('The updated value is ' + changed)
})

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [], // define in terms of database
            stage: 0
        }
    }

    render() {
        return (
            <div className='gameScreen'>
                <div className='gameScreenLeft'>
                    <p className='playersLabel'>
                        players:
                    </p>
                    <div className='playersList'>
                        {this.state.players.map((player) =>
                            <li key={player}>{player}</li>
                        )}
                    </div>
                </div>
                <div className='gameScreenRight'>
                    <WaitingRoom />
                </div>
            </div>
        );
    }
}

export default Room;
