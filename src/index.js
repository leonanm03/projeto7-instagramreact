import ReactDOM from "react-dom";
import logo from "./assets/logo.png"
import gag9  from "./assets/9gag 1.png"
import adorableanimals from "./assets/adorableanimals 1.png"
import badvibesmemes from "./assets/badvibesmemes 1.png"
import barked from "./assets/barked 1.png"
import catanacomics from "./assets/catanacomics 1.png"
import chibirdart from "./assets/chibirdart 1.png"
import dog from "./assets/dog 1.png"
import filomoderna from "./assets/filomoderna 1.png"
import gatotelefone1 from "./assets/gato-telefone 1.png"
import memeriagourmet from "./assets/memeriagourmet 1.png"
import meowed from "./assets/meowed 1.png"
import nathanwpylestrangeplanet from "./assets/nathanwpylestrangeplanet 1.png"
import razoesparaacreditar from "./assets/razoesparaacreditar 1.png"
import respondeai from "./assets/respondeai 1.png"
import smallcutecats from "./assets/smallcutecats 1.png"
import stories_background from "./assets/stories_background 1.png"
import wawawiwacomicsa from "./assets/wawawiwacomicsa 1.png"








function App() {
    return (
        <div>
            {/* <!-- Início menu superior--> */}
            <div class="top-menu">
                {/* <!--icone e nome do instagram--> */}
                <div class="logo">
                    <a href="https://www.instagram.com/">
                        <ion-icon name="logo-instagram"></ion-icon
                        ></a>
                    <div class="line-vertical"></div>
                    <a href="https://www.instagram.com/">
                        <img class="img-logo" src={logo} />
                    </a>
                </div>

                {/* <!-- Logo para aparecer na versão mobile-->
                <a href="https://www.instagram.com/">
                    <img class="img-logo-mobile" src={logo} />
                </a> */}

                {/* <!--Barra de pesquisa--> */}
                <input class="search" placeholder="Pesquisar" type="text" />

                {/* <!--Ícones à direita do menu superior--> */}
                <div class="icons">
                    <a href="https://www.instagram.com/">
                        <ion-icon name="paper-plane-outline"></ion-icon
                        ></a>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="compass-outline"></ion-icon
                        ></a>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="heart-outline"></ion-icon
                        ></a>
                    <a href="https://www.instagram.com/">
                        <ion-icon name="person-outline"></ion-icon
                        ></a>
                </div>
            </div>


            {/* <!-- Fim menu superior--> */}

            {/* menu superior mobile*/}
            
            <div class="top-menu-mobile">
                {/* <!--icone e nome do instagram--> */}                
                    <a href="https://www.instagram.com/">
                        <ion-icon name="logo-instagram"></ion-icon
                        ></a>
                        
                    <a href="https://www.instagram.com/">
                        <img class="img-logo" src={logo} />
                    </a>


                    <a href="https://www.instagram.com/">
                        <ion-icon name="paper-plane-outline"></ion-icon
                        ></a>
            </div>
            {/*Fim  menu superior mobile*/}

            {/* <!-- inicio página do instagram--> */}
            <div class="container-page">
                <div class="vertical">
                    {/* <!-- Inicio aba stories--> */}
                    <div class="stories">
                        <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={gag9}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">9gag</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={meowed}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">meowed</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={barked}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">barked</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={nathanwpylestrangeplanet}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">nathanwpyle...</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={wawawiwacomicsa}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">wawawiwac...</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={respondeai}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">respondeai</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={filomoderna}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">filomoderna</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                        {/* <!--inicio de caixa de um stories--> */}
                        <div class="stories-box">
                            <a class="img-stories" href="https://www.instagram.com/">
                                <img src={memeriagourmet}
                                /></a>
                            <img
                                class="img-stories-border"
                                src={stories_background}
                            />
                            <p class="stories-name">memeriago...</p>
                        </div>
                        {/* <!--fim de caixa de um stories--> */}
                    </div>
                    {/* <!-- fim aba stories--> */}
                    {/* <!--inicio posts--> */}
                    <div class="posts">
                        {/* <!-- inicio caixa de post--> */}
                        <div class="post-box">
                            <div class="post-top">
                                <div class="post-owner">
                                    <a href="https://www.instagram.com/">
                                        <img src={meowed}
                                        /></a>
                                    <h2>meowed</h2>
                                </div>
                                <a class="ellipsis" href="https://www.instagram.com/">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon
                                    ></a>
                            </div>
                            <a href="https://www.instagram.com/">
                                <img class="post-img" src={gatotelefone1}
                                /></a>
                            <div class="post-bottom">
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
                            <div class="likes">
                                <a href="https://www.instagram.com/">
                                    <img src={respondeai}
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
                        <div class="post-box">
                            <div class="post-top">
                                <div class="post-owner">
                                    <a href="https://www.instagram.com/">
                                        <img src={barked}
                                        /></a>
                                    <h2>barked</h2>
                                </div>
                                <a class="ellipsis" href="https://www.instagram.com/">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon
                                    ></a>
                            </div>
                            <a href="https://www.instagram.com/">
                                <img class="post-img" src={dog}
                                /></a>
                            <div class="post-bottom">
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
                            <div class="likes">
                                <a href="https://www.instagram.com/">
                                    <img src={adorableanimals}
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
                        <div class="post-box">
                            <div class="post-top">
                                <div class="post-owner">
                                    <a href="https://www.instagram.com/">
                                        <img src={meowed}
                                        /></a>
                                    <h2>meowed</h2>
                                </div>
                                <a class="ellipsis" href="https://www.instagram.com/">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon
                                    ></a>
                            </div>
                            <a href="https://www.instagram.com/">
                                <img class="post-img" src={gatotelefone1}
                                /></a>
                            <div class="post-bottom">
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
                            <div class="likes">
                                <a href="https://www.instagram.com/">
                                    <img src={respondeai}
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
                    {/* <!--fim posts--> */}

                    {/* <!-- menu inferior para modo mobile--> */}
                    <div class="bottom-menu">
                        <a href="https://www.instagram.com/">
                            <ion-icon name="home"></ion-icon
                            ></a>
                        <a href="https://www.instagram.com/">
                            <ion-icon name="search-outline"></ion-icon
                            ></a>
                        <a href="https://www.instagram.com/">
                            <ion-icon name="add-circle-outline"></ion-icon
                            ></a>
                        <a href="https://www.instagram.com/">
                            <ion-icon name="heart-outline"></ion-icon
                            ></a>
                        <a href="https://www.instagram.com/">
                            <ion-icon name="person-outline"></ion-icon
                            ></a>
                    </div>
                    {/* <!--fim  menu inferior para modo mobile--> */}
                </div>

                {/* <!-- inicio sidebar--> */}
                <div class="sidebar">
                    <div class="perfil">
                        <a href="https://instagram.com">
                            <img src={catanacomics} />
                        </a>
                        <div>
                            <h2>catacomics</h2>
                            <p class="gray">Catana</p>
                        </div>
                    </div>
                    {/* <!--inicio sugestões--> */}
                    <div class="suggestions">
                        <div class="suggested">
                            <p class="gray">Sugestões para você</p>
                            <p class="bold">Ver tudo</p>
                        </div>
                        {/* <!-- inicio caixa de sugestão--> */}
                        <div class="suggested-box">
                            <div class="suggested-left">
                                <a href="https://instagram.com">
                                    <img src={badvibesmemes}
                                    /></a>
                                <div>
                                    <h2>bad.vibes.memes</h2>
                                    <p class="gray">Segue você</p>
                                </div>
                            </div>
                            <a href="https://instagram.com">seguir</a>
                        </div>
                        {/* <!-- fim caixa de sugestão--> */}
                        {/* <!-- inicio caixa de sugestão--> */}
                        <div class="suggested-box">
                            <div class="suggested-left">
                                <a href="https://instagram.com">
                                    <img src={chibirdart}
                                    /></a>
                                <div>
                                    <h2>chibirdart</h2>
                                    <p class="gray">Segue você</p>
                                </div>
                            </div>
                            <a href="https://instagram.com">seguir</a>
                        </div>
                        {/* <!-- fim caixa de sugestão--> */}
                        {/* <!-- inicio caixa de sugestão--> */}
                        <div class="suggested-box">
                            <div class="suggested-left">
                                <a href="https://instagram.com">
                                    <img src={razoesparaacreditar}
                                    /></a>
                                <div>
                                    <h2>razoesparaacreditar</h2>
                                    <p class="gray">Novo no Instagram</p>
                                </div>
                            </div>
                            <a href="https://instagram.com">seguir</a>
                        </div>
                        {/* <!-- fim caixa de sugestão--> */}
                        {/* <!-- inicio caixa de sugestão--> */}
                        <div class="suggested-box">
                            <div class="suggested-left">
                                <a href="https://instagram.com">
                                    <img src={adorableanimals}
                                    /></a>
                                <div>
                                    <h2>adorable_animals</h2>
                                    <p class="gray">Segue você</p>
                                </div>
                            </div>
                            <a href="https://instagram.com">seguir</a>
                        </div>
                        {/* <!-- fim caixa de sugestão--> */}
                        {/* <!-- inicio caixa de sugestão--> */}
                        <div class="suggested-box">
                            <div class="suggested-left">
                                <a href="https://instagram.com">
                                    <img src={smallcutecats}
                                    /></a>
                                <div>
                                    <h2>smallcutecats</h2>
                                    <p class="gray">Segue você</p>
                                </div>
                            </div>
                            <a href="https://instagram.com">seguir</a>
                        </div>
                        {/* <!-- fim caixa de sugestão--> */}
                    </div>
                    {/* <!--fim sugestões--> */}
                    <p class="light-gray">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                        Localizações • Contas mais relevantes • Hashtags • Idioma
                    </p>
                    <p class="light-gray">© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
                {/* <!-- fim sidebar--> */}
            </div>
            {/* <!-- fim página do instagram--> */}
        </div>
    )
}


const elemento = document.querySelector(".root");
ReactDOM.render(App(), elemento);
