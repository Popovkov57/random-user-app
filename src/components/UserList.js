import React, { Component } from 'react'
import User from './User'
import users from '../users'

export default class UserList extends Component {
    render() {
        return (
            <>
                <h1 className='text-gray-700 text-4xl text-center'>Users</h1>
                <div className="mt-10 grid grid-cols-4 gap-6">
                    {
                        users.map(user => {
                            return (
                                <User user={user} key={user.id} />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
