import React from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase.js'

function submit() {
    // If URL is plain (no key)
    const games = firebase.database().ref('games')
    const player = {
        liar: false,
        name: document.getElementById('username').value
    }
    const game = {
        category: '',
        ended: false,
        players: [
            player
        ],
        started: false,
        url: '', // ?
        word: ''
    }
    games.push(game)
    // If URL has key appended
}

function EnterUsername() {
    return (
        <div className='container'>
            <label className='usernameLabel' for='username'>username:</label> {/*check for uniqueness, or just add a number to the end if not unique*/}
            <input className='usernameInput' type='text' id='username' />
            <Link to='/room' style={{ textDecoration: 'none' }}><button className='block' onClick={submit} style={{ marginLeft: 'auto', marginRight: 'auto' }}>enter</button></Link>
        </div>
    );
}

export default EnterUsername;
