import { useEffect, useState } from "react";
import PetAPI from "../../api/PetApi";
import { Auth, Storage } from "aws-amplify";

function PetEditCard(props) {
    const [name, setName] = useState(props.pet.name);
    const [size, setSize] = useState(props.pet.size);
    const [postCode, setPostCode] = useState(props.pet.postcode);
    const [email, setEmail] = useState(props.pet.email);
    const [tel, setTel] = useState(props.pet.tel);
    const [imageUrl, setImageUrl] = useState(props.pet.image);


    function onFileChange(e) {
        const file = e.target.files[0];

        try {
            Storage.put(file.name, file).then((res) => {
                console.log(res);
                Storage.get(res.key).then((img) => {
                    console.log(img);
                    setImageUrl(img);
                    update();
                });
            });
        } catch (error) {
            console.log(error);
        }

    }

    function update() {

        let updatedPet = {
            name: name,
            size: size,
            postcode: postCode,
            email: email,
            tel: tel,
            image: imageUrl    
        }

        if(props.id) {
            updatedPet._id = props.id;
        }

        console.log(updatedPet);

        Auth.currentAuthenticatedUser().then((user) => {
            updatedPet.user = user.pool.clientId;

            PetAPI.update(updatedPet).then((pet) => {
                props.refresh();
            });
        });

    }

    function deletePet() {
        PetAPI.deletePet({id: props.id}).then((res) => {
            props.refresh();
        });
    }

    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row p-2">
        <div className="w-1/3">
            <img className="align-center" src={imageUrl} />
            <input type="file" className="w-full" onChange={onFileChange}></input>
        </div>
        <div className="pl-4 space-y-1 mt-2">
            <input type="text" value={name} onChange={(e) => {setName(e.target.value); }} placeholder="name" className="text-vert text-md ml-2 rounded"></input>
            <div className="flex flex-row pl-2">
                <p className="font-semibold text-vert">Size:</p>
                <select className="ml-11 rounded border-0" value={size} onChange={(e) => {setSize(e.target.value); }}>
                    <option value={"s"} selected>Small</option>
                    <option value={"m"}>Medium</option>
                    <option value={"l"}>Large</option>
                    <option value={"sm"}>Small/Medium</option>
                    <option value={"ml"}>Medium/Large</option>
                    <option value={"a"}>All</option>
                </select>
            </div>
            <input type="text" value={postCode} onChange={(e) => {setPostCode(e.target.value); }} placeholder="Postcode" className="text-vert text-md ml-2 rounded"></input>
            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value); }} placeholder="Email" className="block text-vert text-md ml-2 rounded"></input>
            <input type="text" value={tel} onChange={(e) => {setTel(e.target.value); }} placeholder="Phone Number" className="text-vert text-md ml-2 rounded"></input>
            <br></br>
            <button onClick={update} className="rounded bg-blue-700 hover:bg-blue-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Update</button>
            <button onClick={deletePet} className="rounded bg-red-700 hover:bg-red-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Delete</button>
        </div>
    </div>);
}

export default PetEditCard;
