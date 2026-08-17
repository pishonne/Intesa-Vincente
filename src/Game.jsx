import { useState, useEffect } from "react"
import GettingReady from "./GettingReady";
import Result from "./Result";


const PAROLE = [
  // --- Oggetti ---
  "ombrello",
  "spazzolino",
  "cuscino",
  "tappeto",
  "sveglia",
  "coperta",
  "valigia",
  "forbici",
  "occhiali",
  "specchio",
  "candela",
  "ventilatore",
  "aspirapolvere",
  "lavatrice",
  "frigorifero",
  "tostapane",
  "imbuto",
  "grattugia",
  "cavatappi",
  "mattarello",
  "scopa",
  "secchio",
  "martello",
  "scala",
  "bilancia",
  "termometro",
  "telecomando",
  "caricabatterie",
  "salvadanaio",
  "portafoglio",
  "zaino",
  "cintura",
  "cravatta",
  "sciarpa",
  "pantofole",
  "amaca",
  "altalena",
  "aquilone",
  "cassaforte",
  "lampadario",

  // --- Animali ---
  "pinguino",
  "coccodrillo",
  "farfalla",
  "zanzara",
  "riccio",
  "scoiattolo",
  "delfino",
  "medusa",
  "gufo",
  "pipistrello",
  "formica",
  "lumaca",
  "canguro",
  "cammello",
  "ape",
  "ragno",
  "rondine",
  "granchio",
  "tartaruga",
  "volpe",
  "talpa",
  "gabbiano",
  "camaleonte",
  "bruco",

  // --- Cibo ---
  "cornetto",
  "lasagna",
  "mozzarella",
  "peperoncino",
  "anguria",
  "castagna",
  "gelato",
  "popcorn",
  "ciambella",
  "panettone",
  "carciofo",
  "melanzana",
  "tiramisu",
  "marmellata",
  "grissino",
  "arancino",
  "aceto",
  "prosciutto",
  "zucchero filato",
  "uovo sodo",
  "panna montata",
  "carbonara",
  "mentina",
  "lecca lecca",

  // --- Luoghi ---
  "faro",
  "castello",
  "biblioteca",
  "aeroporto",
  "spiaggia",
  "mercato",
  "semaforo",
  "ospedale",
  "cantina",
  "soffitta",
  "deserto",
  "vulcano",
  "ghiacciaio",
  "isola",
  "grotta",
  "stadio",
  "circo",
  "luna park",
  "autogrill",
  "edicola",
  "farmacia",
  "palestra",
  "campeggio",
  "acquario",
  "ascensore",

  // --- Mestieri ---
  "idraulico",
  "giardiniere",
  "pompiere",
  "arbitro",
  "bagnino",
  "astronauta",
  "veterinario",
  "sarto",
  "fabbro",
  "pescatore",
  "barbiere",
  "cameriere",
  "postino",
  "dentista",
  "allenatore",
  "spazzacamino",
  "domatore",
  "bidello",
  "programmatore",
  "prete",
  "hostess",

  // --- Situazioni e concetti astratti ---
  "nostalgia",
  "gelosia",
  "silenzio",
  "bugia",
  "segreto",
  "coraggio",
  "pazienza",
  "timidezza",
  "fortuna",
  "destino",
  "ricordo",
  "abbraccio",
  "sorriso",
  "solletico",
  "starnuto",
  "singhiozzo",
  "insonnia",
  "compleanno",
  "matrimonio",
  "vacanza",
  "sciopero",
  "traffico",
  "ritardo",
  "coincidenza",
  "trasloco",
  "mancia",
  "sbadiglio",
  "capriccio",
  "primo appuntamento",
  "resa dei conti",

  // --- Natura e fenomeni ---
  "arcobaleno",
  "grandine",
  "nebbia",
  "eclissi",
  "terremoto",
  "tramonto",
  "ombra",
  "eco",
  "marea",
  "stalattite",
  "girasole",
  "cactus",
  "quadrifoglio",
  "rugiada",
  "fulmine",
  "cometa",
  "sabbie mobili",
  "muschio",

  // --- Tecnologia e vita moderna ---
  "password",
  "selfie",
  "wifi",
  "drone",
  "tastiera",
  "cuffie",
  "robot",
  "videogioco",
  "emoji",
  "hashtag",
  "navigatore",
  "antenna",
  "carrello della spesa",
  "codice a barre",

  // --- Corpo ---
  "ginocchio",
  "gomito",
  "ciglia",
  "lentiggini",
  "fossetta",
  "unghia",
  "tallone",
  "barba",
  "ombelico",
  "sopracciglio",

  // --- Personaggi e fantasia ---
  "babbo natale",
  "befana",
  "fantasma",
  "sirena",
  "vampiro",
  "mago",
  "clown",
  "marziano",
  "dinosauro",
  "mummia",
  "unicorno",
  "gladiatore",
  "pirata",
  "cavaliere",
  "strega",
  "supereroe",

  // --- Tempo libero e sport ---
  "biliardo",
  "cruciverba",
  "karaoke",
  "maratona",
  "scacchi",
  "tuffo",
  "bicicletta",
  "nascondino",
  "girotondo",
  "briscola",
  "roulette",
  "trampolino",
  "bolle di sapone",
  "sci",
  "trucco",
];

