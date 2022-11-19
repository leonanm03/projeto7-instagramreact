import { useState } from "react"

export default function Perfil() {
    const [name, Setname] = useState("Catana")
    const [img, Setimg] = useState("assets/catanacomics 1.png")

    function changeName() {
        const newName = prompt("Qual vai ser o novo nome?")
        if (newName)
            Setname(newName)
    }

    function changeImg() {

        const newImg = prompt("Qual vai ser a nova foto?")
        if (newImg)
            Setimg(newImg)

    }


    return (
        <div data-test="user" className="perfil">
            <img data-test="profile-image" onClick={changeImg} src={img} alt={name} />
            <div>
                <h2>catacomics</h2>
                <p className="gray"><span data-test="name" >{name}</span>
                    <span> <ion-icon data-test="edit-name" onClick={changeName} name="pencil-outline"></ion-icon></span>
                </p>
            </div>
        </div>
    )
}