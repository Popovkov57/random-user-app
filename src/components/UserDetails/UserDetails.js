import React, { useEffect, useState } from 'react'

import { useParams, useNavigate } from "react-router-dom";

import base from '../../base';

import { set, ref, onValue } from "firebase/database";

const UserDetails = () => {

  const { userId } = useParams();
  const [user, setUser] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const usersRef = ref(base, '/users');

    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      let user = {};
      if (users !== null) {
        user = users.find(user => user.id.toString() === userId.toString())
        setUser(user);
      }
    });
  }, [userId]);

  const deleteUser = () => {
    const usersRef = ref(base, '/users');

    onValue(usersRef, (snapshot) => {
      let users = snapshot.val();
      if (users !== null) {
        users = users.filter(user => user.id.toString() !== userId.toString())
      }
      set(usersRef, users);
    });
    navigate('/users');
  }

  const editUser = () => {
    navigate(`/users/edit/${userId}`)
  }

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="sm:mt-5 sm:ml-5 sm:mr-5 flex flex-row max-sm:flex-wrap rounded-xl p-4 bg-white ring-1 ring-slate-900/5 sm:basis-3/5 text-center">
          <div className="sm:basis-1/4 p-4">
            <img className="rounded-full ring-1 ring-slate-900/5 bg-white" src={user?.avatar} alt="" width="384" height="512" />
          </div>
          <div className="sm:basis-3/4 p-4 sm:ml-5">
            <div className="flex flex-col sm:text-left mt-4">
              <p className="text-4xl text-slate-700 font-medium">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-xl text-slate-500 font-medium mt-2">
                {user?.employment?.title}
              </p>
              <div className="flex flex-row max-sm:flex-wrap max-sm:text-left">
                <div className="sm:basis-1/2 ">
                  <div className="text-slate-400 flex flex-row mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className='ml-2'>{user?.email}</span>
                  </div>
                  <div className="text-slate-400 flex flex-row mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className='ml-2'>{user?.phone_number}</span>
                  </div>
                </div>
                <div className="sm:basis-1/2">
                  <div className="text-slate-400 flex flex-row mt-8 max-sm:mt-4 sm:ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className="flex flex-col ml-2">
                      <span>{user?.address?.city}, {user?.address?.state}</span>
                      <span>{user?.address?.street_address}</span>
                      <span>{user?.address?.zip_code}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-12 sm:justify-end justify-center">
                <button className='flex flex-row bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded mr-1' onClick={editUser}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  <span>Edit</span>
                </button>
                <button className='flex flex-row bg-rose-500 hover:bg-rose-700 border-rose-500 hover:border-rose-700 border-4 text-white py-1 px-2 rounded' onClick={deleteUser}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails
