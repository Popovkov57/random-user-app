import React, { useState, useEffect } from 'react'
import User from './User'
import base from '../base'
import { ref, set, onValue } from "firebase/database"
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

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

    const createUser = () => {
        navigate('/users/new');
    }

    return (

        <div>
            <div className="text-right">
                <button className='border-transparent border-4 text-teal-500 hover:text-teal-800 rounded text-right' onClick={createUser}>
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <span>Create Users</span>
                    </div>
                </button>
            </div>
            <div className="mt-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                {
                    loader ?
                        <div className="mb-12 mt-12">
                            <TailSpin
                                height="80"
                                width="80"
                                color="#4fa94d"
                                wrapperStyle={{ position: "fixed", left: "50%", transform: "translate(-50%, -50%)" }}
                            />
                        </div>
                        :
                        users.map(user => { return (<User user={user} key={user.id} />) })

                }
            </div>
            <div className="text-center">
                <button className='bg-teal-400 hover:bg-teal-600 text-white py-2 px-4 rounded mt-10' onClick={loadUser}>
                    Load random users
                </button>
            </div>
        </div>
    )
}

export default UserList
