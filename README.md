# who's the liar? 🤥
A web-based multiplayer game

### About & Acknowledgements
I decided to make this after seeing a [video](https://youtu.be/5MS3iaNmKQE?t=401) of a Kpop group playing it (lol). It's built with [Firebase](https://firebase.google.com/docs) and [React](https://create-react-app.dev) (I wasn't super familiar, so I followed a [few](https://css-tricks.com/intro-firebase-react/) [really](https://www.developintelligence.com/blog/2017/04/building-a-realtime-chess-game-with-react-and-firebase/) [nice](https://medium.com/@hasangi/writing-deleting-and-updating-data-in-firebase-realtime-database-with-javascript-f26113ec8c93) [tutorials](https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/)). Styling for buttons was done using [thesephist](https://github.com/thesephist)'s [blocks.css](https://github.com/thesephist/blocks.css), and game IDs were generated with [node-randomstring](https://www.npmjs.com/package/randomstring). Usernames are the only player-specific data stored in the database. I did not enable Firebase's Google Analytics for this project.

### Usage
You can visit [liar-ga.me](https://liar-ga.me) to play. Instructions are [here](https://liar-ga.me/instructions). (Would recommend playing over video call with friends)

### Contributing
As I mentioned, I don't have a ton of experience building Firebase-React apps, so I'm not sure if everything I did was most efficient / best practice / most secure. Also, there are a lot of different scenarios this app doesn't handle gracefully (e.g. joining / leaving mid-game). If you see anything you want to improve, feel free to report a bug in the Issues section or make a PR!

**tldr &#8212; this project is open to contributions and feedback :)**
