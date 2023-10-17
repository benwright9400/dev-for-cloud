import { useEffect, useState } from "react";
import DogCard from "../cards/DogCard";
import PetFilterSection from "../filtersSections/PetFilterSection";
import PetAPI from "../../api/PetApi";

function PetsPage() {
    const [count, setCount] = useState(0);
    const [pets, setPets] = useState([]);
    const [filters, setFilters] = useState([{size: "a", postCode: ""}]);

    useEffect(() => {
        if(count === 0) {

            PetAPI.searchPets(filters[0]).then((res) => {
                console.log(res);
                
                setPets(res);

            });

            setCount(count + 1);
        }
    });

    return (<div>
        <PetFilterSection setRequest={(obj) => {setFilters([obj]); setCount(0);}} />
        {
            pets.map((pet) => {
                return <DogCard key={pet._id} pet={pet} />;
            })
        }
    </div>);
}

export default PetsPage;