import { useState } from "react";


function WalkerFilterSection(props) {
    const [size, setSize] = useState("s");
    const [postCode, setPostCode] = useState("");

    function update() {
        props.setRequest({size: size, postCode: postCode});
    }

    return (<div className="w-fit bg-vert rounded shadow-md">
        <p className="p-4 pb-1 pt-2 text-aub font-semibold text-xl">Walker Search</p>
        <div className="flex flex-row pr-40 p-4 pt-2 pb-0">
            <p className="font-semibold text-aub">Size:</p>
            <select className="ml-11 rounded border-0" value={size} onChange={(e) => {setSize(e.target.value);}}>
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
            <input className="ml-2 rounded" type="select" value={postCode} onChange={(e) => {setPostCode(e.target.value);}}></input>
        </div>
        <button onClick={() => update()} className="rounded bg-blue-700 hover:bg-blue-600 hover:shadow-md text-semibold text-white p-1 px-4 m-2">Search</button>
    </div>);
}

export default WalkerFilterSection;