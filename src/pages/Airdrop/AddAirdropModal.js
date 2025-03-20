import React from 'react'
import Calendar from '../../components/Calendar'

const AddAirdropModal = () => {
    return (
        <form>
            <div className='airdrop-modal-content'>
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
                        <input type="date" />
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
                            <input type="text" placeholder="Upload Image" readOnly className='upload-file' />
                            <button type="button" className="upload-button">Upload</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button className="save-button">save</button>
            </div>
        </form>
    )
}

export default AddAirdropModal