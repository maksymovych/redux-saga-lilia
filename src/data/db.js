const faker = require('faker');

module.exports = () => {
  const posts = [
    {
      id: 'BAcyDyQwcXX',
      caption: 'Lunch #hamont',
      likes: 56,
      code: '1161022966406956503',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: 'BAcJeJrQca9',
      caption: 'Snow! ⛄️🌨❄️ #lifewithsnickers',
      likes: 59,
      code: '1160844458347054781',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: 'BAF_KY4wcRY',
      caption:
        'Cleaned my office and mounted my recording gear overhead. Stoked for 2016!',
      likes: 79,
      code: '1154606670337393752',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: 'BAPIPRjQce9',
      caption: 'Making baby pancakes for one early rising baby. ☕️🍴',
      likes: 47,
      code: '1157179863266871229',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-hZh6IQcfN',
      caption:
        "New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
      likes: 66,
      code: '1126293663140399053',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-B3eiIwcYV',
      caption: 'Tacos for breakfast. I love you Austin. 🇺🇸',
      likes: 33,
      code: '1117418173361145365',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: 'BAhvZrRwcfu',
      caption:
        "Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
      likes: 30,
      code: '1162418651480049646',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: 'BAAJqbOQcW5',
      caption: "Brunchin'",
      likes: 40,
      code: '1152964002473690553',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_4jHytwcUA',
      caption:
        '2015 can be summed up with one baby and a many lines of id. And sometimes a coding baby. 👶🏼⌨️',
      likes: 62,
      code: '1150824171912152320',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_zbaOlQcbn',
      caption: 'Lekker Chocoladeletter',
      likes: 52,
      code: '1149382879529256679',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_rmvQfQce8',
      caption:
        'Just discovered the #hamont farmers market has a new ramen place! 🍜',
      likes: 35,
      code: '1147180903383025596',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_ep9kiQcVy',
      caption: '⛄️',
      likes: 64,
      code: '1143535906423162226',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_XpJcrwcSn',
      caption: '6 page spread on flexbox in this months netmag!',
      likes: 74,
      code: '1141561999742846119',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_KnU7MwceA',
      caption:
        'Hanging out in my office waiting for 5:00 beers to come around.',
      likes: 54,
      code: '1137894817632733056',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_HMejJQcY5',
      caption: "Today I learned that a long pull espresso is called a 'lungo'",
      likes: 18,
      code: '1136932306813044281',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_Fq2zmwcaz',
      caption:
        'Awesome hand lettered gift from @eunibae and the HackerYou crew.',
      likes: 48,
      code: '1136502965197194931',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '_A2r0aQcfD',
      caption:
        'Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!',
      likes: 57,
      code: '1135147611821557699',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-1rhFawccs',
      caption: 'Some major audio upgrades coming to my next videos 😍',
      likes: 39,
      code: '1132002270913873708',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-pjx-gQcVi',
      caption: 'My baby and me. Thanks to @bearandsparrow for this one.',
      likes: 81,
      code: '1128590547628442978',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-oTZ0zQcWt',
      caption: "It's too early. Send coffee.",
      likes: 81,
      code: '1128237044221461933',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-mxKQoQcQh',
      caption: 'They both have figured it out. #lifewithsnickers',
      likes: 47,
      code: '1127804966031967265',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-fasqlQceO',
      caption:
        'Kaitlin decorated the house for the Christmas. So gezellig! #casabos',
      likes: 46,
      code: '1125735850454402958',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-VBgtGQcSf',
      caption: 'Trying the new Hamilton Brewery beer. Big fan.',
      likes: 27,
      code: '1122810327591928991',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
    {
      id: '-FpTyHQcau',
      caption:
        "I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
      likes: 82,
      code: '1118481761857291950',
      display_src: `https://picsum.photos/400/400/?image=${Math.floor(
        Math.random() * 85
      )}`,
      username: 'nikoleFan',
      createdOn: 'September 14, 2016',
      avatar: faker.image.avatar(),
    },
  ];

  const comments = [
    {
      text: 'Totally need to try this.',
      user: 'heavymetaladam',
      postId: 'BAhvZrRwcfu',
    },
    {
      text: 'Wes. WE should have lunch.',
      user: 'jdaveknox',
      postId: 'BAcyDyQwcXX',
    },
    { text: '#adults', user: 'jdaveknox', postId: 'BAcyDyQwcXX' },
    { text: '@jdaveknox yes!', user: 'wesbos', postId: 'BAcyDyQwcXX' },
    {
      text: '😍 love Hamilton!',
      user: 'willowtreemegs',
      postId: 'BAcyDyQwcXX',
    },
    {
      text: "Those are cute! They're like silver dollar pancakes.",
      user: 'rrsimonsen',
      postId: 'BAPIPRjQce9',
    },
    {
      text:
        "I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! 😝😛😝♥️",
      user: 'terzisn',
      postId: 'BAPIPRjQce9',
    },
    {
      text: '... and apparently growing baby. 👀. Yum.',
      user: 'henrihelvetica',
      postId: 'BAPIPRjQce9',
    },
    {
      text: '@wesbos 👍 my daughter is a pancake eating machine!',
      user: 'brentoage',
      postId: 'BAPIPRjQce9',
    },
    { text: 'Nice stove!', user: 'haaps', postId: 'BAPIPRjQce9' },
    {
      text:
        'Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?',
      user: 'gobananna',
      postId: 'BAPIPRjQce9',
    },
    {
      text:
        '@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.',
      user: 'wesbos',
      postId: 'BAPIPRjQce9',
    },
    {
      text: "@haaps thanks! It's a Jenn air - so nice to cool with!",
      user: 'wesbos',
      postId: 'BAPIPRjQce9',
    },
    {
      text:
        'Where would you go and for how long, if you had location freedom? - Greg 🌎',
      user: 'world_greg',
      postId: 'BAPIPRjQce9',
    },
    {
      text:
        "Looking great Wes! I'd like to see the other side of the room too.",
      user: 'axcdnt',
      postId: 'BAF_KY4wcRY',
    },
    {
      text:
        "I've never caught your podcast. Have one right? Btw - they don't have a Canary pillow? 😝",
      user: 'henrihelvetica',
      postId: 'BAF_KY4wcRY',
    },
    {
      text: 'Great way to start the year.',
      user: 'pmgllc',
      postId: 'BAF_KY4wcRY',
    },
    {
      text: 'Are there 4k monitors?',
      user: 'alexbaumgertner',
      postId: 'BAF_KY4wcRY',
    },
    {
      text:
        "@axcdnt that is where I put all the junk. I'll have to clean that side too @henrihelvetica no podcast yet! @pmgllc ohh yeah! @alexbaumgertner yep - the main one is 4K - I'm loving it",
      user: 'wesbos',
      postId: 'BAF_KY4wcRY',
    },
    {
      text: 'That chrome pillow. 😉',
      user: 'imagesofthisandthat',
      postId: 'BAF_KY4wcRY',
    },
    {
      text:
        '@wesbos is that the Dell 4k? The MacBook Pro powers it well? I also have a Retina™ / x1 setup as well. Very handy.',
      user: 'henrihelvetica',
      postId: 'BAF_KY4wcRY',
    },
    { text: '#minimalsetups', user: 'wesbos', postId: 'BAF_KY4wcRY' },
    {
      text: 'that is the sound of success!',
      user: 'mdxprograms',
      postId: '_4jHytwcUA',
    },
    {
      text: 'Did she get to eat her letter?',
      user: 'pathiebert',
      postId: '_zbaOlQcbn',
    },
    {
      text:
        'Nope @pathiebert! She has too much teeth now (8) so that would definitely be her first cavity 😉',
      user: 'kaitbos',
      postId: '_zbaOlQcbn',
    },
    { text: 'A+', user: 'mrjoedee', postId: '_rmvQfQce8' },
    {
      text: 'I recently went to a ramen place in Philly. So amazing!',
      user: 'jrtashjian',
      postId: '_rmvQfQce8',
    },
    {
      text: 'All bundled up!  Where ya goin?',
      user: 'sophie_and_sadie',
      postId: '_ep9kiQcVy',
    },
    {
      text: "Super congrats! That's wicked cool and looks great.",
      user: 'pmgllc',
      postId: '_XpJcrwcSn',
    },
    {
      text:
        'real live paper magazine? woah haha. flex box is awesome though, could rage quit without it',
      user: 'tjholowaychuk2',
      postId: '_XpJcrwcSn',
    },
    {
      text: '@tjholowaychuk2 haha yes! Old school stylez!',
      user: 'wesbos',
      postId: '_XpJcrwcSn',
    },
    { text: '👌', user: 't_volpe', postId: '_HMejJQcY5' },
    {
      text: 'Nice shot, mister!',
      user: 'imagesofthisandthat',
      postId: '_HMejJQcY5',
    },
    { text: '😍', user: 'melsariffodeen', postId: '_Fq2zmwcaz' },
    { text: 'Very cool!', user: 'ka11away', postId: '_Fq2zmwcaz' },
    { text: 'Uhu!', user: 'lucascaixeta', postId: '_A2r0aQcfD' },
    {
      text: "What's your lighting source?",
      user: 'seth_mcleod',
      postId: '1rhFawccs',
    },
    {
      text:
        'And what are you using for XLR mix adapter? I found a big price jump between $55 range and $170 range.',
      user: 'pmgllc',
      postId: '1rhFawccs',
    },
    {
      text: 'I still need a desk boom for mine mic. Nice upgrades',
      user: 'stolinski',
      postId: '1rhFawccs',
    },
    {
      text: "Love the coat! Where's it from? Lol",
      user: '_lindersss',
      postId: 'oTZ0zQcWt',
    },
    {
      text: 'What do we gotta do to get some :)? @wesbos',
      user: 'jonasbad',
      postId: 'hZh6IQcfN',
    },
    {
      text:
        'Might drop by today - real quick. Trade you an illegal pin for these? Lol. @wesbos',
      user: 'henrihelvetica',
      postId: 'hZh6IQcfN',
    },
    {
      text: "I'm with @jonasbad on this. What we gotta do? :D",
      user: 'datamoshr',
      postId: 'hZh6IQcfN',
    },
    {
      text: "@jonasbad @datamoshr I'll post them up on my blog soon!",
      user: 'wesbos',
      postId: 'hZh6IQcfN',
    },
    { text: 'Want', user: 'kamuelafranco', postId: 'hZh6IQcfN' },
    { text: 'want!', user: 'josemanuelxyz', postId: 'hZh6IQcfN' },
    { text: '#Top', user: 'gabrielvieira.me', postId: 'hZh6IQcfN' },
    {
      text: "Where's lux at? 💤?",
      user: 'henrihelvetica',
      postId: 'fasqlQceO',
    },
    {
      text:
        'Love this house during the holidays! And all other times of the year...',
      user: 'danielleplas',
      postId: 'fasqlQceO',
    },
    { text: '@dogsandbrew', user: 'likea_bos', postId: 'VBgtGQcSf' },
    { text: 'Next on my list!', user: 'tomwalsham', postId: 'VBgtGQcSf' },
    {
      text: 'Is that from collective arts ?',
      user: 'trevorb_91',
      postId: 'VBgtGQcSf',
    },
    {
      text: '@kaitbos  that vest!!! 😍',
      user: 'courtneyeveline',
      postId: 'FpTyHQcau',
    },
    {
      text: 'I just love her! @kaitbos',
      user: 'kalibrix',
      postId: 'FpTyHQcau',
    },
    {
      text:
        "@courtneyeveline I know! My friend gave it to her and I wanted a matching one but only Lux can pull it off. She's so fancy 😉",
      user: 'kaitbos',
      postId: 'FpTyHQcau',
    },
    {
      text: 'Char has that vest!!! Super cute!',
      user: 'jennlensink',
      postId: 'FpTyHQcau',
    },
    {
      text: "You'll have to meet her soon @kalibrix!!",
      user: 'kaitbos',
      postId: 'FpTyHQcau',
    },
    {
      text: 'Haha @kaitbos so true, babies these days are sooo stylish. 😎',
      user: 'courtneyeveline',
      postId: 'FpTyHQcau',
    },
    { text: 'JavaScript 😄😆🙋', user: 'lucascaixeta', postId: 'FpTyHQcau' },
    {
      text: 'That hoodie is amazing! Where did you get it?',
      user: 'br11x',
      postId: 'FpTyHQcau',
    },
    {
      text:
        "@br11x I did a teespring a few months ago - maybe I'll do another one soon",
      user: 'wesbos',
      postId: 'FpTyHQcau',
    },
    {
      text:
        "If you get in the mood for authentic Italian pizza, check out @backspaceaustin - it's👌🏻",
      user: 'dessie.ann',
      postId: 'B3eiIwcYV',
    },
    { text: '😱 jealous', user: 'jenngbrewer', postId: 'B3eiIwcYV' },
  ];

  return { posts, comments };
};
