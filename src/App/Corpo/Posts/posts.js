import Post from "./post"

export default function Posts() {
    const posts = [
        {
            ownerImg: "assets/meowed 1.png", ownerName: "meowed", postImg: "assets/gato-telefone 1.png",
            likesImg: "assets/respondeai 1.png", likesName: "respondeai", likesNumber: 101523
        },
        {
            ownerImg: "assets/barked 1.png", ownerName: "barked", postImg: "assets/dog 1.png",
            likesImg: "assets/adorableanimals 1.png", likesName: "adorable_animals", likesNumber: 99159
        },
        {
            ownerImg: "assets/razoesparaacreditar 1.png", ownerName: "razoesparaacreditar", postImg: "assets/leonan.png",
            likesImg: "assets/nathanwpylestrangeplanet 1.png", likesName: "nathanwpylestrangeplanet", likesNumber: 314225
        }
    ]

    return (
        <div className="posts">
            {posts.map(p => <Post key={p.ownerName} ownerImg={p.ownerImg} ownerName={p.ownerName}
                postImg={p.postImg} likesImg={p.likesImg} likesName={p.likesName} likesNumber={p.likesNumber} />)}
        </div>
    )
}