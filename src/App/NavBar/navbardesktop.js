export default function NavBarDesktop() {
    const icons = [
        { name: "paper-plane-outline" },
        { name: "compass-outline" },
        { name: "heart-outline" },
        { name: "person-outline" },
    ]

    return (<>
        <div className="top-menu">
            {/* <!--icone e nome do instagram--> */}
            <div className="logo">
                <a href="https://www.instagram.com/">
                    <ion-icon name="logo-instagram"></ion-icon
                    ></a>
                <div className="line-vertical"></div>
                <a href="https://www.instagram.com/">
                    <img className="img-logo" src="assets/logo.png" alt="logo" />
                </a>
            </div>

            {/* <!--Barra de pesquisa--> */}
            <input className="search" placeholder="Pesquisar" type="text" />

            {/* <!--Ícones à direita do menu superior--> */}
            <ul className="icons">
                {icons.map(i => <TopRightIcons key={i.name} name={i.name} />)}
            </ul>
        </div>
    </>)

}

function TopRightIcons(props) {
    return (
        <li> <a href="https://www.instagram.com/">
            <ion-icon name={props.name}></ion-icon
            ></a></li>
    )
}