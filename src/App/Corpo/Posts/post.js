
export default function Post(props) {
    return (
        <div className="post-box">
            <div className="post-top">
                <div className="post-owner">
                    <a href="https://www.instagram.com/">
                        <img src={props.ownerImg}
                        /></a>
                    <h2>{props.ownerName}</h2>
                </div>
                <a className="ellipsis" href="https://www.instagram.com/">
                    <ion-icon name="ellipsis-horizontal"></ion-icon
                    ></a>
            </div>
            <a href="https://www.instagram.com/">
                <img className="post-img" src={props.postImg}
                /></a>
            <div className="post-bottom">
                <div>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="heart-outline"></ion-icon
                        ></a>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="chatbubble-outline"></ion-icon
                        ></a>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="paper-plane-outline"></ion-icon
                        ></a>
                </div>
                <a href="https://www.instagram.com/">
                    <ion-icon name="bookmark-outline"></ion-icon
                    ></a>
            </div>
            <div className="likes">
                <a href={props.likesImg}>
                    <img src="assets/respondeai 1.png"
                    /></a>
                <p>
                    Curtido por
                    <span><a href="https://www.instagram.com/"> {props.likesName} </a></span>
                    e
                    <span
                    ><a href="https://www.instagram.com/"
                    > outras {props.likesNumber} pessoas</a
                        ></span
                    >
                </p>
            </div>
        </div>
    )
}