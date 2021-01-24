import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
    return (
        <div>
            <h1>how to play</h1>
            <p style={{ width: '75vw', fontSize: '1.5rem', textAlign: 'justify', margin: 'auto' }}>
                one word is randomly chosen, and one player is randomly assigned as the "liar". all players are given the chosen word's category, and all but the liar are given the word.
                the specific rules are up to you and your friends (e.g. # of rounds), but a common way to play involves taking turns describing the word, during which non-liars try to
                provide info to prove their innocence without revealing enough for the liar to guess the word, while the liar tries to fit in. at the end, everyone votes on who they think the liar is.
            </p>
            <Link to='/' style={{ textDecoration: 'none' }}><button className='block' style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>back</button></Link>
        </div>
    );
}

export default Instructions;
