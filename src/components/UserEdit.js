import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { set, ref, onValue } from "firebase/database";
import base from '../base';


const UserEdit = () => {

    const { userId } = useParams();
    const [user, setUser] = useState()
    const [users, setUsers] = useState()
    const navigate = useNavigate();
    const usersRef = ref(base, '/users');

    useEffect(() => {
        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            let user = {};
            setUsers(users)
            if (users !== null) {
                user = users.find(user => user.id.toString() === userId.toString())
                setUser(user);
            }
        });
    }, [userId]);

    const cancel = () => {
        navigate(`/users/details/${userId}`)
    }

    const updateUser = () => {
        let usersUpdated = [];
        usersUpdated = users.map(u => {
            if (u.id.toString() === userId.toString()) {
                u = user;
            }
            return u
        })
        set(usersRef, usersUpdated);
        navigate(`/users/details/${userId}`)
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let tabName = name.split('.');
        let updatedUser = { ...user};
        let newObject = {};
        let newObjectKey = "";

        if (tabName.length > 1) {
            if (updatedUser[tabName[0]]) {
                setToValue(updatedUser, value, name)
            } else {
                newObject = writeObject(updatedUser, value, name)
                newObjectKey = Object.keys(newObject)[0]
                updatedUser[newObjectKey] = newObject[newObjectKey]
            }
        } else {
            updatedUser[name] = value;
        }
        setUser(updatedUser)
        
    }

    const setToValue = (obj, value, path) => {
        let i;
        path = path.split('.');
        for (i = 0; i < path.length - 1; i++) {
            obj = obj[path[i]];
        }
        obj[path[i]] = value;
    }

    const writeObject = (object, value, path) => {
        path = path.split('.');
        return path.reduceRight((obj, next, idx, fullPath) => {
            if (idx + 1 === fullPath.length) {
                return { [next]: value }
            } else {
                return { [next]: obj }
            }
        }, object);
    }

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="mt-5 ml-5 mr-5 flex flex-row rounded-xl p-2 bg-white ring-1 ring-slate-900/5 basis-3/5 text-center">
                    <div className="basis-1/4 p-4">
                        <img className="rounded-full ring-1 ring-slate-900/5 bg-white" src={user?.avatar} alt="" width="384" height="512" />
                    </div>
                    <div className="basis-3/4 p-4 ml-5 mt-5 mr-5">
                        <div className="flex flex-col text-left">
                            <form className="w-full">
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            First Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="first_name"
                                            type="text"
                                            placeholder="Jane"
                                            defaultValue={user?.first_name}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="last_name"
                                            type="text"
                                            placeholder="Doe"
                                            defaultValue={user?.last_name}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Employment Title
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="employment.title"
                                            type="text"
                                            placeholder="Developer"
                                            defaultValue={user?.employment?.title}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="email"
                                            type="email"
                                            placeholder="jane@doe.com"
                                            defaultValue={user?.email}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="phone_number"
                                            type="text"
                                            placeholder="+7-6 760-610-4694"
                                            defaultValue={user?.phone_number}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Address
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="address.street_address"
                                            type="email"
                                            placeholder="9199 Will Drives"
                                            defaultValue={user?.address?.street_address}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            City
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="address.city"
                                            type="text"
                                            placeholder="Port Orville"
                                            defaultValue={user?.address?.city}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            State
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="address.state"
                                            type="text"
                                            placeholder="Colorado"
                                            defaultValue={user?.address?.state}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Zip
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="address.zip_code"
                                            type="text"
                                            placeholder="90210"
                                            defaultValue={user?.address?.zip_code}
                                            onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                            </form>
                            <div className="flex flex-row mt-6 justify-end">
                                <button className='flex flex-row bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded' onClick={updateUser}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span>Save</span>
                                </button>
                                <button className='flex flex-row border-transparent border-4 text-teal-500 hover:text-teal-800 py-1 px-2 rounded' onClick={cancel}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span>Cancel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEdit