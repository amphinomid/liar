import React from 'react'

function Acknowledgements() {
    return (
        <div>
            <h1>acknowledgements!</h1>
            <p style={{ width: '75vw', fontSize: '1.5rem', textAlign: 'justify', margin: 'auto' }}>
                i did not invent this game! i built it after seeing{' '}
                <a href='https://www.youtube.com/watch?v=5MS3iaNmKQE' target='_blank' rel='noreferrer'>red velvet play it on a tv show</a>.
            </p>
            <button class='block' style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>back</button>
        </div>
    );
}

export default Acknowledgements;
