import { useEffect, useState } from "react";
import DogCard from "../cards/DogCard";
import PetFilterSection from "../filtersSections/PetFilterSection";
import PetAPI from "../../api/PetApi";

function PetsPage() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 0) {

            PetAPI.searchPets().then((res) => {
                console.log(res);
            });

            setCount(count + 1);
        }
    });

    return (<div>
        <PetFilterSection setRequest={() => console.log("called")} />
        <DogCard />
    </div>);
}

export default PetsPage;