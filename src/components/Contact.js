import React from 'react'
import './Contact.css'

const name = 'Jean-Claude Tabouret'
const avatar = 'https://randomuser.me/api/portraits/men/85.jpg'
const online = true

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className="status-online" />
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact



