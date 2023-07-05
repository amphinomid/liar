import React from 'react'
import firebase from '../firebase.js'
var game

// Create wordsets
var wordsets = []

const food = ['apple', 'mango', 'banana', 'pear', 'orange', 'lemon', 'peach', 'persimmon', 'raspberries', 'blackberries', 'blueberries', 'strawberries',
    'grapes', 'bread', 'bun', 'rice', 'spaghetti', 'noodles', 'egg', 'fish', 'steak', 'pork', 'chicken', 'chocolate', 'lollipop', 'gum',
    'pomegranate', 'burger', 'donut', 'pizza', 'yogurt', 'cake', 'mutton', 'oyster', 'crab', 'shrimp', 'lobster', 'tofu', 'sushi', 'bacon', 'soup']
const vegetable = ['cabbage', 'broccoli',
    'lettuce', 'spinach', 'celery', 'carrot', 'tomato', 'potato', 'onion', 'okra', 'garlic', 'ginger', 'cilantro', 'bell pepper',
    'eggplant', 'bok choy', 'brussel sprouts', 'cucumber', 'zucchini', 'squash', 'maize', 'corn']
const drink = ['water', 'milk', 'soda', 'lemonade', 'beer', 'wine', 'juice', 'cider', 'ayran']
const wear = ['hat', 'baseball cap', 'glasses', 'sunglasses', 'scarf', 'T-shirt', 'sweater', 'sweatshirt', 'hoodie', 'jacket', 'coat',
    'cardigan', 'shorts', 'pants', 'jeans', 'skirt', 'dress', 'gloves', 'mittens', 'socks', 'shoes', 'slippers']
const transportation = ['walking', 'bike', 'car', 'subway', 'train', 'plane', 'horse', 'skateboard', 'rollerskates', 'road', 'sidewalk',
    'bridge', 'railroad', 'bike lane', 'highway', 'boat', 'ferry', 'ship', 'scooter', 'bicycle', 'helicopter', 'rickshaw', 'truck', 'steamer', 'tuktuk']
const place = ['home', 'grocery store', 'convenience store', 'market', 'school', 'college', 'university', 'library', 'hospital', 'subway station', 'train station', 'airport', 'work', 'restaurant',
    'park', 'forest', 'desert', 'mountain', 'river', 'sauna', 'salon', 'beach', 'karoke room', 'photo booth', 'museum', 'temple', 'garden', 'stadium', 'music store']
const anatomy = ['brain', 'head', 'face', 'hair', 'eyebrows', 'eyelashes', 'eyes', 'nose', 'lips', 'teeth', 'tongue', 'ears', 'chin',
    'forehead', 'neck', 'shoulder', 'arm', 'bicep', 'elbow', 'wrist', 'hand', 'finger', 'thumb', 'pinky', 'middle finger',
    'index finger', 'ring finger', 'fingernails', 'lungs', 'heart', 'stomach', 'intestines', 'kidneys', 'leg', 'knee', 'ankle',
    'foot', 'toenail', 'toe']
const bug = ['caterpillar', 'butterfly', 'moth', 'cockroach', 'spider', 'ant', 'centipede', 'millipede', 'ladybug', 'grasshopper',
    'bee', 'wasp', 'hornet', 'fly', 'fruit fly', 'segfault', 'beetle']
const feeling = ['happy', 'sad', 'angry', 'tired', 'sleepy', 'hungry', 'annoyed', 'scared', 'disgusted', 'surprised', 'shocked', 'bored',
    'horrified', 'relieved', 'satisfied', 'confused', 'nervous']
const kitchen = ['cutting board', 'spoon', 'fork', 'knife', 'chopsticks', 'can opener', 'measuring cup', 'cup', 'glass', 'bowl', 'plate',
    'pan', 'colander', 'spatula', 'whisk', 'blender', 'jar', 'rice cooker', 'toaster', 'toaster oven', 'stove']
const school_subject = ['math', 'science', 'social studies', 'language arts', 'biology', 'chemistry', 'physics', 'earth science', 'computer science',
    'history', 'literature', 'government', 'music', 'art', 'art history', 'algebra', 'geometry', 'trigonometry', 'calculus', 'health', 'law']
