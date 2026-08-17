

function Result( { language, team1score, team2score, reset } ) {
    return(
        <>
            <h1>{language == "italiano" ? `RISULTATI` : `RESULTS`}</h1>
            <h1>{language == "italiano" ? `Punteggio della squadra 1:    ${team1score}` : `Team 1's score:    ${team1score}`}</h1>
            <h1>{language == "italiano" ? `Punteggio della squadra 2:    ${team2score}` : `Team 2's score:    ${team2score}`}</h1>
            <button className="game_button" onClick={() => reset()}>{language == "italiano" ? `RIGIOCA` : `PLAY AGAIN`}</button>
        </>
    )
}

export default Result