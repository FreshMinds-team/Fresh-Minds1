import React, { useState, useEffect } from 'react'

const baseURL = 'https://rshishir.pythonanywhere.com/api/qualification/'
const Qualification = ({id}) => {
    const [qualifications, setQualifications] = useState([]);
    useEffect(() => {
        const fetchQualifications = async () => {
            let response = await fetch(baseURL+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setQualifications(data)
            }
        };

        fetchQualifications();
    }, []);

    if (!qualifications) return null;
    return (
        <div className="widget education-widget">
            <h4 className="widget-title">Education</h4>
            <div className="experience-box">
                <ul className="experience-list">
                    {
                        qualifications.map((qualification, index) => {
                            return (
                                <li key={index}>
                                    <div className="experience-user">
                                        <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                        <div className="timeline-content">
                                            <a className="name">{qualification.title}</a>
                                            <div>{qualification.institution}</div>
                                            <span className="time">{qualification.date}</span>
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

export default Qualification