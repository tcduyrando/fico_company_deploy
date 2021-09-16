import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './ProjectList.css';

const ProjectList = props => {
  return (
    <section>
      <h2>Loaded Project List</h2>
      <table id="customers">
        <thead>
        <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Fund Type</th>
            <th>Donation </th>
            <th>Fundraising goals</th>
        </tr>
        </thead>
        <tbody>
          {props.projects.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.name}</td>
              <td>{p.fundType}</td>
              <td>{p.donate}</td>
              <td>{p.donaterequire}</td>
              
              <td>
              <Link to={/admin/ + /updateFundraiser/ + p._id} key={p._id} >
                <Button variant="primary" onClick={props.onUpdate.bind(this, p._id)}>Update</Button>
              </Link>
              </td>
              <td><Button variant="outline-dark" onClick={props.onRemoveProject.bind(this, p._id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectList;