function DogCard() {
    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row">
        <div className="w-1/3">
            <img className="align-center" src={"./logo.png"} />
        </div>
        <div className="pl-4">
            <p className="text-vert font-semibold text-xl p-2">Larry Brookes</p>
            <p className="text-vert font-semibold text-md pl-2">Size: small</p>
            <p className="text-vert font-semibold text-md pl-2">Postcode: GU15 1DY</p>
            <p className="text-vert font-semibold text-md pl-2">Email: jamegray@hotmail.com</p>
            <p className="text-vert font-semibold text-md pl-2 pb-2">Tel: 01252 835 653</p>
        </div>
    </div>);
}

export default DogCard;