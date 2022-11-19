export default function Posts() {
    const posts = [
        {
            ownerImg: "assets/meowed 1.png", ownerName: "meowed", postImg: "assets/gato-telefone 1.png",
            likesImg: "assets/respondeai 1.png", likesName: "respondeai", likesNumber: 101.523
        },
        {
            ownerImg: "assets/meowed 1.png", ownerName: "meowed", postImg: "assets/gato-telefone 1.png",
            likesImg: "assets/respondeai 1.png", likesName: "respondeai", likesNumber: 101.523
        },
        {
            ownerImg: "assets/meowed 1.png", ownerName: "meowed", postImg: "assets/gato-telefone 1.png",
            likesImg: "assets/respondeai 1.png", likesName: "respondeai", likesNumber: 101.523
        }
    ]


    return (
        <div className="posts">
            {/* <!-- inicio caixa de post--> */}
            <div className="post-box">
                <div className="post-top">
                    <div className="post-owner">
                        <a href="https://www.instagram.com/">
                            <img src="assets/meowed 1.png"
                            /></a>
                        <h2>meowed</h2>
                    </div>
                    <a className="ellipsis" href="https://www.instagram.com/">
                        <ion-icon name="ellipsis-horizontal"></ion-icon
                        ></a>
                </div>
                <a href="https://www.instagram.com/">
                    <img className="post-img" src="assets/gato-telefone 1.png"
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
                    <a href="https://www.instagram.com/">
                        <img src="assets/respondeai 1.png"
                        /></a>
                    <p>
                        Curtido por
                        <span><a href="https://www.instagram.com/"> respondeai </a></span>
                        e
                        <span
                        ><a href="https://www.instagram.com/"
                        > outras 101.523 pessoas</a
                            ></span
                        >
                    </p>
                </div>
            </div>
            {/* <!-- fim caixa de post--> */}

            {/* <!-- inicio caixa de post--> */}
            <div className="post-box">
                <div className="post-top">
                    <div className="post-owner">
                        <a href="https://www.instagram.com/">
                            <img src="assets/barked 1.png"
                            /></a>
                        <h2>barked</h2>
                    </div>
                    <a className="ellipsis" href="https://www.instagram.com/">
                        <ion-icon name="ellipsis-horizontal"></ion-icon
                        ></a>
                </div>
                <a href="https://www.instagram.com/">
                    <img className="post-img" src="assets/dog 1.png"
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
                    <a href="https://www.instagram.com/">
                        <img src="assets/adorableanimals 1.png"
                        /></a>
                    <p>
                        Curtido por
                        <span
                        ><a href="https://www.instagram.com/"
                        > adorable_animals </a
                            ></span
                        >
                        e
                        <span
                        ><a href="https://www.instagram.com/"
                        > outras 99.159 pessoas</a
                            ></span
                        >
                    </p>
                </div>
            </div>
            {/* <!-- fim caixa de post--> */}

            {/* <!-- inicio caixa de post--> */}
            <div className="post-box">
                <div className="post-top">
                    <div className="post-owner">
                        <a href="https://www.instagram.com/">
                            <img src="assets/meowed 1.png"
                            /></a>
                        <h2>meowed</h2>
                    </div>
                    <a className="ellipsis" href="https://www.instagram.com/">
                        <ion-icon name="ellipsis-horizontal"></ion-icon
                        ></a>
                </div>
                <a href="https://www.instagram.com/">
                    <img className="post-img" src="assets/gato-telefone 1.png"
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
                    <a href="https://www.instagram.com/">
                        <img src="assets/respondeai 1.png"
                        /></a>
                    <p>
                        Curtido por
                        <span><a href="https://www.instagram.com/"> respondeai </a></span>
                        e
                        <span
                        ><a href="https://www.instagram.com/"
                        > outras 101.523 pessoas</a
                            ></span
                        >
                    </p>
                </div>
            </div>
            {/* <!-- fim caixa de post--> */}
        </div>
    )
}