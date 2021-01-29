import React from 'react'
import firebase from '../firebase.js'
import WaitingRoom from './Waiting-room'
import GameStarted from './Game-started'
import GameEnded from './Game-ended'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            stage: 0
        }
    }

    // Based off https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/
    async componentDidMount() {
        const id = window.location.pathname.substring(6)
        const game = firebase.database().ref('games').child(id)
        game.child('players').once('value', snapshot => {
            snapshot.forEach((player) => {
                var updatedPlayers = this.state.players
                updatedPlayers.push(player.child('name').val())
                this.setState({
                    players: updatedPlayers
                })
            })
        })
    }

    // game.child('players').on('child_changed', function (snapshot) {
    //     var changed = snapshot.val()
    //     console.log('The updated value is ' + changed)
    // })

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
