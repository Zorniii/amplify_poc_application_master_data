import {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listApplications} from "./graphql/queries";

export default function Applications() {
    const [applications, setApplications] = useState();
    useEffect(async () => {
        const applicationList = await API.graphql(graphqlOperation(listApplications));
        const {data} = applicationList.data;
        setApplications(data);
    }, []);
    return (
        <>
            {JSON.stringify(applications)}
        </>
    )
}