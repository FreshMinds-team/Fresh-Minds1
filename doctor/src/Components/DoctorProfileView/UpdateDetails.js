import React,{useContext,useState,useEffect} from 'react'
import AuthContext from '../../Context/AuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateDetails = ({user}) => {
    const {authTokens } = useContext(AuthContext)
    const navigate = useNavigate()
    
    let updateDoctor = (e) => {
        e.preventDefault()
        let form_data = new FormData();
        if (e.target.description.value){
            form_data.append('description', e.target.description.value)
        }
        if (e.target.phone.value){
            form_data.append('phone', e.target.phone.value)
        }
        if (e.target.address.value){
            form_data.append('address', e.target.address.value)
        }
        if (e.target.profilepic.files[0]){
            form_data.append('profilepic', e.target.profilepic.files[0])
        }

        axios.post('https://rshishir.pythonanywhere.com/api/doctor/partial/'+user.id, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
            .then(res => {
                navigate("/redirect");
            })
            .catch(err => console.log(err))
    }
    if (!user) return null
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Update Details</h5>
                <div class="row">
                    <div class="col-md-10 col-lg-6">
                        <form onSubmit={updateDoctor}>
                            <div class="form-group">
                                <label>Phone number</label>
                                <input type='text' name='phone' className='form-control' placeholder={user.phone}/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" name='address' class="form-control" placeholder={user.address}/>
                            </div>
                            <div class="form-group">
                                <label>Profile Picture</label>
                                <input type="file" name="profilepic" accept="image/png, image/jpeg" className="form-control" />
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea name='description' class="form-control" placeholder={user.description}/>
                            </div>
                            <button class="btn btn-primary" type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateDetails