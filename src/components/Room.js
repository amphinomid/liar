import React from 'react'
import firebase from '../firebase.js'
var game

// Create wordsets
var wordsets = []

const food = ['apple', 'mango', 'banana', 'pear', 'orange', 'lemon', 'peach', 'persimmon', 'raspberries', 'blackberries', 'blueberries', 'strawberries',
    'grapes', 'bread', 'bun', 'rice', 'spaghetti', 'noodles', 'egg', 'fish', 'steak', 'pork', 'chicken', 'cabbage', 'broccoli',
    'lettuce', 'spinach', 'celery', 'carrot', 'tomato', 'potato', 'onion', 'okra', 'garlic', 'ginger', 'cilantro', 'bell pepper',
    'eggplant', 'bok choy', 'brussel sprouts', 'cucumber', 'zucchini', 'squash', 'maize', 'corn', 'chocolate', 'lollipop', 'gum',
    'pomegranate', 'burger', 'donut', 'pizza', 'yogurt', 'cake', 'mutton', 'oyster', 'crab', 'shrimp', 'lobster', 'tofu', 'sushi', 'bacon', 'soup',
    'pineapple', 'watermelon', 'kiwi', 'avacado', 'papaya', 'coconut', 'guava', 'fig', 'apricot', 'plum', 'date', 'olive']
const drink = ['water', 'milk', 'soda', 'lemonade', 'beer', 'wine', 'juice', 'cider', 'ayran',  
     'coffee', 'tea', 'orange juice', 'apple juice',
     'iced tea', 'hot chocolate', 'smoothie',
    'energy drink', 'coconut water', 'sparkling water', 'chai tea',
    'cocktail', 'margarita', 'mojito', 'piña colada', 'martini',
    'sangria', 'whiskey', 'vodka',
    'rum', 'gin', 'tequila', 'brandy', 'champagne',
    'sake', 'mimosa', 'milkshake', 'lemon water', 'cranberry juice',
    'grapefruit juice', 'peach iced tea', 'iced coffee', 'horchata', 'root beer',
    'kombucha', 'pina colada smoothie', 'peppermint tea', 'matcha latte', 'fruit punch',
    'cider', 'eggnog', 'pumpkin spice latte', 'soy milk', 'almond milk',
    'coconut milk', 'honeydew juice', 'tomato juice', 'cappuccino', 'black tea',
    'white tea', 'herbal tea', 'mulled wine', 'green smoothie', 'iced mocha',
    'watermelon juice', 'guava juice', 'pear juice', 'blueberry smoothie', 'raspberry lemonade',
    'pineapple coconut smoothie', 'peppermint hot chocolate', 'iced matcha latte', 'mango lassi', 'blackcurrant cordial',
    'rosemary lemonade', 'cucumber mint cooler', 'elderflower champagne', 'lavender lemonade', 'buttermilk', 'kiwi smoothie',
    'passion fruit juice', 'celery juice', 'honey ginger tea', 'pomegranate juice', 'apricot nectar',
    'blackcurrant juice', 'lychee lemonade', 'carrot ginger smoothie', 'ginger ale', 'sparkling apple cider',
    'jasmine tea', 'peppermint iced tea', 'rose water lemonade', 'strawberry banana smoothie', 'vanilla latte',
    'watermelon lemonade', 'blackberry mojito', 'lavender white hot chocolate', 'hibiscus iced tea', 'peanut butter banana smoothie',
    'passion fruit iced tea', 'cranberry apple cider', 'butterscotch latte', 'lemon ginger detox water', 'mango pineapple smoothie',
    'chamomile tea', 'raspberry iced tea', 'blueberry lemonade', 'caramel macchiato', 'mocha frappuccino']
const wear = ['hat', 'baseball cap', 'glasses', 'sunglasses', 'scarf', 'T-shirt', 'sweater', 'sweatshirt', 'hoodie', 'jacket', 'coat',
    'cardigan', 'shorts', 'pants', 'jeans', 'skirt', 'dress', 'gloves', 'mittens', 'socks', 'shoes', 'slippers',
  'tie', 'bowtie', 'watch', 'bracelet', 'necklace', 'earrings', 'ring', 'belt',
  'handbag', 'backpack', 'purse', 'umbrella', 'raincoat', 'poncho', 'overalls', 'vest',
  'blouse', 'button-down shirt', 'tank top', 'crop top', 'leggings', 'tights', 'stockings', 'pajamas',
  'robe', 'bathrobe', 'sandals', 'flip-flops', 'boots', 'sneakers', 'high heels', 'loafers',
  'dress shoes', 'slip-on shoes', 'moccasins', 'trench coat', 'peacoat', 'blazer', 'kimono',
  'tie-dye shirt', 'cargo pants', 'capri pants', 'harem pants', 'jumpsuit', 'tuxedo', 'wedding dress',
  'swimsuit', 'swim trunks', 'bikini', 'wetsuit']