const WORDS = [
  // --- Objects ---
  "umbrella",
  "toothbrush",
  "pillow",
  "carpet",
  "alarm clock",
  "blanket",
  "suitcase",
  "scissors",
  "glasses",
  "mirror",
  "candle",
  "fan",
  "vacuum cleaner",
  "washing machine",
  "fridge",
  "toaster",
  "funnel",
  "grater",
  "corkscrew",
  "rolling pin",
  "broom",
  "bucket",
  "hammer",
  "ladder",
  "scale",
  "thermometer",
  "remote control",
  "charger",
  "piggy bank",
  "wallet",
  "backpack",
  "belt",
  "necktie",
  "scarf",
  "slippers",
  "hammock",
  "swing",
  "kite",
  "safe",
  "chandelier",

  // --- Animals ---
  "penguin",
  "crocodile",
  "butterfly",
  "mosquito",
  "hedgehog",
  "squirrel",
  "dolphin",
  "jellyfish",
  "owl",
  "bat",
  "ant",
  "snail",
  "kangaroo",
  "camel",
  "bee",
  "spider",
  "raccoon",
  "crab",
  "turtle",
  "fox",
  "mole",
  "seagull",
  "chameleon",
  "caterpillar",
  "skunk",

  // --- Food ---
  "croissant",
  "lasagna",
  "popcorn",
  "watermelon",
  "chestnut",
  "ice cream",
  "doughnut",
  "pancake",
  "artichoke",
  "eggplant",
  "cheesecake",
  "jam",
  "pretzel",
  "vinegar",
  "bacon",
  "cotton candy",
  "boiled egg",
  "whipped cream",
  "marshmallow",
  "lollipop",
  "chewing gum",
  "peanut butter",
  "pickle",
  "leftovers",

  // --- Places ---
  "lighthouse",
  "castle",
  "library",
  "airport",
  "beach",
  "market",
  "traffic light",
  "hospital",
  "basement",
  "attic",
  "desert",
  "volcano",
  "glacier",
  "island",
  "cave",
  "stadium",
  "circus",
  "amusement park",
  "gas station",
  "pharmacy",
  "gym",
  "campsite",
  "aquarium",
  "elevator",
  "laundromat",
  "treehouse",

  // --- Jobs ---
  "plumber",
  "gardener",
  "firefighter",
  "referee",
  "lifeguard",
  "astronaut",
  "vet",
  "tailor",
  "blacksmith",
  "fisherman",
  "barber",
  "waiter",
  "mailman",
  "dentist",
  "coach",
  "chimney sweep",
  "lion tamer",
  "janitor",

  // --- Situations and abstract concepts ---
  "nostalgia",
  "jealousy",
  "silence",
  "lie",
  "secret",
  "courage",
  "patience",
  "shyness",
  "luck",
  "fate",
  "memory",
  "hug",
  "smile",
  "tickle",
  "sneeze",
  "hiccups",
  "insomnia",
  "birthday",
  "wedding",
  "vacation",
  "strike",
  "traffic jam",
  "being late",
  "coincidence",
  "moving house",
  "tip",
  "yawn",
  "tantrum",
  "first date",
  "homesickness",

  // --- Nature and phenomena ---
  "rainbow",
  "hail",
  "fog",
  "eclipse",
  "earthquake",
  "sunset",
  "shadow",
  "echo",
  "tide",
  "stalactite",
  "sunflower",
  "cactus",
  "four-leaf clover",
  "dew",
  "lightning",
  "comet",
  "quicksand",
  "moss",

  // --- Technology and modern life ---
  "password",
  "selfie",
  "wifi",
  "drone",
  "keyboard",
  "headphones",
  "robot",
  "video game",
  "emoji",
  "hashtag",
  "GPS",
  "antenna",
  "shopping cart",
  "barcode",

  // --- Body ---
  "knee",
  "elbow",
  "eyelashes",
  "freckles",
  "dimple",
  "fingernail",
  "heel",
  "beard",
  "belly button",
  "eyebrow",

  // --- Characters and fantasy ---
  "Santa Claus",
  "tooth fairy",
  "ghost",
  "mermaid",
  "vampire",
  "wizard",
  "clown",
  "alien",
  "dinosaur",
  "mummy",
  "unicorn",
  "gladiator",
  "pirate",
  "knight",
  "witch",
  "superhero",

  // --- Leisure and sports ---
  "pool",
  "crossword",
  "karaoke",
  "marathon",
  "chess",
  "hide and seek",
  "bicycle",
  "hopscotch",
  "bubbles",
  "roulette",
  "trampoline",
  "skiing",
  "makeup",
  "tag",
  "jigsaw puzzle",
];


