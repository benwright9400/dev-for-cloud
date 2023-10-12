import { useState } from "react";

function PetEditCard() {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [postCode, setPostCode] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [imageUrl, setImageUrl] = useState("./logo.png");

    function uploadToS3() {

        update();
    }

    function update() {

    }

    function deletePet() {

    }

    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row p-2">
        <div className="w-1/3">
            <img className="align-center" src={imageUrl} />
            <input type="file" className="w-full" onChange={uploadToS3}></input>
        </div>
        <div className="pl-4 space-y-1 mt-2">
            <input type="text" value={name} onChange={(e) => {setName(e.target.value); update();}} placeholder="name" className="text-vert text-md ml-2 rounded"></input>
            <div className="flex flex-row pl-2">
                <p className="font-semibold text-vert">Size:</p>
                <select className="ml-11 rounded border-0" value={size} onChange={(e) => {setSize(e.target.value); update();}}>
                    <option value={"s"} selected>Small</option>
                    <option value={"m"}>Medium</option>
                    <option value={"l"}>Large</option>
                    <option value={"sm"}>Small/Medium</option>
                    <option value={"ml"}>Medium/Large</option>
                    <option value={"a"}>All</option>
                </select>
            </div>
            <input type="text" value={postCode} onChange={(e) => {setPostCode(e.target.value); update();}} placeholder="Postcode" className="text-vert text-md ml-2 rounded"></input>
            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value); update();}} placeholder="Email" className="block text-vert text-md ml-2 rounded"></input>
            <input type="text" value={tel} onChange={(e) => {setTel(e.target.value); update();}} placeholder="Phone Number" className="text-vert text-md ml-2 rounded"></input>
            <button onClick={deletePet} className="block rounded bg-red-700 hover:bg-red-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Delete</button>
        </div>
    </div>);
}

export default PetEditCard;
