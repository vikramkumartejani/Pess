import React, { useState } from 'react';
import '../../Styling/listmodal.css'

const ListModal = ({ airdrop }) => {
    const [applicants, setApplicants] = useState([
        {
            uid: 'P123516',
            address: 'zxgmz97dsklfj562sdffsdgsdgds1',
            amount: 0.5,
            applyDate: '2025-02-10 10:13:00',
            blocked: false
        }
    ]);

    const handleBlockClick = (applicant) => {
        const confirmBlock = window.confirm('Are you block this applicant?');

        if (confirmBlock) {
            setApplicants(prev =>
                prev.map(app =>
                    app.uid === applicant.uid
                        ? { ...app, blocked: !app.blocked }
                        : app
                )
            );
        }
    };

    const downloadExcel = () => {
        // Create CSV content
        const headers = ['UID', 'Address', 'Amount', 'Apply Date', 'Blocked'];
        const csvContent = [
            headers.join(','),
            ...applicants.map(applicant => [
                applicant.uid,
                applicant.address,
                applicant.amount,
                applicant.applyDate,
                applicant.blocked ? 'Yes' : 'No'
            ].join(','))
        ].join('\n');

        // Create a Blob with the CSV content
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        
        // Create a temporary link element
        const link = document.createElement('a');
        
        // Set link attributes
        link.setAttribute('href', url);
        link.setAttribute('download', `applicants_round_${airdrop.round}_${new Date().toISOString().split('T')[0]}.csv`);
        
        // Append link to body (required for Firefox)
        document.body.appendChild(link);
        
        // Trigger download
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        console.log('Excel file downloaded successfully!');
    };

    return (
        <div className="list-modal">
            <div className="list-modal-info">
                <div className="list-modal-header-item">
                    <span className="list-modal-label">round : </span>
                    <span className="list-modal-value">{airdrop.round}</span>
                </div>
                <div className="list-modal-header-item">
                    <span className="list-modal-label">type : </span>
                    <span className="list-modal-value">point</span>
                </div>
            </div>

            <div className="list-modal-table-container">
                <table className="list-modal-table">
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Address</th>
                            <th>Amount</th>
                            <th>Apply date</th>
                            <th>Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map((applicant) => (
                            <tr key={applicant.uid}>
                                <td>{applicant.uid}</td>
                                <td>{applicant.address}</td>
                                <td>{applicant.amount}</td>
                                <td>{applicant.applyDate}</td>
                                <td>
                                    <button
                                        className={`block-button ${applicant.blocked ? 'blocked' : ''}`}
                                        onClick={() => handleBlockClick(applicant)}
                                    >
                                        block
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="download-container">
                <button className="download-button" onClick={downloadExcel}>
                    Download Excel(csv)
                </button>
            </div>
        </div>
    );
};

export default ListModal;