const animal = ['dog', 'wolf', 'cat', 'lion', 'tiger', 'leopard', 'cheetah', 'bear', 'deer', 'elk', 'moose', 'bird', 'monkey', 'snake', 'lizard',
    'iguana', 'chameleon', 'salamander', 'gecko', 'dolphin', 'whale', 'shark', 'penguin', 'seal', 'sea lion', 'walrus', 'polar bear', 'fish',
    'shrimp', 'plankton', 'eel', 'stingray', 'giraffe', 'elephant', 'squirrel', 'chipmunk', 'hedgehog', 'porcupine', 'cow', 'pig', 'chicken',
    'sheep', 'kangaroo', 'fox', 'panda', 'mouse', 'rat', 'zebra', 'rhinoceros', 'rabbit', 'eagle', 'frog', 'skunk', 'hippopotamus', 'goat', 'duck', 'horse', 'red panda']
const around_the_house = ['bathroom', 'bedroom', 'kitchen', 'living room', 'basement', 'sunroom']
const outdoors = []
const hobby = ['aquascaping', 'acroyoga', 'blogging', 'interior decorating', 'photography', 'diy', 'crocheting', 'lego', 'building', 'lock picking',
    'homebrewing', 'glassblowing', 'cheesemaking', 'candle making', 'weaving', 'storytelling', 'soapmaking', 'juggling',
    'fingerpainting', 'drawing', 'writing poetry', 'baking', 'metalworking', 'thrifting', 'snowboarding', 'camping', 'painting', 'hiking', 'cooking', 'golfing', 'surfing', 'snorkeling', 'dancing', 'gymnastics', 'yoga', 'ballet']