function Game( { language } ) {
    const [array, setArray] = useState(() => {
        if(language === "italiano")
            return PAROLE
        return WORDS
    })

    const [time, setTime] = useState(10)
    const [team, setTeam] = useState(1)
    const [score, setScore] = useState(0)
    const [passes, setPasses] = useState(3)
    const [team1result, setTeam1result] = useState(0)
    const [team2result, setTeam2result] = useState(0)

    const [word, setWord] = useState("")

    const [isRunning, setIsRunning] = useState(false)
    const [screen, setScreen] = useState("gettingready")

    const length = array.length

    // Function to pick a new word to display
    const getNewWord = () => {
        setWord(array[Math.floor(Math.random() * length)])
    }

    // Pause the timer if "space" is pressed
    const handleKeyDown = (e) => {
        if (screen === "game" && e.code === "Space") setIsRunning(r => !r)
        e.preventDefault()
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [screen])

    // Timer functionality
    useEffect(() => {
        if (!isRunning) return
        
        const countdown = setInterval(() => {
            setTime(t => (t <= 0 ? 0 : t - 1))
        }, 1000)

        return () => clearInterval(countdown)
    }, [isRunning])

    // Executed when a round finishes
    useEffect(() => {
        if (time === 0) {
            if(team == 1) {
                setScreen("gettingready")
                setTeam(2)
                setPasses(3)
                setTeam1result(score)   

                setScore(0)
                setIsRunning(false)

                setTime(10)
                getNewWord()
            } else {
                setTeam2result(score)
                setIsRunning(false)
                setScreen("result")
            }
        }
    }, [time])

    const pauseOrResume = () => {
        if(isRunning) {
            setIsRunning(false)
        } else {
            setIsRunning(true)
            getNewWord()
        }
    }
    
    const reset = () => {
        setScreen("gettingready")
        setTeam(1)
        setPasses(3)
        setScore(0)
        setIsRunning(false)
        setTime(60)
        getNewWord()
    }

    return (
        <>
            <div id="game_box">
                <section id="team_stats">
                    <h1>{language == "italiano" ? `Turno della squadra ${team}` : `Team ${team}'s turn`}</h1>
                    <h1>{language == "italiano" ? `Tempo rimasto: ${time}` : `Time left: ${time}`}</h1>
                    <h1>{language == "italiano" ? `Punteggio: ${score}` : `Score: ${score}`}</h1>
                </section>

                <section>
                    {screen === "gettingready" && <GettingReady language={language} team={team} setScreen={setScreen} setIsRunning={setIsRunning} getNewWord={getNewWord}/>}
                    {screen === "game" && <h1>{word}</h1>}
                    {screen === "result" && <Result language={language} team1score={team1result} team2score={team2result} reset={reset}/>}
                </section>

                <section id="button_section">
                    <button className="game_button" disabled={isRunning || screen != "game"} onClick={() => setScore(s => Math.max(0, s + 1))}>+1</button>
                    <div id="button_div_1">
                        <button className="game_button" disabled={passes == 0 || !isRunning} onClick={() => {setPasses(p => p - 1); getNewWord()}}>{language == "italiano" ? `PASSA (${passes} rimasti)` : `PASS (${passes} left)`}</button>
                        <div id="button_div_2">
                            <button className="game_button" disabled={screen != "game"} onClick={() => pauseOrResume()}><img className="game_icon" src={isRunning ? "assets/pause.svg" : "assets/resume.svg"}/></button>
                            <button className="game_button" disabled={!isRunning} onClick={() => getNewWord()}><img className="game_icon" src="assets/reload.svg"/></button>                
                        </div>
                    </div>
                    <button className="game_button" disabled={isRunning || screen != "game"} onClick={() => setScore(s => Math.max(0, s - 1))}>-1</button>
                </section>
            </div>    
        </>
    )
}

export default Game