const transportation = ['walking', 'bike', 'car', 'subway', 'train', 'plane', 'horse', 'skateboard', 'rollerskates', 'road', 'sidewalk',
    'bridge', 'railroad', 'bike lane', 'highway', 'boat', 'ferry', 'ship', 'scooter', 'bicycle', 'helicopter', 'rickshaw', 'truck', 'steamer', 'tuktuk',
  'bus', 'motorcycle', 'tram', 'cable car', 'trolleybus', 'skis', 'snowboard', 'gondola',
  'segway', 'kick scooter', 'canoe', 'kayak', 'raft', 'hoverboard', 'jet ski', 'yacht',
  'hot air balloon', 'parachute', 'zeppelin', 'funicular', 'cruise ship', 'spaceship', 'rocket', 'camel',
  'elephant', 'sleigh', 'snowmobile', 'tractor', 'bulldozer', 'skateboard', 'rollerblades', 'zebra crossing',
  'escalator', 'moving walkway', 'golf cart', 'hang glider', 'jetski', 'airship', 'conveyor belt',
  'monorail', 'rickshaw', 'tricycle', 'horse-drawn carriage', 'dolphin', 'quad bike', 'camel caravan',
  'rickshaw', 'snowshoes']
const place = ['home', 'grocery store', 'convenience store', 'market', 'school', 'college', 'university', 'library', 'hospital', 'subway station', 'train station', 'airport', 'work', 'restaurant',
    'park', 'forest', 'desert', 'mountain', 'river', 'sauna', 'salon', 'beach', 'karoke room', 'photo booth', 'museum', 'temple', 'garden', 'stadium','music store',
  'movie theater', 'zoo', 'amusement park', 'aquarium', 'shopping mall', 'coffee shop',
  'bookstore', 'art gallery', 'playground', 'gym', 'swimming pool', 'spa', 'hotel',
  'campground', 'barbershop', 'bakery', 'farm', 'vineyard', 'concert hall', 'church',
  'mosque', 'synagogue', 'beauty salon', 'boutique', 'nightclub', 'casino', 'skating rink',
  'ski resort', 'water park', 'bike trail', 'hiking trail', 'botanical garden', 'theme park',
  'arcade', 'fire station', 'police station', 'post office', 'gas station', 'bank',
  'beauty parlor', 'cemetery', 'factory', 'jail', 'laundromat', 'mansion', 'mountain peak',
  'office', 'prison', 'quarry', 'radio station', 'school bus', 'waterfall', 'wind farm',
  'village', 'water tower', 'youth center', 'zebra crossing', 'car wash', 'boxing gym',
  'trampoline park', 'mini golf course', 'indoor playground', 'playhouse', 'golf course',
  'pier', 'ballet studio', 'orchard', 'winery', 'brewery', 'car dealership', 'diner',
  'fireworks show', 'fortress', 'hiking trail', 'ice cream parlor', 'jazz club', 'lighthouse',
  'observatory', 'planetarium', 'race track', 'rehabilitation center', 'sushi bar', 'volcano',
  'waterfront', 'yoga studio']
const anatomy = ['brain', 'head', 'face', 'hair', 'eyebrows', 'eyelashes', 'eyes', 'nose', 'lips', 'teeth', 'tongue', 'ears', 'chin',
    'forehead', 'neck', 'shoulder', 'arm', 'bicep', 'elbow', 'wrist', 'hand', 'finger', 'thumb', 'pinky', 'middle finger',
    'index finger', 'ring finger', 'fingernails', 'lungs', 'heart', 'stomach', 'intestines', 'kidneys', 'leg', 'knee', 'ankle',
    'foot', 'toenail', 'toe','hip', 'thigh', 'calf', 'heel', 'sole', 'arch', 'shin', 'kneecap', 'thigh bone', 'rib', 'spine',
  'vertebra', 'pelvis', 'abdomen', 'navel', 'groin', 'bladder', 'liver', 'pancreas', 'spleen',
  'gallbladder', 'esophagus', 'trachea', 'bronchus', 'diaphragm', 'vocal cords', 'larynx', 'pharynx',
  'salivary glands', 'gums', 'taste buds', 'uvula', 'adrenal glands', 'thyroid', 'parathyroid glands',
  'lymph nodes', 'sweat glands', 'skeletal system', 'muscular system', 'nervous system', 'endocrine system',
  'reproductive system', 'digestive system', 'respiratory system', 'circulatory system', 'urinary system',
  'immune system', 'lymphatic system', 'senses', 'sensory organs', 'blood vessels', 'capillaries', 'veins']