const technology = ['broadcasting', 'computer science', 'information processing', 'photography', 'telecommunication']
const media = ['painting', 'pottery']
const flowers = ['Daisy', 'Rose', 'Iris', 'Narcissus', 'Orchid', 'Tulip', 'Sunflower', 'Cyclamen', 'Carnation', 'Poppy', 'Violet', 'Mimosa', 'Daffodil', 'Lily', 'Hyacinth', 'Anemone', 'Gladiolus', 'Forget-me-not', 'Bluebell', 'Bougainvillea', 'Buttercup', 'Cactus flower', 'Camellia', 'Hibiscus', 'Honeysuckle', 'Jasmine', 'Lavender', 'Lilac', 'Lotus', 'Marigold']
const sports = ['basketball', 'volleyball', 'badminton', 'hockey', 'ice skating', 'tennis', 'cycling', 'surfing', 'fencing', 'boxing', 'soccer', 'cricket', 'table tennis', 'rowing', 'snowboarding', 'baseball', 'bowling', 'skateboarding', 'figure skating', 'golf', 'canoeing', 'horse racing', 'archery', 'gymnastics', 'handball', 'ice hockey', 'bodybuilding', 'recreational fishing', 'karate', 'field hockey', 'lacrosse', 'softball', 'bobsleigh', 'judo', 'rafting', 'artistic swimming', 'olympic weightlifting', 'rhythmic gymnastics', 'racquetball', 'sailing', 'cheerleading', 'football', 'dodgeball', 'pole vault', 'darts', 'croquet', 'polo', 'shot put', 'taekwando', 'wrestling', 'rubgy']
const colors = ['red', 'yellow', 'blue', 'brown', 'orange', 'green', 'violet', 'black', 'grey', 'navy blue', 'carnation pink', 'yellow orange', 'blue green', 'red violet', 'red orange', 'yellow green', 'blue violet', 'white', 'violet red', 'dandelion', 'cerulean', 'apricot', 'scarlet', 'green yellow', 'indigo', 'gray']
const weather = ['sunny', 'clear', 'cloudy', 'overcast', 'rain', 'drizzle', 'hail', 'humid', 'snow', 'thunderstorm', 'tornado', 'hurricane', 'fog', 'sandstorm']
for (let i = 0; i < food.length; i++) {
    wordsets.push(['food', food[i]])
}
for (let i = 0; i < vegetable.length; i++){
    wordsets.push(['vegetable', vegetable[i]])
}
for (let i = 0; i < drink.length; i++) {
    wordsets.push(['drink', drink[i]])
}
for (let i = 1; i < wear.length; i++) {
    wordsets.push(['things people wear', wear[i]])
}
for (let i = 1; i < transportation.length; i++) {
    wordsets.push(['transportation', transportation[i]])
}
for (let i = 1; i < place.length; i++) {
    wordsets.push(['place', place[i]])
}
for (let i = 1; i < anatomy.length; i++) {
    wordsets.push(['anatomy', anatomy[i]])
}
for (let i = 1; i < bug.length; i++) {
    wordsets.push(['bug', bug[i]])
}
for (let i = 1; i < feeling.length; i++) {
    wordsets.push(['feeling', feeling[i]])
}
for (let i = 1; i < kitchen.length; i++) {
    wordsets.push(['in the kitchen', kitchen[i]])
}
for (let i = 1; i < school_subject.length; i++) {
    wordsets.push(['school subject', school_subject[i]])
}
for (let i = 1; i < animal.length; i++) {
    wordsets.push(['animal', animal[i]])
}
/*for (let i = 1; i < kpop.length; i++) {
    wordsets.push(['K-POP', kpop[i]])
}*/
for (let i = 1; i < around_the_house.length; i++) {
    wordsets.push(['around the house', around_the_house[i]])
}
for (let i = 1; i < outdoors.length; i++) {
    wordsets.push(['outdoors', outdoors[i]])
}
for (let i = 1; i < hobby.length; i++) {
    wordsets.push(['hobby', hobby[i]])
}
for (let i = 1; i < technology.length; i++) {
    wordsets.push(['technology', technology[i]])
}
for (let i = 1; i < media.length; i++) {
    wordsets.push(['media', media[i]])
}
for (let i = 1; i < media.length; i++) {
    wordsets.push(['flowers', flowers[i]])
}
for (let i = 1; i < sports.length; i++) {
    wordsets.push(['sports', sports[i]])
}
for (let i = 1; i < colors.length; i++) {
    wordsets.push(['colors', colors[i]])
}
for (let i = 1; i < weather.length; i++) {
    wordsets.push(['weather', weather[i]])
}
class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            stage: 0,
            category: "",
            word: "",
            liar: ""
        }
        this.updateStage = this.updateStage.bind(this)
    }

    updateStage() {
        game.child('stage').once('value', stage => {
            game.update({ 'stage': (stage.val() + 1) % 3 })
        })
    }

    // Based off https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/
    async componentDidMount() {
        const id = window.location.pathname.substring(6, 13)
        game = firebase.database().ref('games').child(id)
        const players = game.child('players')
        players.on('child_added', player => {
            let updatedPlayers = this.state.players
            updatedPlayers.push(player.val())
            this.setState({
                players: updatedPlayers
            })
        });
        const stage = game.child('stage')
        stage.on('value', stage => {
            this.setState({
                stage: stage.val()
            })
            if (stage.val() === 0) {
                // Determine wordset for current round
                let wordsetTemp = wordsets[Math.floor(Math.random() * wordsets.length)]
                let wordset = {
                    category: wordsetTemp[0],
                    word: wordsetTemp[1]
                }
                game.update({ 'wordset': wordset })
                // Determine liar for current round
                let liar = this.state.players[Math.floor(Math.random() * this.state.players.length)]
                game.update({ 'liar': liar })
            }
        })
        const wordset = game.child('wordset')
        wordset.on('value', wordset => {
            this.setState({
                category: wordset.child('category').val(),
                word: wordset.child('word').val()
            })
        })
        const liar = game.child('liar')
        liar.on('value', liar => {
            this.setState({
                liar: liar.val()
            })
        })
    }

    render() {
        return (
            <div className='gameScreen'>
                <div className='gameScreenLeft'>
                    <p className='playersLabel'>
                        players:
                    </p>
                    <div className='playersList'>
                        {this.state.players.map((player) =>
                            <li key={player}>{player}</li>
                        )}
                    </div>
                </div>
                <div className='gameScreenRight'>
                    {this.state.stage === 0 && // Waiting room
                        <div>
                            <p className='linkLabel'>send your friends this link:</p>
                            <p className='link'>{'liar-ga.me' + window.location.pathname.replace('room', 'enter').substring(0, 14)}</p>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>start</button>
                        </div>
                    }
                    {this.state.stage === 1 && // Game started
                        <div>
                            <div className='promptLabel'>
                                category is {this.state.category}<br />
                                {window.location.pathname.substring(19) !== this.state.liar &&
                                    <div>word is {this.state.word}</div>
                                }
                                {window.location.pathname.substring(19) === this.state.liar &&
                                    <div>you are the liar</div>
                                }
                            </div>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>end</button>
                        </div>
                    }
                    {this.state.stage === 2 && // Game ended
                        <div>
                            <div className='liarLabel'>
                                {this.state.liar} was the liar!
                            </div>
                            <button className='block' onClick={this.updateStage} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>play again</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Room;
