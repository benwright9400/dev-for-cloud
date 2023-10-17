import { useEffect, useState } from "react";
import WalkerCard from "../cards/WalkerCard";
import WalkerFilterSection from "../filtersSections/WalkerFilterSection";
import WalkerAPI from "../../api/WalkerApi";

function WalkerPage() {
    const [count, setCount] = useState(0);
    const [walkers, setWalkers] = useState([]);
    const [filters, setFilters] = useState([{size: "a", postCode: ""}]);

    useEffect(() => {
        if(count === 0) {

            WalkerAPI.searchWalkers(filters[0]).then((res) => {
                console.log(res);
                
                setWalkers(res);

            });

            setCount(count + 1);
        }
    });


    return (<div>
        <WalkerFilterSection setRequest={(obj) => {setFilters([obj]); setCount(0);}} />
        {
            walkers.map((walker) => <WalkerCard walker={walker} />)
        }
    </div>);
}

export default WalkerPage;