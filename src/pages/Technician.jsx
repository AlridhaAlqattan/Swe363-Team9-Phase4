import Sidebar from "../components/Sidebar";
import "./Technician.css";
import AssignedReports from "../components/AssignedReports";

function Technician() {
    
    
    return (
        <div id="TechContainer" >
            <p id="TechHeader">Technician Workspace</p>
            <Sidebar 
            id="TechSideBar"
             role="Technician"
              elms={[
                {name:"View pending reports",link:"/pendingReports"},
              {name:"View assigned reports",link:"/assignedReports"}
              ]} />

              <AssignedReports />




        </div>
    )
}

export default Technician;