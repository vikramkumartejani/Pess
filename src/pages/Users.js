import React from "react";
import '../Styling/usersTable.css'

function Users() {
  const users = [
    {
      uid: "P1234567",
      signupType: "Apple",
      email: "test@icloud.com",
      walletAddress: "zdn235xdgnclkb2sdbda4mzf5",
      referredUser: "P6543212",
      registerDate: "2025-02-14 13:13:00",
    },
    {
      uid: "P1234565",
      signupType: "XYZ",
      email: "test@icloud3.com",
      walletAddress: "zdn235xdgnclkb2sdbda4mzf5",
      referredUser: "P6543212",
      registerDate: "2025-02-14 13:13:00",
    },
  ];

  return (
    <div className="user-container">
      <div className="user-table-container">
        <div className="user-header">
          <h2 className="user-title">Users</h2>
        </div>

        <div className="user-table-conta">
          <table className="user-table">
            <thead>
              <tr>
                <th>UID</th>
                <th>Signup Type</th>
                <th>Email</th>
                <th>Wallet Address</th>
                <th>Referred User</th>
                <th>Register Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.uid}</td>
                  <td>{user.signupType}</td>
                  <td>{user.email}</td>
                  <td className="wallet-cell">{user.walletAddress}</td>
                  <td>{user.referredUser}</td>
                  <td>{user.registerDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
