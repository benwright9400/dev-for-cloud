import { useState } from "react";


function WalkerFilterSection(props) {
    const [size, setSize] = useState("s");
    const [postCode, setPostCode] = useState("");
    const [hasVacancies, setHasVacancies] = useState(true);

    function update() {
        props.setRequest({size: size, postCode: postCode, hasVacancies: hasVacancies});
    }

    return (<div className="w-fit bg-vert rounded shadow-md">
        <p className="p-4 pb-1 pt-2 text-aub font-semibold text-xl">Walker Search</p>
        <div className="flex flex-row pr-40 p-4 pt-2 pb-0">
            <p className="font-semibold text-aub">Size:</p>
            <select className="ml-11 rounded border-0" value={size} onChange={(e) => {setSize(e.target.value); update()}}>
                <option value={"s"} selected>Small</option>
                <option value={"m"}>Medium</option>
                <option value={"l"}>Large</option>
                <option value={"sm"}>Small/Medium</option>
                <option value={"ml"}>Medium/Large</option>
                <option value={"a"}>All</option>
            </select>
        </div>
        <div className="flex flex-row p-4 pt-1 pb-0">
            <p className="font-semibold text-aub border-0">Postcode:</p>
            <input className="ml-2 rounded" type="select" value={postCode} onChange={(e) => {setPostCode(e.target.value); update()}}></input>
        </div>
        <div className="flex flex-row p-4 pt-1">
            <p className="font-semibold text-aub border-0">Vacancies:</p>
            <input className="ml-2 rounded border-zero mt-1" type="checkbox" checked={hasVacancies} onChange={(e) => {setHasVacancies(e.target.checked); update()}}></input>
        </div>
    </div>);
}

export default WalkerFilterSection;