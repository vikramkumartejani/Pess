import React, { useState, useRef, useEffect } from "react";
import AddNotice from "./Notice/AddNotice";
import ModifyNotice from "./Notice/ModifyNotice";

function Notice() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [selectedAirdrop, setSelectedAirdrop] = useState(null);
  const modalRef = useRef(null);
  const detailsModalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDetail = (airdrop) => {
    setSelectedAirdrop(airdrop);
    setIsDetails(true);
  };

  const closeDetails = () => {
    setIsDetails(false);
    setSelectedAirdrop(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeModal();
      }
      if (
        isDetails &&
        detailsModalRef.current &&
        !detailsModalRef.current.contains(event.target)
      ) {
        closeDetails();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, isDetails]);

  return (
    <div className="admin-container">
      <div className="airdrop-maincontainer-header">
        <div className="airdrop-header">
          <h2 className="airdrop-title">Notice</h2>
          <button className="add-airdrop-button" onClick={openModal}>
            Add notice
          </button>
        </div>
        <div className="airdrop-table-container">
          <table className="airdrop-table">
            <thead>
              <tr>
                <th>title_en</th>
                <th>title_ko</th>
                <th>Register date</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title1</td>
                <td>제목1</td>
                <td>2025-02-14 13:13:00</td>
                <td>
                  <button
                    className="detail-button"
                    onClick={() =>
                      openDetail({
                        title_en: "title1",
                        title_ko: "제목1",
                        register_date: "2025-02-14 13:13:00",
                      })
                    }
                  >
                    Detail
                  </button>
                </td>
              </tr>
              <tr>
                <td>title2</td>
                <td>제목2</td>
                <td>2025-02-14 13:13:00</td>
                <td>
                  <button
                    className="detail-button"
                    onClick={() =>
                      openDetail({
                        title_en: "title2",
                        title_ko: "제목2",
                        register_date: "2025-02-14 13:13:00",
                      })
                    }
                  >
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Notice Modal */}
      {isModalOpen && (
        <div className="modal-overlay-notice">
          <div className="modal-container height-full" ref={modalRef}>
            <div className="modal-header">
              <h2>Add notice</h2>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
            </div>
            <AddNotice />
          </div>
        </div>
      )}

      {/* Modify Notice Modal */}
      {isDetails && selectedAirdrop && (
        <div className="modal-overlay-notice">
          <div className="modal-container height-full" ref={detailsModalRef}>
            <div className="modal-header">
              <h2>Modify notice</h2>
              <button className="close-button" onClick={closeDetails}>
                ×
              </button>
            </div>
            <ModifyNotice airdrop={selectedAirdrop} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;
