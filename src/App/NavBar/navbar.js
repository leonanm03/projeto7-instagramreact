import NavBarDesktop from "./navbardesktop";
import NavBarMobile from "./navbarmobile";

export default function NavBar() {
    return (
        <>
            {/* Menu superior no modo desktop */}
            <NavBarDesktop />

            {/* menu superior mobile*/}
            <NavBarMobile />
        </>
    )
}