const bug = ['caterpillar', 'butterfly', 'moth', 'cockroach', 'spider', 'ant', 'centipede', 'millipede', 'ladybug', 'grasshopper',
    'bee', 'wasp', 'hornet', 'fly', 'fruit fly', 'segfault','beetle'
  'dragonfly', 'cricket', 'ladybird', 'firefly', 'mosquito', 'tick', 'flea', 'bedbug', 'termite',
  'louse', 'weevil', 'silverfish', 'earwig', 'stick insect', 'praying mantis', 'tarantula', 'scorpion',
  'black widow', 'brown recluse', 'harvestman', 'spider mite', 'aphid', 'cicada', 'katydid', 'leafhopper',
  'mealybug', 'thrips', 'whitefly', 'stonefly', 'mayfly', 'dobsonfly', 'lacewing', 'ground beetle',
  'lady beetle', 'longhorn beetle', 'leaf beetle', 'click beetle', 'tiger beetle', 'water beetle', 'rove beetle',
  'carpet beetle', 'flea beetle', 'cucumber beetle', 'fire beetle', 'deathwatch beetle', 'bark beetle',
  'stink bug', 'shield bug', 'assassin bug', 'water strider', 'land snail', 'slug', 'leech', 'earthworm',
  'millipede', 'centipede', 'woodlouse', 'crustacean', 'isopod', 'pill bug', 'horseshoe crab', 'lobster',
  'crab', 'shrimp', 'prawn', 'barnacle', 'coral', 'jellyfish', 'sea anemone', 'sea cucumber', 'sea urchin',
  'sea star', 'sea sponge', 'sea louse', 'sea spider', 'sea snail', 'plankton', 'krill', 'copepod',
  'rotifer', 'water flea', 'protozoa', 'paramecium', 'amoeba', 'euglena', 'volvox', 'diatom', 'radiolarian',
  'foraminifera', 'tardigrade']
const feeling = ['happy', 'sad', 'angry', 'tired', 'sleepy', 'hungry', 'annoyed', 'scared', 'disgusted', 'surprised', 'shocked', 'bored',
    'horrified', 'relieved', 'satisfied', 'confused', 'nervous', 
  'excited', 'content', 'joyful', 'loved', 'lonely', 'stressed', 'grateful', 'optimistic',
  'hopeful', 'anxious', 'overwhelmed', 'frustrated', 'jealous', 'ashamed', 'guilty', 'embarrassed',
  'disappointed', 'proud', 'inspired', 'awe', 'amazed', 'curious', 'indifferent', 'nostalgic',
  'sympathetic', 'compassionate', 'courageous', 'envious', 'forgiving', 'determined', 'patient',
  'apprehensive', 'elated', 'ecstatic', 'gleeful', 'giddy', 'exhilarated', 'blissful', 'serene',
  'peaceful', 'calm', 'tranquil', 'relaxed', 'refreshed', 'energetic', 'invigorated', 'overjoyed',
  'jubilant', 'grateful', 'amused', 'silly', 'bemused', 'perplexed', 'awestruck', 'startled',
  'fascinated', 'intrigued', 'engrossed', 'impressed', 'satisfied', 'contemplative', 'thoughtful',
  'melancholic', 'dejected', 'despair', 'hopeless', 'gloomy', 'apathetic', 'numb', 'detached',
  'regretful', 'resentful', 'pensive', 'discontent', 'humiliated', 'humiliated', 'defeated',
  'dread', 'apprehensive', 'worried', 'fearful', 'paranoid', 'panicked', 'overwhelmed', 'distressed',
  'uneasy', 'insecure', 'self-conscious', 'shameful']
