import AssignedReportsCard from "../components/PendingReportsCard";
import Sidebar from "../components/Sidebar";
import "./Technician.css";



function AssignedReports() {


    return (
        <div id="TechContainer" >
            <p id="TechHeader">Technician Workspace</p>
            <Sidebar
                id="TechSideBar"
                role="Technician"
                elms={[
                    { name: "View pending reports", link: "/pendingReports" },
                    { name: "View assigned reports", link: "/assignedReports" }
                ]} />

            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>Check the Sidebar for available options.</p>

                <AssignedReportsCard />


        </div>
    )
}

export default AssignedReports;