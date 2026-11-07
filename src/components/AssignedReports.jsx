import { Table, Form, Badge, Button, Card } from 'react-bootstrap';
import "./assignedReports.css";
import { useState } from 'react';
import {Link} from 'react-router-dom';


function AssignedReports() {
    const [reports, setReports] = useState([
        { id: "1", name: "Report1", priority: "High", reporter: "Person1", building: "101", status: "Pending", view: "View" },
        { id: "2", name: "Report2", priority: "Medium", reporter: "Person2", building: "102", status: "Resolved", view: "View" },
        { id: "3", name: "Report3", priority: "Low", reporter: "Person3", building: "103", status: "Pending", view: "View" },
        { id: "4", name: "Report4", priority: "High", reporter: "Person4", building: "104", status: "Resolved", view: "View" },
        { id: "5", name: "Report5", priority: "Medium", reporter: "Person5", building: "105", status: "Pending", view: "View" },
        { id: "6", name: "Report6", priority: "Low", reporter: "Person6", building: "106", status: "Resolved", view: "View" },
        { id: "7", name: "Report7", priority: "High", reporter: "Person7", building: "107", status: "Pending", view:"View" },
        { id: "8", name: "Report8", priority: "Medium", reporter: "Person8", building: "108", status: "Assigned", view:"View" }
    ]);

    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("All");
    const [status, setStatus] = useState("All");

    const filteredReports = reports.filter((report) => {
        const searchMatch = report.name.toLowerCase().includes(search.toLowerCase()) || report.id.toLowerCase().includes(search.toLowerCase());
        const priorityMatch = priority === "All" || report.priority === priority;
        const statusMatch = status === "All" || report.status === status;

        return searchMatch && priorityMatch && statusMatch;
    });

    const priorityBadge = priority => {
        if (priority == "High") { return <Badge bg="danger" >High</Badge> }
        else if (priority == "Medium") { return <Badge bg="warning">Medium</Badge> }
        else if (priority == "Low") { return <Badge bg="success" >Low</Badge> }
    }

    return (
        <div id="assignedReportsContainer">



        <Card style={{width:"70%", borderRadius:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",gap:"1rem"}}>
            <Form.Control placeholder="Search by report name of ID" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </Form.Select>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Assigned">Assigned</option>
                <option value="Resolved">Resolved</option>
            </Form.Select>
            </div>
            <Table>

                <thead>
                    <tr>
                        <th>Report</th>
                        <th>Priority</th>
                        <th>Reporter</th>
                        <th>Building</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.map((report) => (
                        <tr>
                            <td>{report.id} - {report.name}</td>
                            <td>{priorityBadge(report.priority)}</td>
                            <td>{report.reporter}</td>
                            <td>{report.building}</td>
                            <td>{report.status}</td>
                            <td>{<Link to={`/pendingReports/${report.id}`}>View</Link>
                                }</td>
                        </tr>
                    ))}
                </tbody>
                
            </Table>
            <div style={{fontWeight:"bold",padding:"0.5rem"}}>Showing {filteredReports.length} of {reports.length} </div>
                        </Card>
        </div>
    )
}

export default AssignedReports;