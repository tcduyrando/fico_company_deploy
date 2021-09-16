import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

import User from './User';


function UserList(props) {
    const [userDetail, setUserDetail] = useState([]);
    const [token, setToken] = useState('');
    const filterUser = useCallback((user) => {
      setUserDetail(user);
    }, []);

    
  //get data from api
  const user = (id) => {
    fetch( `/api/user/`
    , {
      method: 'GET',
      headers: {
      }, 
    })   
      .then(response => response.json())
      .then(userDetail => {
            userDetail.filter(user => user.id !== id)
            console.log(userDetail)
            setUserDetail(userDetail)
      
        }      
        );
  }
  
  //delete data from api
      const RemoveUser = (id) => {
        var message = window.confirm("Do you want to delete the user?");
  
        if (message){
          fetch( `/api/user/${id}`
          , {
  
            method: 'DELETE',
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }, 
          })   
            .then(response => {
              setUserDetail(prevUser => [
            prevUser.filter(user => user.id !== id)
            ]);
          }).then(response => window.location.reload())
        }
      };
      useEffect(() => {
        setToken(sessionStorage.getItem('token'))
        user()
  
      }, []);

    return (
        <div>         
          <User users={userDetail}
          onRemoveUser={RemoveUser}/> 
        </div>
      );
}

export default UserList;