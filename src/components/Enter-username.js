import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase.js'
var rand = require('randomstring')

function EnterUsername() {
    const hist = useHistory()
    function Submit() {
        const name = document.getElementById('username').value
        // If username is empty or more than 40 characters
        if (name.length > 40 || name.length === 0) {
            document.getElementById('usernameValidationLabel').innerHTML = 'please enter between 1 and 40 characters'
        }
        // If contains non-alphanumeric
        else if (/[^0-9A-Za-z]/.test(name)) {
            document.getElementById('usernameValidationLabel').innerHTML = 'please enter alphanumeric only'
        } else {
            const url = window.location.pathname
            const games = firebase.database().ref('games')
            // If URL doesn't have id, create room
            if (url.length === 6) {
                const id = rand.generate({
                    length: 7,
                    charset: 'hex'
                });
                const wordset = {
                    category: "",
                    word: ""
                }
                const game = {
                    liar: "",
                    players: [
                        name
                    ],
                    stage: 0,
                    wordset: wordset
                }
                games.child(id).set(game)
                hist.replace('/room/' + id + '&name=' + name)
            }
            // If URL has id, join existing room
            else {
                const id = url.substring(7, 14)
                const player = document.getElementById('username').value
                games.child(id).child('players').push(player)
                hist.replace('/room/' + id + '&name=' + name)
            }
        }
    }

    return (
        <div className='container'>
            <label className='usernameLabel' htmlFor='username'>username:</label> {/*check for uniqueness, or just add a number to the end if not unique*/}
            <input className='usernameInput' type='text' id='username' />
            <button className='block' onClick={Submit} style={{ marginLeft: 'auto', marginRight: 'auto' }}>enter</button>
            <p className='usernameValidationLabel' id='usernameValidationLabel'>(alphanumeric only)</p>
        </div>
    );
}

export default EnterUsername;
