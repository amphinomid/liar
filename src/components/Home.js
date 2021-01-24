import React from 'react'

function Home() {
    return (
        <div>
            <div className='topLinks'>
                <p className='howToPlayLink' style={{ marginLeft: '15px' }}><u>how to play</u></p>
                <p style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '10px' }}>
                    <a href='https://github.com/fibanneacci/liar' target='blank' rel='noreferrer'>built</a> by <a href='https://twitter.com/fibanneacci' target='_blank' rel='noreferrer'>@fibanneacci</a>.{' '}
                    <p className='acknowledgementsLink'><u>acknowledgements!</u></p>
                </p>
            </div>
            <div className='container' style={{ height: '90vh' }}>
                <h1 style={{ marginTop: '-20px' }}>who's the liar? 👀</h1>
                <button class='block' style={{ marginTop: '-15px', marginLeft: 'auto', marginRight: 'auto' }}>create room</button>
            </div>
        </div>
    );
}

export default Home;
