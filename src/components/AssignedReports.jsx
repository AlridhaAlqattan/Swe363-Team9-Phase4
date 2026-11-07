import { Table, Form, Badge, Button, Card } from 'react-bootstrap';
import "./assignedReports.css";
import { useState } from 'react';

function AssignedReports() {
    const [reports, setReports] = useState([
        {id: "1", name: "Report1", priority: "High", reporter:"Person1", building: "101", status: "Pending", view: "View" }
    ]);

    const [search, setSearch] = useState("");
    const [priority,setPriority] = useState("All");
    const [status,setStatus] = useState("All");

    const filteredReports = reports.filter((report) => {
        const searchMatch = report.name.toLowerCase().includes(search.toLowerCase()) || report.id.toLowerCase().includes(search.toLowerCase());
        const priorityMatch = priority === "All" || report.priority === priority;
        const statusMatch = status === "All" || report.status === status;

        return searchMatch && priorityMatch && statusMatch;
    });

    const priorityBadge = priority => {
        if (priority == "High") {return <Badge bg="danger" >High</Badge>}
        else if (priority == "Medium") {return <Badge bg="warning">Medium</Badge>}
        else if (priority == "Low") {return <Badge bg="success" >Low</Badge>}
    }

    return (
        <div id="assignedReportsContainer">


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
                            <td>{report.name}</td>
                            <td>{report.priority}</td>
                            <td>{report.reporter}</td>
                            <td>{report.building}</td>
                            <td>{priorityBadge(report.priority)}</td>
                            <td>{report.view}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default AssignedReports;