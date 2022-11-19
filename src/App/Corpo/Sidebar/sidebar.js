import Perfil from "./perfil";
import Suggestions from "./suggestions";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Perfil />
            <Suggestions />
            <p className="light-gray">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p className="light-gray">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}