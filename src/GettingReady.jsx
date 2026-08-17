

function GettingReady( {language, team, setScreen, setIsRunning, getNewWord } ) {
    return(
        <>
            <h1 style={{marginBottom: 0}}>{language == "italiano" ? `Turno della squadra ${team}.` : `Team ${team}'s turn.`}</h1>
            <h1>{language == "italiano" ? `Preparatevi.` : `Get Ready.`}</h1>
            <button className="game_button" onClick={() => {setScreen("game"); setIsRunning(true); getNewWord()}}>{language == "italiano" ? `INIZIA` : `START`}</button>
        </>
    )
}

export default GettingReady