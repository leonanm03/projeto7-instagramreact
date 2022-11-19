export default function BottomBar() {
    const icons = [
        { name: "home" },
        { name: "search-outline" },
        { name: "add-circle-outline" },
        { name: "heart-outline" },
        { name: "person-outline" },
    ]

    return (
        <div className="bottom-menu">
            {icons.map(i => <Bottomicon key={i.name} name={i.name} />)}
        </div>
    )
}

function Bottomicon(props) {
    return (
        <a href="https://www.instagram.com/">
            <ion-icon name={props.name}></ion-icon
            ></a>
    )
}