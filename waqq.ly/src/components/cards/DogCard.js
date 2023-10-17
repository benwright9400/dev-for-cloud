function DogCard(props) {

    let image;

    if(!props.pet.image) {
        image =  "./logo.png";
    } else {
        image = props.pet.image;
    }

    return (<div className="mx-auto bg-slate-200 shadow-md rounded my-2 max-w-xl pl-2 flex flex-row">
        <div className="w-1/3">
            <img className="align-center" src={image} />
        </div>
        <div className="pl-4">
            <p className="text-vert font-semibold text-xl p-2">{props.pet.name}</p>
            <p className="text-vert font-semibold text-md pl-2">Size: {props.pet.size}</p>
            <p className="text-vert font-semibold text-md pl-2">Postcode: {props.pet.postcode}</p>
            <p className="text-vert font-semibold text-md pl-2">Email: {props.pet.email}</p>
            <p className="text-vert font-semibold text-md pl-2 pb-2">Tel: {props.pet.tel}</p>
        </div>
    </div>);
}

export default DogCard;