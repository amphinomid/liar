import React from 'react'
import firebase from '../firebase.js'
var game

class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            players: [],
            stage: 0,
            word: ""
        }
        this.updateStage = this.updateStage.bind(this)
    }

    updateStage() {
        game.child('stage').once('value', stage => {
            game.update({ 'stage': (stage.val() + 1) % 3 })
        })
    }

    // Based off https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/
    async componentDidMount() {
        const id = window.location.pathname.substring(6)
        game = firebase.database().ref('games').child(id)
        const players = game.child('players')
        players.on('child_added', player => {
            let updatedPlayers = this.state.players
            updatedPlayers.push(player.child('name').val())
            this.setState({
                players: updatedPlayers
            })
        });
        const stage = game.child('stage')
        stage.on('value', newStage => {
            this.setState({
                stage: newStage.val()
            })
        })
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
                    {this.state.stage == 0 && // Waiting room
                        <div>
                            <p className='linkLabel'>send your friends this link:</p>
                            <p className='link'>{'liar-ga.me' + window.location.pathname.replace('room', 'enter')}</p>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>start</button>
                        </div>
                    }
                    {this.state.stage == 1 && // Game started
                        <div>
                            <div className='promptLabel'>
                                {/* Get category, word, liar, etc. (API call) */}
                                category is FOOD<br />
                                word is APPLE / you are the LIAR
                            </div>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>end</button>
                        </div>
                    }
                    {this.state.stage == 2 && // Game ended
                        <div>
                            <div className='liarLabel'>
                                {/* Get liar (API call) */}
                                ahaha was the liar!
                            </div>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>play again</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Room;
