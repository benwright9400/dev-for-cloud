import { useEffect, useState } from "react";
import PetEditCard from "../../editCards/PetEditCard";
import PetAPI from "../../../api/PetApi";
import { Auth } from "aws-amplify";

function PetSubPage() {
    const [pets, setPets] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 0) {
            getPets();
            setCount(count + 1);
        }
    });

    function getPets() {
        Auth.currentAuthenticatedUser().then((user) => {
            console.log(user.pool.clientId);

            PetAPI.searchPets({user: user.pool.clientId}).then((pets) => {
                console.log(pets);
                setPets(pets);
            });
        });
    }

    function addPet() {
        setPets([...pets, {
            name: "",
            size: "a",
            postcode: "",
            email: "",
            tel: "",
            image: "./logo.png"    
        }]);
    }

    return (<div>
        <div className="text-right w-2/3">
            <button onClick={addPet} className="bg-vert p-1 px-2 rounded shadow text-white hover:shadow-lg">Add Pet</button>            
        </div>
        {
            pets.map((pet) => {
                return <PetEditCard key={pet._id} id={pet._id} pet={pet} refresh={getPets} />;
            })
        }
    </div>);
}

export default PetSubPage;