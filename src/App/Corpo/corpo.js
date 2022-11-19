import BottomBar from "./bottombar";
import Posts from "./Posts/posts";
import Stories from "./Stories/stories";

export default function Corpo() {
    return (
        <div className="container-page">
            <div className="vertical">
                <Stories />
                <Posts />
                <BottomBar />
            </div>

            {/* <!-- inicio sidebar--> */}
            <div className="sidebar">
                <div className="perfil">
                    <a href="https://instagram.com">
                        <img src="assets/catanacomics 1.png" />
                    </a>
                    <div>
                        <h2>catacomics</h2>
                        <p className="gray">Catana</p>
                    </div>
                </div>
                {/* <!--inicio sugestões--> */}
                <div className="suggestions">
                    <div className="suggested">
                        <p className="gray">Sugestões para você</p>
                        <p className="bold">Ver tudo</p>
                    </div>
                    {/* <!-- inicio caixa de sugestão--> */}
                    <div className="suggested-box">
                        <div className="suggested-left">
                            <a href="https://instagram.com">
                                <img src="assets/badvibesmemes 1.png"
                                /></a>
                            <div>
                                <h2>bad.vibes.memes</h2>
                                <p className="gray">Segue você</p>
                            </div>
                        </div>
                        <a href="https://instagram.com">seguir</a>
                    </div>
                    {/* <!-- fim caixa de sugestão--> */}
                    {/* <!-- inicio caixa de sugestão--> */}
                    <div className="suggested-box">
                        <div className="suggested-left">
                            <a href="https://instagram.com">
                                <img src="assets/chibirdart 1.png"
                                /></a>
                            <div>
                                <h2>chibirdart</h2>
                                <p className="gray">Segue você</p>
                            </div>
                        </div>
                        <a href="https://instagram.com">seguir</a>
                    </div>
                    {/* <!-- fim caixa de sugestão--> */}
                    {/* <!-- inicio caixa de sugestão--> */}
                    <div className="suggested-box">
                        <div className="suggested-left">
                            <a href="https://instagram.com">
                                <img src="assets/razoesparaacreditar 1.png"
                                /></a>
                            <div>
                                <h2>razoesparaacreditar</h2>
                                <p className="gray">Novo no Instagram</p>
                            </div>
                        </div>
                        <a href="https://instagram.com">seguir</a>
                    </div>
                    {/* <!-- fim caixa de sugestão--> */}
                    {/* <!-- inicio caixa de sugestão--> */}
                    <div className="suggested-box">
                        <div className="suggested-left">
                            <a href="https://instagram.com">
                                <img src="assets/adorableanimals 1.png"
                                /></a>
                            <div>
                                <h2>adorable_animals</h2>
                                <p className="gray">Segue você</p>
                            </div>
                        </div>
                        <a href="https://instagram.com">seguir</a>
                    </div>
                    {/* <!-- fim caixa de sugestão--> */}
                    {/* <!-- inicio caixa de sugestão--> */}
                    <div className="suggested-box">
                        <div className="suggested-left">
                            <a href="https://instagram.com">
                                <img src="assets/smallcutecats 1.png"
                                /></a>
                            <div>
                                <h2>smallcutecats</h2>
                                <p className="gray">Segue você</p>
                            </div>
                        </div>
                        <a href="https://instagram.com">seguir</a>
                    </div>
                    {/* <!-- fim caixa de sugestão--> */}
                </div>
                {/* <!--fim sugestões--> */}
                <p className="light-gray">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
                <p className="light-gray">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
            {/* <!-- fim sidebar--> */}
        </div>
    )
}