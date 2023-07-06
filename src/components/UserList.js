import React, { useState, useEffect } from 'react'
import User from './User'
import base from '../base'
import { ref, set, onValue } from "firebase/database"
import { TailSpin } from 'react-loader-spinner'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(true)

        const usersRef = ref(base, '/users');

        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            if (users !== null) {
                setUsers(users)
                setLoader(false)
            }
        });
    }, []);

    const loadUser = () => {
        setLoader(true)
        let usersRef = ref(base, '/');
        let url = 'https://random-data-api.com/api/v2/users?size=10';
        fetch(url).then(res => res.json()).then(users => {
            set(usersRef, {
                users: users
            });
            setUsers(users)
            setLoader(false)
        })
    }

    return (

        <div>
            <div className="mt-10 grid grid-cols-4 gap-6">
            {
                loader ? 
                    <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        wrapperStyle={{ position: "fixed", left: "50%", transform: "translate(-50%, -50%)" }}
                    />
                :   
                    users.map(user => { return (<User user={user} key={user.id} />) })
                    
            }
            </div>
            <div className="text-center">                
                <button className='bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-20' onClick={loadUser}>
                    Load random users
                </button>
            </div>
        </div>
    )
}

export default UserList
