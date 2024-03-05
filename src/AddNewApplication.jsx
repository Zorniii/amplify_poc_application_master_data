import {Button, Card, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {API, Storage, graphqlOperation} from "aws-amplify";
import {v4 as uuid} from "uuid";
import {createApplication} from "./graphql/mutations";

export default function AddNewApplication() {
    const [applicationData, setApplicationData] = useState({
        name: "",
        description: "",
        isBCAL: false,
        applicationSurveyCompletionDate: ""
    });
    const [applicationSurveyXLSX, setApplicationSurveyXLSX] = useState([]);
    const add = async () => {
        const {name, description, isBCAL, applicationSurveyCompletionDate} = applicationData;

        Storage.configure({region: 'eu-west-1'});
        const s3output = await Storage.put(`${name}.ApplicationSurvey.xlsx`, applicationSurveyXLSX, {contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const s3url = await Storage.get(s3output.key);

        const application = {
            id: uuid(),
            name: name,
            description: description,
            bcal: isBCAL,
            applicationSurveyFile: s3url,
        }

        await API.graphql(graphqlOperation(createApplication, {input: application}));
    }

    const cancel = () => {
        setApplicationData({
            name: "",
            description: "",
            isBCAL: false,
            applicationSurveyCompletionDate: ""
        })
        setApplicationSurveyXLSX([]);
    }
    return (
        <Container className={'mt-2'}>
            <Row>
                <Card>
                    <Card.Header>
                        <Card.Title>Create Application</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={applicationData.name}
                                              onChange={evt => setApplicationData({
                                                  ...applicationData,
                                                  name: evt.target.value
                                              })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter description"
                                              value={applicationData.description}
                                              onChange={evt => setApplicationData({
                                                  ...applicationData,
                                                  description: evt.target.value
                                              })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="BCAL" value={applicationData.isBCAL}
                                            onChange={evt => setApplicationData({
                                                ...applicationData,
                                                isBCAL: evt.target.checked
                                            })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Application Survey</Form.Label>
                                <Form.Control type="file"
                                              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                              placeholder="Enter description"
                                              onChange={evt => setApplicationSurveyXLSX([...applicationSurveyXLSX, evt.target.files[0]])}/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button className={'float-end mr-2'} variant="primary" onClick={add}>
                            Submit
                        </Button>
                        <Button className={'float-end'} variant="light" onClick={cancel}>
                            Cancel
                        </Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    )
}