import { Auth, Storage } from "aws-amplify";
import { useState } from "react";
import WalkerAPI from "../../api/WalkerApi";

function WalkerEditCard(props) {
    const [name, setName] = useState(props.walker.name);
    const [size, setSize] = useState(props.walker.size);
    const [postCode, setPostCode] = useState(props.walker.postcode);
    const [email, setEmail] = useState(props.walker.email);
    const [tel, setTel] = useState(props.walker.tel);
    const [places, setPlaces] = useState(props.walker.spaces);
    const [imageUrl, setImageUrl] = useState(props.walker.image);

    function update() {

        let updatedPet = {
            name: name,
            size: size,
            postcode: postCode,
            email: email,
            tel: tel,
            image: imageUrl,
            spaces: places    
        }

        if(props.id) {
            updatedPet._id = props.id;
        }

        console.log(updatedPet);

        Auth.currentAuthenticatedUser().then((user) => {
            updatedPet.user = user.username;

            WalkerAPI.update(updatedPet).then((pet) => {
                props.refresh();
            });
        });

    }

    function deleteAccount() {
        WalkerAPI.deleteWalker({id: props.id}).then((res) => {
            console.log(res);
            props.refresh();
        });
    }

    function onFileChange(e) {
        const file = e.target.files[0];

        try {
            Storage.put(file.name, file, {level: 'public'}).then((res) => {
                console.log(res);
                Storage.get(res.key).then((img) => {
                    console.log(img);
                    setImageUrl(img);
                    update();
                });
            });
        } catch (error) {
            
        }

    }

    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row p-2">
        <div className="w-1/3">
            <img className="align-center" src={imageUrl} />
            <input className="w-full" type="file" onChange={onFileChange}></input>
        </div>
        <div className="pl-4 space-y-1 mt-2">
            <input type="text" value={name} onChange={(e) => {setName(e.target.value); update();}} placeholder="name" className="text-vert text-md ml-2 rounded"></input>
            <div className="flex flex-row pl-2">
                <p className="font-semibold text-vert">Walks pets of sizes:</p>
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
            <div className="flex flex-row pl-2">
                <p className="font-semibold text-vert">Free spaces:</p>
                <input type="number" value={places} onChange={(e) => {setPlaces(e.target.value); update();}} placeholder="Available places" className="text-vert text-md ml-2 rounded"></input>
            </div>
            <button onClick={update} className="rounded bg-blue-700 hover:bg-blue-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Update</button>
            <button onClick={deleteAccount} className="rounded bg-red-700 hover:bg-red-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Delete Account</button>
        </div>
    </div>);
}

export default WalkerEditCard;