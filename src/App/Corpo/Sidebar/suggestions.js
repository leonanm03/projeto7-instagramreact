export default function Suggestions() {
    const suggestions = [
        { img: "assets/badvibesmemes 1.png", name: "bad.vibes.memes", text: "Segue você" },
        { img: "assets/chibirdart 1.png", name: "chibirdart", text: "Segue você" },
        { img: "assets/razoesparaacreditar 1.png", name: "razoesparaacreditar", text: "Novo no Instagram" },
        { img: "assets/adorableanimals 1.png", name: "adorable_animals", text: "Segue você" },
        { img: "assets/smallcutecats 1.png", name: "smallcutecats", text: "Segue você" },
    ]

    return (
        <div className="suggestions">
            <div className="suggested">
                <p className="gray">Sugestões para você</p>
                <p className="bold">Ver tudo</p>
            </div>
            {suggestions.map(s => <Suggestion img={s.img} name={s.name} text={s.text} key={s.name} />)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div className="suggested-box">
            <div className="suggested-left">
                <a href="https://instagram.com">
                    <img src={props.img} alt={props.name}
                    /></a>
                <div>
                    <h2>{props.name}</h2>
                    <p className="gray">{props.text}</p>
                </div>
            </div>
            <a href="https://instagram.com">seguir</a>
        </div>
    )
}