import React from 'react'

function Acknowledgements() {
    return (
        <div>
            <h1>acknowledgements!</h1>
            <p style={{ width: '75vw', fontSize: '1.5rem', textAlign: 'justify', margin: 'auto' }}>
                i did not invent this game! i built it after watching{' '}
                <a href='https://www.youtube.com/watch?v=5MS3iaNmKQE' target='_blank' rel='noreferrer'>red velvet play it on a tv show</a>.<br /><br />
                styling for all buttons done with linus lee's <a href='https://thesephist.github.io/blocks.css/' target='_blank' rel='noreferrer'>blocks.css</a>.
            </p>
            <button class='block' style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>back</button>
        </div>
    );
}

export default Acknowledgements;
