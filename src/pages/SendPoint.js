import React, { useState } from 'react';
import '../Styling/sendpoint.css';

const SendPoint = () => {
    const [textValue, setTextValue] = useState('');

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleUpload = () => {
        console.log('Upload CSV clicked');
    };

    const handleDownload = () => {
        console.log('Download Sample clicked');
    };

    const handleSend = () => {
        console.log('Send clicked with text:', textValue);
    };

    return (
        <div className='sendpoint-maincontainer'>
            {/* Input */}
            <div className='header-sendpoint-container'>
                <div className="sendpoint-header">
                    <h2 className="sendpoint-title">Send Point</h2>
                    <div className="sendpoint-buttons">
                        <button className="btn btn-upload" onClick={handleUpload}>
                            Upload Excel(.csv)
                        </button>
                        <button className="btn btn-download" onClick={handleDownload}>
                            Download Sample
                        </button>
                    </div>
                </div>

                <div className="sendpoint-content">
                    <textarea
                        className="sendpoint-textarea"
                        value={textValue}
                        onChange={handleTextChange}
                        placeholder=""
                    />

                    <button className="sendpoint-send-btn" onClick={handleSend}>
                        Send
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className='sendpoint-table-container'>
                <div className='sendpoint-header'>
                    <h2 className='sendpoint-title'>History</h2>
                </div>

                <table className='sendpoint-history-table'>
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>P1234567</td>
                            <td>200</td>
                            <td>2025-02-14 13:13:00</td>
                        </tr>
                        <tr>
                            <td>P1234567</td>
                            <td>200</td>
                            <td>2025-02-14 13:13:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SendPoint;