import React, { useState } from "react";
import FileUploadComponent from "../../components/FileUploadComponent";

const ModifyNotice = ({ airdrop }) => {
     const [titleEn, setTitleEn] = useState(airdrop.title_en || "");
     const [titleKo, setTitleKo] = useState(airdrop.title_ko || "");
     const [contentEn, setContentEn] = useState(airdrop.content_en || "");
     const [contentKo, setContentKo] = useState(airdrop.content_ko || "");

     const handleModify = () => {
          const updatedNotice = {
               title_en: titleEn,
               title_ko: titleKo,
               content_en: contentEn,
               content_ko: contentKo,
          };

          console.log("Modified Notice:", updatedNotice);
     };

     const handleDelete = () => {
          const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
          if (confirmDelete) {
               console.log("Notice deleted:", airdrop);
          }
     };

     return (
          <div>
               <div className="airdrop-modal-content">
                    <div className="form-row">
                         <div className="form-group">
                              <label>Title English</label>
                              <input
                                   type="text"
                                   value={titleEn}
                                   onChange={(e) => setTitleEn(e.target.value)}
                              />
                         </div>
                         <div className="form-group">
                              <label>Title Korean</label>
                              <input
                                   type="text"
                                   value={titleKo}
                                   onChange={(e) => setTitleKo(e.target.value)}
                              />
                         </div>
                    </div>

                    <div className="form-row">
                         <div className="form-group">
                              <label>Contents English</label>
                              <textarea
                                   rows="5"
                                   value={contentEn}
                                   onChange={(e) => setContentEn(e.target.value)}
                              ></textarea>
                         </div>
                         <div className="form-group">
                              <label>Contents Korean</label>
                              <textarea
                                   rows="5"
                                   value={contentKo}
                                   onChange={(e) => setContentKo(e.target.value)}
                              ></textarea>
                         </div>
                    </div>

                    <div className="form-row">
                         <div className="form-group banner-upload">
                              <label>Banner Upload</label>
                              <div className="upload-container">
                                   <FileUploadComponent />
                              </div>
                         </div>
                    </div>
               </div>

               <div className="form-actions">
                    <button className="modify-button" onClick={handleModify}>
                         Modify
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                         Delete
                    </button>
               </div>
          </div>
     );
};

export default ModifyNotice;
