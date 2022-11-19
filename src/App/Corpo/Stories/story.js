export default function Story(props) {
    return (
        // imagem e borda
        <div className="stories-box">
            <a className="img-stories" href="https://www.instagram.com/">
                <img src={props.pic} alt={props.name}
                /></a>
            <img
                className="img-stories-border"
                src="assets/stories_background 1.png" alt={props.pic}
            />
            {/* nome */}
            <p className="stories-name">{props.name}</p>
        </div>
    )
}