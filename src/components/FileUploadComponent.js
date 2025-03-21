import React, { useState, useRef } from 'react';
import '../Styling/airdrop.css'

const FileUploadComponent = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile);
        }
    };

    const handleClick = () => {
        if (!file) {
            fileInputRef.current.click();
        }
        else {
            handleUpload();
        }
    };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            console.log('Uploading file:', file.name);
        }
    };

    return (
        <div className="upload-container">
            <input
                type="text"
                placeholder="Upload Image"
                className='upload-file'
                value={fileName}
                readOnly
                onClick={() => fileInputRef.current.click()}
                style={{
                    width:"100%",
                }}
            />
            <input
                type="file"
                ref={fileInputRef}
                className='upload-file'
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept="image/*,.pdf,.doc,.docx"
            />
            <button
                type="button"
                className='upload-button'
                onClick={handleClick}
                
            >
                Upload
            </button>
        </div>
    );
};

export default FileUploadComponent;