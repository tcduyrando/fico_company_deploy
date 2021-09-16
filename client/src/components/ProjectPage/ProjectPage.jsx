import React, {useState, useEffect, useCallback, useParams } from 'react';
import { Link } from 'react-router-dom';

import ProjectList from './ProjectList';



function ProjectPage() {
    const [projectDetail, setProjectDetail] = useState([]);
    const endPoint = "/api/fundraiser";
    const [token, setToken] = useState('');
    const [id, setID] = useState('');
    const filterProject = useCallback((project) => {
      setProjectDetail(project);
    }, []);


  //get data from api
  const load = (id) => {
  fetch(endPoint)
    .then(response => response.json())
    .then(data =>
      {   data.filter(project => project.id !== id)
          console.log(id)
          setProjectDetail(data)
          setID(data)
      }      
      );
}
   const Update = (id) => {
        fetch( `/api/fundraiser/${id}`
        , {

          method: 'GET',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }, 
        })   
          .then(response => {
          setProjectDetail(prevProjects => [
          prevProjects.filter(project => project._id !== id)
          ]);
        }).then(response => window.location.reload())
      
    };
//delete data from api
    const removeProject = (id) => {
      var message = window.confirm("Do you want to delete the project?");

      if (message){
        fetch( `/api/fundraiser/${id}`
        , {

          method: 'DELETE',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }, 
        })   
          .then(response => {
          setProjectDetail(prevProjects => [
          prevProjects.filter(project => project._id !== id)
          ]);
        }).then(response => window.location.reload())
      }
    };
    useEffect(() => {
      setToken(sessionStorage.getItem('token'))
      load()

    }, []);

    return (
        <div>
          
          <ProjectList  projects={projectDetail}
          onRemoveProject={removeProject}
          onUpdate={Update}/> 
        </div>
      );
}

export default ProjectPage;