const kitchen = ['cutting board', 'spoon', 'fork', 'knife', 'chopsticks', 'can opener', 'measuring cup', 'cup', 'glass', 'bowl', 'plate',
    'pan', 'colander', 'spatula', 'whisk', 'blender', 'jar', 'rice cooker', 'toaster', 'toaster oven', 'stove', 
  'mixing bowl', 'measuring spoons', 'oven mitts', 'pot', 'frying pan', 'baking sheet', 'casserole dish',
  'grater', 'peeler', 'strainer', 'tongs', 'ladle', 'kitchen scale', 'mug', 'teapot', 'coffee maker',
  'kettle', 'blender', 'food processor', 'slow cooker', 'microwave', 'refrigerator', 'freezer',
  'dish rack', 'dish soap', 'paper towel holder', 'cutlery organizer', 'apron', 'kitchen timer',
  'food storage containers', 'plastic wrap', 'aluminum foil', 'wax paper', 'parchment paper', 'measuring jug',
  'whisk', 'rolling pin', 'pastry brush', 'oven thermometer', 'thermometer', 'grill', 'grill pan', 'grill brush',
  'ice cube tray', 'cookie sheet', 'cookie cutter', 'muffin tin', 'baking dish', 'baking rack',
  'baking mat', 'canister set', 'utensil holder', 'salt shaker', 'pepper grinder', 'sugar bowl',
  'butter dish', 'juicer', 'egg slicer', 'garlic press', 'citrus zester', 'melon baller',
  'cheese grater', 'cheese slicer', 'salad spinner', 'vegetable peeler', 'corn cob holders',
  'basting brush', 'pizza stone', 'pasta maker', 'meat tenderizer', 'mortar and pestle',
  'pastry board', 'wine opener', 'corkscrew', 'tea infuser', 'sieve', 'ice cream scoop']
const school_subject = ['math', 'science', 'social studies', 'language arts', 'biology', 'chemistry', 'physics', 'earth science', 'computer science',
    'history', 'literature', 'government', 'music', 'art', 'art history', 'algebra', 'geometry', 'trigonometry', 'calculus', 'health', 'law']
const animal = ['dog', 'wolf', 'cat', 'lion', 'tiger', 'leopard', 'cheetah', 'bear', 'deer', 'elk', 'moose', 'bird', 'monkey', 'snake', 'lizard',
    'iguana', 'chameleon', 'salamander', 'gecko', 'dolphin', 'whale', 'shark', 'penguin', 'seal', 'sea lion', 'walrus', 'polar bear', 'fish',
    'shrimp', 'plankton', 'eel', 'stingray', 'giraffe', 'elephant', 'squirrel', 'chipmunk', 'hedgehog', 'porcupine', 'cow', 'pig', 'chicken',
    'sheep', 'kangaroo', 'fox', 'panda', 'mouse', 'rat', 'zebra', 'rhinoceros', 'rabbit', 'eagle', 'frog', 'skunk', 'hippopotamus', 'goat', 'duck', 'horse', 'red panda']
const around_the_house = ['bathroom', 'bedroom', 'kitchen', 'living room', 'basement', 'sunroom']
const outdoors = ['park', 'beach', 'forest', 'mountain', 'lake', 'river', 'waterfall', 'cave', 'campground',
  'picnic area', 'hiking trail', 'biking trail', 'wildlife reserve', 'national park', 'gardens',
  'botanical garden', 'zoological park', 'amusement park', 'playground', 'skate park', 'outdoor gym',
  'sports field', 'stadium', 'tennis court', 'basketball court', 'golf course', 'soccer field',
  'baseball field', 'volleyball court', 'swimming pool', 'water park', 'fishing spot', 'boating area',
  'campfire site', 'barbecue area', 'camping tent', 'hammock', 'canopy', 'treehouse', 'nature trail',
  'wilderness area', 'scenic viewpoint', 'camping stove', 'backpack', 'binoculars', 'compass', 'map',
  'sunscreen', 'insect repellent', 'camping chair', 'camping table', 'camping lantern', 'camping mattress',
  'camping sleeping bag', 'camping hammock', 'camping cookware', 'camping utensils', 'tent stakes',
  'camping tarp', 'headlamp', 'camping pillow', 'fishing rod', 'fishing reel', 'hiking boots', 'hiking socks',
  'backpack rain cover', 'water bottle', 'sun hat', 'sunglasses', 'umbrella', 'kite', 'frisbee', 'skateboard',
  'rollerblades', 'bike', 'scooter', 'kayak', 'canoe', 'paddleboard', 'surfboard', 'skis', 'snowboard',
  'snowshoes', 'campfire cooking grate', 'campfire skewers', 'campfire tripod', 'hammock straps',
  'camping hatchet', 'camping multitool', 'camping first aid kit', 'camping water filter', 'camping stove fuel',
  'camping firewood', 'camping matches', 'camping lighter', 'camping tent footprint', 'camping repair kit',
  'camping trowel', 'camping rope', 'camping carabiners', 'camping dry bag', 'camping bear spray',
  'camping whistle', 'camping survival kit', 'camping emergency blanket', 'camping bug net']
