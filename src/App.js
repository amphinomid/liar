import Home from './components/Home'
import EnterUsername from './components/Enter-username'
import GameRoom from './components/Game-room'
import './components/Components.css'

function App() {
  return (
    <div>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>liar game</title>
        <link rel='stylesheet' href='https://unpkg.com/blocks.css/dist/blocks.min.css' />
      </head>
      <Home />
    </div>
  );
}

export default App;
