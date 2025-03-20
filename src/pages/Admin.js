import React, { useState, useRef, useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";
import '../Styling/admin.css';

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [admins, setAdmins] = useState([
        { level: 'super', email: 'test', registerDate: '2025-02-14 13:13:00' },
        { level: 'normal', email: 'test2', registerDate: '2025-02-19 13:13:00' }
    ]);
    const [newAdmin, setNewAdmin] = useState({
        level: 'normal',
        email: '',
        password: ''
    });

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAdmin({
            ...newAdmin,
            [name]: value
        });
    };

    const saveAdmin = () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

        const newAdminWithDate = {
            ...newAdmin,
            registerDate: formattedDate
        };

        setAdmins([...admins, newAdminWithDate]);
        setNewAdmin({
            level: 'normal',
            email: '',
            password: ''
        });
        closeModal();
    };

    return (
        <div className='admin-container'>
            <div className='admin-table-container'>
                <div className='admin-header'>
                    <h2 className='admin'>Admin</h2>
                    <button className='add-admin-btn' onClick={openModal}>Add admin</button>
                </div>

                <table className='admin-table'>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Email</th>
                            <th>Register date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={index}>
                                <td>{admin.level}</td>
                                <td>{admin.email}</td>
                                <td>{admin.registerDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className='modal-backdrop'>
                    <div className='modal' ref={modalRef}>
                        <div className='modal-header'>
                            <h3>Add admin</h3>
                            <button className='close-btn' onClick={closeModal}><RxCross1 /></button>
                        </div>
                        <div className='modal-content'>
                            <div className='form-group'>
                                <label>Level</label>
                                <select
                                    name="level"
                                    value={newAdmin.level}
                                    onChange={handleInputChange}
                                >
                                    <option value="normal">normal</option>
                                    <option value="super">super</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className='admin-input'
                                    value={newAdmin.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className='admin-input'
                                    value={newAdmin.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button className='save-btn' onClick={saveAdmin}>save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;