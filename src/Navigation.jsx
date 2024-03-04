import React from "react";
import {Button, Container, Form, Navbar} from "react-bootstrap";

export default function Navigation({username, signOut}) {
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">POC: Application Master Data</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{username}</a>
                    </Navbar.Text>
                    <Form>
                        <Button variant="outline-success" onClick={signOut}>Sign out</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}