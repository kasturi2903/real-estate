import React from 'react'
import List from '../../compoenents/list/list';
import Chat from '../../compoenents/chat/chat';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import "./profilePage.scss"
function ProfilePage() {
  const {updateUser,currentUser} = useContext(AuthContext)
  console.log(updateUser)
  console.log(currentUser)
  // const {currentUser,updateUser}=useContext(AuthContext)
  // console.log(currentUser)

  return (
    <div className='profile'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span className='span-img'>Avatar:
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" className='span-img'/>
              </span>
            
            <span>Username : <b>{currentUser.username}</b></span>
            <span>Email-ID : <b>{currentUser.email}</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chat-container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;