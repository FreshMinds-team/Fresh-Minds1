import AuthContext from '../../Context/AuthContext'
import React, { useState, useEffect, useContext } from 'react'

const baseURL = 'https://rshishir.pythonanywhere.com/api/expertise/'
const DoctorExpertise = () => {
  let { user } = useContext(AuthContext)
  const [expertises, setexpertises] = useState([]);
    useEffect(() => {
        const fetchexpertises = async () => {
            let response = await fetch(baseURL + user.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setexpertises(data)
            }
        };

        fetchexpertises();
    }, []);

    if (!expertises) return null;
  return (
    <div className="service-list">
      <h4>Specializations</h4>
      <ul className="clearfix">
        {
          expertises.map((expertise, index) => {
            return (
              <li key={index}>{expertise.title}</li>
            )
          }
          )}
      </ul>
    </div>
  )
}

export default DoctorExpertise