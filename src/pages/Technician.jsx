import Sidebar from "../components/Sidebar";
import "./Technician.css";

function Technician() {

    
    
    return (
        <div id="TechContainer" >
            <p id="TechHeader">Technician Workspace</p>
            <Sidebar 
            id="TechSideBar"
             role="Technician"
              elms={[
                {name:"View pending reports",link:"PendingReports"},
              {name:"View assigned reports",link:"AssignedReports"}
              ]} />

              <p style={{textAlign:"center", fontWeight:"bold",fontSize:"30px"}}>Check the Sidebar for available options.</p>




        </div>
    )
}

export default Technician;