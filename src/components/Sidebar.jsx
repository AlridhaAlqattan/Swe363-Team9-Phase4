import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    const [show, setShow] = useState(false)




    return (
        <>
        <Button variant='primary' onClick={() => setShow(true)} >Show</Button>
    <Offcanvas id={props.id} show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Maintanence</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Hey
            <ol>
                <li><NavLink to={"/Login/First"}>First</NavLink></li>
            </ol>
            

            
        </Offcanvas.Body>
    </Offcanvas>
    </>
    );
}

export default Sidebar;