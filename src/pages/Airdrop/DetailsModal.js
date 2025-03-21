import React from 'react'
import Calendar from '../../components/Calendar';
import FileUploadComponent from '../../components/FileUploadComponent';

const DetailsModal = () => {
    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you delete this Airdrop round?');
        
        // If user clicked OK
        if (confirmDelete) {
          console.log('Item deleted');
        }
      };
    return (
        <form>
            <div className='airdrop-modal-content'>
                <h4 className='rounded-title'>Round : 3</h4>
                <div className="form-row">
                    <div className="form-group">
                        <label>Payment type</label>
                        <select defaultValue="">
                            <option value="" disabled>Point</option>
                            <option value="point">Point</option>
                            <option value="token">Token</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Payment Quantity</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Start date</label>
                        <Calendar/>
                    </div>
                    <div className="form-group">
                        <label>End date</label>
                        <Calendar/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Title English</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Title Korean</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Contents English</label>
                        <textarea rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Contents Korean</label>
                        <textarea rows="5"></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group banner-upload">
                        <label>Banner upload</label>
                        <div className="upload-container">
                        <FileUploadComponent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button className="modify-button">Modify</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </form>
    )
}

export default DetailsModal