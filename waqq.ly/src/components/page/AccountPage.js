import { useState } from "react";
import AccountSubPage from "./subpages/AccountSubPage";
import WalkerSubPage from "./subpages/WalkerSubPage";
import PetSubPage from "./subpages/PetSubPage";

function AccountPage() {
    const [subpage, setSubpage] = useState("PETS");

    const PETS = "PETS";
    const WALKER = " WALKER";
    const ACCOUNT = "ACCOUNT";

    function getString() {
        if(subpage === ACCOUNT) return "My account";
        if(subpage === WALKER) return "Walker profile";
        if(subpage === PETS) return "Pets";
    }

    return (<div>
        <div className="w-60 mt-20">
            <div className="mb-4 mx-auto mt-12">
                <h2 className="text-vert text-xl font-semibold mb-2">{getString()}</h2>
                <hr className="border-vert w-96"></hr>
            </div>
            <p onClick={() => setSubpage(PETS)} className="text-vert text-md font-semibold p-1 hover:bg-vert hover:text-white cursor-pointer">Pets</p>
            <p onClick={() => setSubpage(WALKER)} className="text-vert text-md font-semibold p-1 hover:bg-vert hover:text-white cursor-pointer">Walker profile</p>
            <p onClick={() => setSubpage(ACCOUNT)} className="text-vert text-md font-semibold p-1 hover:bg-vert hover:text-white cursor-pointer">My account</p>
        </div>
        <div className="p-1">
            {
                subpage === ACCOUNT && <AccountSubPage />
            }
            {
                subpage === WALKER && <WalkerSubPage />
            }
            {
                subpage === PETS && <PetSubPage />
            }
        </div>
    </div>);
}

export default AccountPage;