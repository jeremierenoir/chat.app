import React from 'react'
import Contact from './Contact'
import './ContactList.css'

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

const ContactList = () => {
    return (
        <div>
            <ul>
                {users.map(item => (
                <li key= {users.name} > <Contact name={item.name} avatar={item.avatar} online={item.online} /></li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList