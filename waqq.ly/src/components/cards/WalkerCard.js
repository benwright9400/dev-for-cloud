function WalkerCard(props) {
    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row relative">
        <div className="w-1/3">
            <img className="my-auto" src={props.walker.image} />
        </div>
        <p className="text-vert font-semibold text-xl p-2 absolute right-2 top-0">{props.walker.spaces} Spaces</p>
        <div className="pl-4 relative">
            <p className="text-vert font-semibold text-xl relative p-2">{props.walker.name}</p>
            <p className="text-vert font-semibold text-md pl-2">Walks size of pets: {props.walker.size}</p>
            <p className="text-vert font-semibold text-md pl-2">Postcode: {props.walker.postcode}</p>
            <p className="text-vert font-semibold text-md pl-2">Email: {props.walker.email}</p>
            <p className="text-vert font-semibold text-md pl-2 pb-2">Tel: {props.walker.tel}</p>
        </div>
    </div>);
}

export default WalkerCard;