const hobby = ['aquascaping', 'acroyoga', 'blogging', 'interior decorating', 'photography', 'diy', 'crocheting', 'lego', 'building', 'lock picking',
               'homebrewing', 'glassblowing', 'cheesemaking', 'candle making', 'weaving', 'storytelling', 'soapmaking', 'juggling',
               'fingerpainting', 'drawing', 'writing poetry', 'baking', 'metalworking', 'thrifting', 'snowboarding', 'camping', 'painting', 'hiking', 'cooking', 'golfing', 'surfing', 'snorkeling', 'dancing', 'gymnastics', 'yoga', 'ballet']
const technology = ['broadcasting', 'computer science', 'information processing', 'photography', 'telecommunication']
const media = ['painting', 'pottery']
const flowers = ['Daisy','Rose','Iris','Narcissus','Orchid','Tulip','Sunflower','Cyclamen','Carnation','Poppy','Violet','Mimosa','Daffodil','Lily','Hyacinth','Anemone','Gladiolus','Forget-me-not','Bluebell','Bougainvillea','Buttercup','Cactus flower','Camellia','Hibiscus','Honeysuckle','Jasmine','Lavender','Lilac','Lotus','Marigold']
const sports = ['basketball', 'volleyball', 'badminton', 'hockey', 'ice skating', 'tennis', 'cycling', 'surfing', 'fencing', 'boxing', 'soccer', 'cricket', 'table tennis', 'rowing', 'snowboarding', 'baseball', 'bowling', 'skateboarding', 'figure skating', 'golf', 'canoeing', 'horse racing', 'archery', 'gymnastics', 'handball', 'ice hockey', 'bodybuilding', 'recreational fishing', 'karate', 'field hockey', 'lacrosse', 'softball', 'bobsleigh', 'judo', 'rafting', 'artistic swimming', 'olympic weightlifting', 'rhythmic gymnastics', 'racquetball', 'sailing', 'cheerleading', 'football', 'dodgeball', 'pole vault', 'darts', 'croquet', 'polo', 'shot put', 'taekwando', 'wrestling', 'rubgy']
const colors = ['red', 'yellow', 'blue', 'brown', 'orange', 'green', 'violet', 'black','grey','navy blue', 'carnation pink', 'yellow orange', 'blue green', 'red violet', 'red orange', 'yellow green', 'blue violet', 'white', 'violet red',
                'dandelion', 'cerulean', 'apricot', 'scarlet', 'green yellow', 'indigo','gray','pink', 'purple', 'teal', 'magenta', 'turquoise', 'lime', 'olive', 'peach', 'gold', 'silver',
  'beige', 'cream', 'coral', 'lavender', 'maroon', 'navy', 'periwinkle', 'plum', 'ruby', 'sapphire',
  'emerald', 'amethyst', 'topaz', 'jade', 'garnet', 'amber', 'rose', 'copper', 'steel', 'bronze',
  'chocolate', 'ivory', 'charcoal', 'fuchsia', 'lilac', 'salmon', 'aqua', 'taupe', 'khaki', 'mustard',
  'celadon', 'chartreuse', 'citrine', 'cobalt', 'cyan', 'eggplant', 'hazel', 'indigo', 'lemon',
  'mango', 'merlot', 'mint', 'mulberry', 'peacock', 'pearl', 'rose gold', 'rust', 'saffron',
  'seashell', 'sky blue', 'slate', 'tangerine', 'thistle', 'violet', 'watermelon', 'wisteria',
  'zinc', 'agate', 'bisque', 'cinnabar', 'dove gray', 'fawn', 'glaucous', 'lapis lazuli',
  'magnolia', 'obsidian', 'papaya', 'quartz', 'sage', 'tawny', 'vermillion', 'willow']
const weather =['sunny', 'clear','cloudy','overcast','rain','drizzle','hail','humid','snow','thunderstorm','tornado','hurricane','fog','sandstorm']
for (let i = 0; i < food.length; i++) {
    wordsets.push(['food', food[i]])
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
