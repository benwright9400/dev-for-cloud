function WalkerCard() {
    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row relative">
        <div className="w-1/3">
            <img className="my-auto" src={"./logo.png"} />
        </div>
        <p className="text-vert font-semibold text-xl p-2 absolute right-2 top-0">4 Spaces</p>
        <div className="pl-4 relative">
            <p className="text-vert font-semibold text-xl relative p-2">Larry Brookes</p>
            <p className="text-vert font-semibold text-md pl-2">Walks size of pets: small</p>
            <p className="text-vert font-semibold text-md pl-2">Postcode: GU15 1DY</p>
            <p className="text-vert font-semibold text-md pl-2">Email: jamegray@hotmail.com</p>
            <p className="text-vert font-semibold text-md pl-2 pb-2">Tel: 01252 835 653</p>
        </div>
    </div>);
}

export default WalkerCard;