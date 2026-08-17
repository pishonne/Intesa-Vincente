import { useState } from 'react'

function Home( { language, setLanguage, setView } ) {

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    return (
        <>
            <section id="home_section">
                <h1>INTESA VINCENTE</h1>
                <p>{`${language == "italiano" ? "Create due squadre e scontratevi in uno dei giochi più famosi della TV italiana!" : "Create two teams and challenge each other in one of the most famous games in italian TV history!"}`}
                    <br/>{`${language == "italiano" ? "Se non ricordate le regole, potete trovarle " : "If you don't know the rules you can find them "}`}
                    <a href={`${language == "italiano" ? "assets/Intesa_Vincente_Regole.pdf" : "assets/Intesa_Vincente_Rules.pdf"}`}>{`${language == "italiano" ? "qui" : "here"}`}</a>.</p>
                <div id="language_select">
                    <button className="language_select_button" onClick={() => changeLanguage("italiano")} style={{backgroundColor:`${language == "italiano" ? "var(--primary)" : "var(--secondary)"}`}}>ITALIANO</button>
                    <button className="language_select_button" onClick={() => changeLanguage("english")} style={{backgroundColor:`${language == "english" ? "var(--primary)" : "var(--secondary)"}`}}>ENGLISH</button>
                </div>
                <button className="game_button" onClick={() => setView("game")}>{`${language == "italiano" ? "INIZIA GIOCO" : "START GAME"}`}</button>
            </section>
        </>
    )
}

export default Home