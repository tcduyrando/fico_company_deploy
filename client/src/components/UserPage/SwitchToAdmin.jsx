import React, {useState, useEffect, useCallback} from 'react';

import UserApprove from './UserApprove';


function UserList(props) {
    const [userDetail, setUserDetail] = useState([]);
    const [token, setToken] = useState('');
    const [isAdmin, setIsAdmin] =useState(false);
    const [id, setID] = useState('');
    // const [approve, setApprove] = useState('');
    const filterProject = useCallback((user) => {
      setUserDetail(user);
    }, []);
    
    
  // get data from api
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
            setUserDetail(userDetail)
            console.log(userDetail)
            setID(userDetail)
        }      
        );
  }
  
  //Approve role admin/user data from api 
      const approve = (id) => {
        var message = window.confirm("Do you want to approve this user to admin?");
        if (message){
          fetch( `/api/user/${id}/status`
          , {
  
            method: 'PUT',
            headers: {
              'x-access-token': token,
            },
          })   
          .then(response => {
            setUserDetail(prevUser => [
              prevUser.filter(user => user._id !== id)
            ]);
          }).then( window.location.reload())
      }
    };
      useEffect(() => {
        setToken(sessionStorage.getItem('token'))
        user()
      }, []);

    return (
        <div>         
          <UserApprove users={userDetail}
             onApprove={approve}            
          // onReject={Reject}
          /> 
        </div>
      );
}

export default UserList;