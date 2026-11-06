import { Table, Form, Badge, Button, Card } from 'react-bootstrap';
import "./assignedReports.css";
import { useState } from 'react';

function AssignedReports() {
    const [reports, setReports] = useState([]);

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
                    {reports.map((report) => (
                        <tr>
                            <td>{report.name}</td>
                            <td>{report.priority}</td>
                            <td>{report.reporter}</td>
                            <td>{report.building}</td>
                            <td>{report.status}</td>
                            <td>{report.view}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default AssignedReports;