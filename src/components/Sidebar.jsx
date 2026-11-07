import "./Sidebar.css";
import icon from "../assets/GreenBuildingIcon.png";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    const [show, setShow] = useState(false)




    return (
        <>
            <Button id="ShowSideBar" variant='primary' onClick={() => setShow(true)}>☰</Button>
            <Offcanvas id={props.id} show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{fontWeight:"bold"}}><img src={icon} alt="Building icon" style={{width:"2.5rem", height:"2.5rem", borderRadius: "15%", marginRight:"1rem"}}  />Maintanence</Offcanvas.Title>

                </Offcanvas.Header>
                <span id="SidebarHeaderBox"><span style={{fontWeight:"bolder",fontFamily:"Arial"}}>KFUPM Maintenance</span>
                    <span style={{opacity: 0.7}}>Building services . {props.role}</span>
                </span>
                <Offcanvas.Body>
                    <p style={{ fontWeight: "bold", opacity: 0.6 }}>WORKSPACE</p>
                    <hr />
                    <ol>
                        {props.elms.map((e) => (

                            <NavLink to={e.link} className="btn btn-primary mb-2 w-100 Elements">
                                {e.name}
                            </NavLink>
                        )
                        )}
                    </ol>



                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;