import Story from "./story"

export default function Stories() {
    const stories = [
        { pic: "assets/9gag 1.png", name: "9gag" },
        { pic: "assets/meowed 1.png", name: "meowed" },
        { pic: "assets/barked 1.png", name: "barked" },
        { pic: "assets/nathanwpylestrangeplanet 1.png", name: "nathanwpyle..." },
        { pic: "assets/wawawiwacomicsa 1.png", name: "wawawiwac..." },
        { pic: "assets/respondeai 1.png", name: "respondeai" },
        { pic: "assets/filomoderna 1.png", name: "filomoderna" },
        { pic: "assets/memeriagourmet 1.png", name: "memeriago..." },

    ]

    return (
        <div className="stories">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            {stories.map(s => (<Story key={s.name} pic={s.pic} name={s.name} />))}

        </div>
    )
}