import AuthContext from '../../Context/AuthContext'
import React, { useState, useEffect, useContext } from 'react'

const baseURL = 'https://rshishir.pythonanywhere.com/api/experience/'
const DoctorExperience = () => {
    let { user } = useContext(AuthContext)
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        const fetchExperiences = async () => {
            let response = await fetch(baseURL+user.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setExperiences(data)
            }
        };

        fetchExperiences();
    }, []);

    if (!experiences) return null;
  return (
    <div>
        <h4 className="widget-title">Work & Experience</h4>
            <div className="experience-box">
                <ul className="experience-list">
                    {
                        experiences.map((experience, index) => {
                            return (
                                <li key={index}>
                                    <div className="experience-user">
                                        <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                        <div className="timeline-content">
                                            <a className="name">{experience.title}</a>
                                            <span className="time">{experience.hospital}</span>
                                            <span className="time">{experience.start_date} to {experience.start_date}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        )}
                </ul>
            </div>
    </div>
  )
}

export default DoctorExperience