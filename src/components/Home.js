import React from 'react'

function Home() {
    return (
        <div>
            <div className='topLinks'>
                <p className='howToPlayLink' style={{ marginLeft: '15px' }}><u>how to play</u></p>
                <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '10px' }}>
                    <p />
                    <a href='https://github.com/fibanneacci/liar' target='blank' rel='noreferrer'>built</a> by <a href='https://anli.io' target='_blank' rel='noreferrer'>anne</a>.{' '}
                    <p className='acknowledgementsLink'><u>acknowledgements!</u></p>
                </div>
            </div>
            <div className='container' style={{ height: '90vh' }}>
                <h1 style={{ marginTop: '-20px' }}>who's the liar? 👀</h1>
                <button className='block' style={{ marginTop: '-15px', marginLeft: 'auto', marginRight: 'auto' }}>create room</button>
            </div>
        </div>
    );
}

export default Home;
