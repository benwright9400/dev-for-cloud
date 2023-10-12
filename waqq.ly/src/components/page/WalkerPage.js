import WalkerCard from "../cards/WalkerCard";
import WalkerFilterSection from "../filtersSections/WalkerFilterSection";

function WalkerPage() {
    return (<div>
        <WalkerFilterSection setRequest={() => console.log("called")} />
        <WalkerCard />
    </div>);
}

export default WalkerPage;