import Navigation from "./Navigation";
import AddNewApplication from "./AddNewApplication";

export default function LandingPage({username, signOut}) {
    return (
        <>
            <Navigation username={username} signOut={signOut}/>
            <AddNewApplication/>
        </>
    )
}