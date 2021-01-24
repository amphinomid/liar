import React from 'react'

function Home() {
    return (
        <div>
            <p style={{ height: '5vh', textAlign: 'right', marginRight: '10px' }}><a href='https://github.com/fibanneacci/liar' target='blank' rel='noreferrer'>built</a> by <a href='https://twitter.com/fibanneacci' target='_blank' rel='noreferrer'>@fibanneacci</a>.</p>
            <div className='container' style={{ height: '90vh' }}>
                <h1 style={{ marginTop: '-10px' }}>who's the liar? 👀</h1>
                <button class='block' style={{ marginTop: '-15px', marginLeft: 'auto', marginRight: 'auto' }}>create room</button>
            </div>
        </div>
    );
}

export default Home;
