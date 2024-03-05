import Navigation from "./Navigation";
import AddNewApplication from "./AddNewApplication";
import Applications from "./Applications";

export default function LandingPage({username, signOut}) {
    return (
        <>
            <Navigation username={username} signOut={signOut}/>
            <AddNewApplication/>
            <Applications/>
        </>
    )
}