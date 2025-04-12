import React from 'react'
import FileUploadComponent from '../../components/FileUploadComponent'

const AddNotice = () => {
     return (
          <div>
          <div className='airdrop-modal-content'>
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
              <button className="save-button">save</button>
          </div>
      </div>
     )
}

export default AddNotice