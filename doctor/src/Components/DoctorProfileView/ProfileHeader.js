import React from 'react'

const ProfileHeader = ({user}) => {
  const url = "https://rshishir.pythonanywhere.com"
  return (
    <div className="profile-header">
      <div className="row align-items-center">
        <div className="col-auto profile-image">
          <a href="#">
            <img className="rounded-circle" alt="User Image" src={url+user.profilepic} />
          </a>
        </div>
        <div className="col ml-md-n2 profile-user-info">
          <h4 className="user-name mb-0">{user.first_name} {user.last_name}</h4>
          <h6 className="text-muted">{user.email}</h6>
          <div className="user-Location"><i className="fa fa-map-marker"></i> {user.address}</div>
          <div className="user-Location"><i className="fa fa-phone"></i> {user.phone}</div>
          <div class="about-text">{user.description}</div>
        </div>
        <div className="col-auto profile-btn">

        </div>
      </div>
    </div>
  )
}

export default ProfileHeader