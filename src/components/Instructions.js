import React from 'react'

function Instructions() {
    return (
        <div>
            <h1>how to play</h1>
            <p style={{ width: '75vw', fontSize: '1.5rem', textAlign: 'justify', margin: 'auto' }}>
                one word is randomly chosen, and one player is randomly assigned as the "liar". all players are given the word's category, and all but the liar are given the word.
                the specific rules are up to you and your friends (e.g. # of rounds), but typically, players take turns describing the word; the liar tries to fit in, while the others
                try to provide descriptions implying their innocence without revealing enough for the liar to guess the word. at the end, everyone votes on who they think the liar is.
            </p>
            <button class='block' style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>back</button>
        </div>
    );
}

export default Instructions;
