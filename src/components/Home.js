import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='extLinks'>
                <Link to='/instructions' style={{ textDecoration: 'none' }}><p className='howToPlayLink' style={{ marginLeft: '15px' }}><u>how to play</u></p></Link>
                <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '15px' }}>
                    <p />
                    <Link to='/acknowledgements' style={{ textDecoration: 'none' }}><p className='acknowledgementsLink'><u>about / acknowledgements</u></p></Link>{' '}
                </div>
            </div>
            <div className='container' style={{ height: '90vh' }}>
                <h1 style={{ marginTop: '-20px' }}>who's the liar? 🤥</h1>
                <Link to='/enter' style={{ textDecoration: 'none' }}><button className='block' style={{ marginTop: '-15px', marginLeft: 'auto', marginRight: 'auto' }}>create room</button></Link>
            </div>
            <div className='extLinks'>
                <a href="https://www.producthunt.com/posts/who-s-the-liar?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-who-s-the-liar" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=282827&theme=light" alt="who's the liar? - Play this simple web-based game with your friends! | Product Hunt" width="250" height="54" style={{ marginLeft: '15px', marginTop: '-25px' }} /></a>
                <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '15px' }}>
                    <a href='https://github.com/fibanneacci/liar' target='blank' rel='noreferrer'>source code</a> (initial work by <a href='https://anli.io' target='_blank' rel='noreferrer'>anne</a>, see <a href='https://github.com/fibanneacci/liar/graphs/contributors' target="_blank" rel='noreferrer'>contributors</a>)
                </div>
            </div>
        </div>
    );
}

export default Home;
