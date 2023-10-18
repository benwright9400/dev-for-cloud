import { useEffect, useState } from "react";
import WalkerEditCard from "../../editCards/WalkerEditCard";
import { Auth } from "aws-amplify";
import WalkerAPI from "../../../api/WalkerApi";

function WalkerSubPage() {
    const [walkers, setWalkers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 0) {
            getWalkers();
            setCount(count + 1);
        }
    });

    function getWalkers() {
        Auth.currentAuthenticatedUser().then((user) => {
            console.log(user);

            WalkerAPI.searchWalkers({user: user.username}).then((walkers) => {
                console.log(walkers);
                setWalkers(walkers);
            });
        });
    }

    function addWalker() {
        setWalkers([...walkers, {
            name: "",
            size: "a",
            postcode: "",
            email: "",
            tel: "",
            spaces: 0,
            image: "./logo.png"    
        }]);
    }

    return (<div>
        <div className="text-right w-2/3">
            <button onClick={addWalker} className="bg-vert p-1 px-2 rounded shadow text-white hover:shadow-lg">Add Walker</button>            
        </div>
        {
            walkers.map((walker) => <WalkerEditCard key={walker._id} id={walker._id} walker={walker} refresh={getWalkers}  />)
        }
    </div>);
}

export default WalkerSubPage;