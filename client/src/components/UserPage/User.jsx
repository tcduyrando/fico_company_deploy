import React from 'react';
import {Button} from 'react-bootstrap';
import './user.css';

const User = props => {
  return (
    <section>
      <h2>Loaded User/Admin List</h2>
      <table id="customers">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>
          {props.users.map((p) => (       
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.dob}</td>
              {!p.isAdmin &&
              <td> Free Member</td>}
              {p.isAdmin &&
              <td> Administrator</td>}
               
              <td><Button variant="outline-dark" onClick={props.onRemoveUser.bind(this, p._id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default User;