import PendingReportsCard from "../components/PendingReportsCard";
import Sidebar from "../components/Sidebar";
import "./Technician.css";




function PendingReports() {


    return (
        <div id="TechContainer" >
            <p id="TechHeader">Technician Workspace</p>
            <Sidebar
                id="TechSideBar"
                role="Technician"
                elms={[
                    { name: "View pending reports", link: "/Technician/PendingReports" },
                    { name: "View assigned reports", link: "/Technician/AssignedReports" }
                ]} />


                <PendingReportsCard />


        </div>
    )
}

export default PendingReports;