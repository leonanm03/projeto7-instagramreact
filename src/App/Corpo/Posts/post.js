import { useState } from "react"

export default function Post(props) {
    const [liked, Setliked] = useState(0)
    const [saved, Setsaved] = useState(0)
    const [thisLikes, SetthisLikes] = useState(props.likesNumber)

    // mexxe com o botão de like
    function manageLike(x) {
        if (x === "img") {
            if (!liked) {
                Setliked(1)
                SetthisLikes(thisLikes + 1)
            }
        }
        else {
            if (!liked) {
                Setliked(1)
                SetthisLikes(thisLikes + 1)
            }
            else {
                Setliked(0)
                SetthisLikes(thisLikes - 1)

            }
        }
    }

    // mexe com o botão de salvar o post
    function toggleSave() {
        if (!saved)
            Setsaved(1)
        else
            Setsaved(0)

    }


    return (
        <div data-test="post" className="post-box">
            <div className="post-top">
                <div className="post-owner">
                    <a href="https://www.instagram.com/">
                        <img src={props.ownerImg} alt={props.ownerName}
                        /></a>
                    <h2>{props.ownerName}</h2>
                </div>
                <a className="ellipsis" href="https://www.instagram.com/">
                    <ion-icon name="ellipsis-horizontal"></ion-icon
                    ></a>
            </div>

            <img data-test="post-image" onDoubleClick={() => manageLike("img")} className="post-img" src={props.postImg} alt={props.postImg} />

            <div className="post-bottom">
                <div>
                    <ion-icon data-test="like-post" onClick={manageLike} name={liked ? "heart" : "heart-outline"}
                        style={liked ? { color: "red" } : { color: "black" }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon data-test="save-post" onClick={toggleSave} name={!saved ? "bookmark-outline" : "bookmark"}></ion-icon>
            </div>
            <div className="likes">
                <a href="https://www.instagram.com/">
                    <img src={props.likesImg} alt={props.likesName}
                    /></a>
                <p>
                    Curtido por
                    <span><a href="https://www.instagram.com/"> {props.likesName} </a></span>
                    e
                    <span
                    ><a href="https://www.instagram.com/"
                    > outras <span data-test="likes-number">{thisLikes.toLocaleString()}</span> pessoas</a
                        ></span
                    >
                </p>
            </div>
        </div >
    )
}