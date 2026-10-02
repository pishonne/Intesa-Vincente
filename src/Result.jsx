function Result( { language, team1score, team2score, reset } ) {
    return(
        <>
            <h1>{language == "italiano" ? `RISULTATI` : `RESULTS`}</h1>
            <h1>{language == "italiano" ? `Squadra 1:    ${team1score} punti` : `Team 1:    ${team1score} points`}</h1>
            <h1>{language == "italiano" ? `Squadra 2:    ${team2score} punti` : `Team 2:    ${team2score} points`}</h1>
            <button className="game_button" onClick={() => reset()}>{language == "italiano" ? `RIGIOCA` : `PLAY AGAIN`}</button>
        </>
    )
}

export default Result;