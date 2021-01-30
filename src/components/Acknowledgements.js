import React from 'react'
import { Link } from 'react-router-dom'

function Acknowledgements() {
    return (
        <div>
            <h1>acknowledgements!</h1>
            <p style={{ width: '75vw', fontSize: '1.5rem', textAlign: 'justify', margin: 'auto' }}>
                i didn't invent this game! i built it after watching{' '}
                <a href='https://www.youtube.com/watch?v=5MS3iaNmKQE' target='_blank' rel='noreferrer'>a video of red velvet playing it</a>.<br /><br />
                i also followed a few very helpful tutorials along the way: <a href='https://css-tricks.com/intro-firebase-react/' target='_blank' rel='noreferrer'>this</a>, <a href='https://www.developintelligence.com/blog/2017/04/building-a-realtime-chess-game-with-react-and-firebase/' target='_blank' rel='noreferrer'>this</a>, <a href='https://medium.com/@hasangi/writing-deleting-and-updating-data-in-firebase-realtime-database-with-javascript-f26113ec8c93' target='_blank' rel='noreferrer'>this</a>, and <a href='https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/' target='_blank' rel='noreferrer'>this</a>.<br /><br />
                styling for all buttons done with linus lee's <a href='https://thesephist.github.io/blocks.css/' target='_blank' rel='noreferrer'>blocks.css</a>, game room ids generated with <a href='https://www.npmjs.com/package/randomstring' target='_blank' rel='noreferrer'>node-randomstring</a>.
            </p>
            <Link to='/' style={{ textDecoration: 'none' }}><button className='block' style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>back</button></Link>
        </div>
    );
}

export default Acknowledgements;
