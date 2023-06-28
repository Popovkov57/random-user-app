import React, { Component } from 'react'
import User from './User'
import users from '../users'

export default class UserList extends Component {
    render() {
        return (
            <div className="mt-10 grid grid-cols-3 gap-6">
                {
                    users.map(user => {
                        return (
                            <User user={user} />
                        )
                    })
                }
            </div>
        )
    }
}
