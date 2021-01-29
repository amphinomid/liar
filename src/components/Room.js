import React from 'react'
import firebase from '../firebase.js'

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            stage: 0
        }
        this.updateStage = this.updateStage.bind(this)
    }

    updateStage() {
        this.setState({
            stage: (this.state.stage + 1) % 3
        })
    }

    // Based off https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/
    async componentDidMount() {
        const id = window.location.pathname.substring(6)
        const players = firebase.database().ref('games').child(id).child('players')
        players.on('child_added', player => {
            let updatedPlayers = this.state.players
            updatedPlayers.push(player.child('name').val())
            this.setState({
                players: updatedPlayers
            })
        });
    }

    render() {
        let gameDisplay
        let stage = this.state.stage
        if (stage % 3 == 0) {
            { /* Waiting room */ }
            gameDisplay = <div>
                <p className='linkLabel'>send your friends this link:</p>
                <p className='link'>{'liar-ga.me' + window.location.pathname.replace('room', 'enter')}</p>
                <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>start</button>
            </div>
        } else if (stage % 3 == 1) {
            { /* Game started */ }
            gameDisplay = <div>
                <div className='promptLabel'>
                    {/* Get category, word, liar, etc. (API call) */}
                    category is FOOD<br />
                    word is APPLE / you are the LIAR
                </div>
                <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>end</button>
            </div>
        } else {
            { /* Game ended */ }
            gameDisplay = <div>
                <div></div><div></div> { /* Weird bug? */ }
                <div className='liarLabel'>
                    {/* Get liar (API call) */}
                    ahaha was the liar!
                </div>
                <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>play again</button>
            </div>
        }
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
                    {gameDisplay}
                </div>
            </div>
        );
    }
}

export default Room;
