import React, { useState, useRef, useEffect } from 'react';
import AddAirdropModal from './Airdrop/AddAirdropModal';
import DetailsModal from './Airdrop/DetailsModal';
import ListModal from './Airdrop/ListModal';
import '../Styling/airdrop.css'

const Airdrop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetails, setIsDetails] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedAirdrop, setSelectedAirdrop] = useState(null);
    const modalRef = useRef(null);
    const detailsModalRef = useRef(null);
    const listModalRef = useRef(null);

    const airdrops = [
        {
            round: 2,
            title_en: 'title2',
            title_ko: '제목2',
            registerDate: '2025-02-19 13:13:00',
        },
        {
            round: 1,
            title_en: 'title1',
            title_ko: '제목1',
            registerDate: '2025-02-10 10:13:00',
        }
    ];

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

    const openList = (airdrop) => {
        setSelectedAirdrop(airdrop);
        setIsListOpen(true);
    };

    const closeList = () => {
        setIsListOpen(false);
        setSelectedAirdrop(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
            if (isDetails && detailsModalRef.current && !detailsModalRef.current.contains(event.target)) {
                closeDetails();
            }
            if (isListOpen && listModalRef.current && !listModalRef.current.contains(event.target)) {
                closeList();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen, isDetails, isListOpen]);

    return (
        <div className='airdrop-maincontainer'>
            <div className='airdrop-maincontainer-header'>
                <div className='airdrop-header'>
                    <h2 className='airdrop-title'>Airdrop</h2>
                    <button className='add-airdrop-button' onClick={openModal}>Add Airdrop</button>
                </div>

                <div className='airdrop-table-container'>
                    <table className='airdrop-table'>
                        <thead>
                            <tr>
                                <th>Round</th>
                                <th>title_en</th>
                                <th>title_ko</th>
                                <th>Register date</th>
                                <th>Applicants</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {airdrops.map((airdrop) => (
                                <tr key={airdrop.round}>
                                    <td>{airdrop.round}</td>
                                    <td>{airdrop.title_en}</td>
                                    <td>{airdrop.title_ko}</td>
                                    <td>{airdrop.registerDate}</td>
                                    <td>
                                        <button className='list-button' onClick={() => openList(airdrop)}>List</button>
                                    </td>
                                    <td>
                                        <button className='detail-button' onClick={() => openDetail(airdrop)}>Detail</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Airdrop Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container height-full"ref={modalRef} >
                        <div className="modal-header">
                            <h2>Add Airdrop</h2>
                            <button className="close-button" onClick={closeModal}>×</button>
                        </div>
                       <AddAirdropModal />
                    </div>
                </div>
            )}

            {/* Details Modal */}
            {isDetails && selectedAirdrop && (
                <div className="modal-overlay">
                    <div className="modal-container height-full" ref={detailsModalRef}>
                        <div className="modal-header">
                            <h2>Modify airdrop</h2>
                            <button className="close-button" onClick={closeDetails}>×</button>
                        </div>
                       <DetailsModal airdrop={selectedAirdrop} />
                    </div>
                </div>
            )}

            {/* List Modal */}
            {isListOpen && selectedAirdrop && (
                <div className="modal-overlay-list">
                    <div className="modal-container" ref={listModalRef}>
                        <div className="modal-header">
                            <h2>Airdrop application list</h2>
                            <button className="close-button" onClick={closeList}>×</button>
                        </div>
                       <ListModal airdrop={selectedAirdrop} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Airdrop;
