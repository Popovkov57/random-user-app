import React, { Component } from 'react'

export default class User extends Component {

    handleClick = (userId) => {
        window.location.href = `/user/${userId}`
    }

    render() {
        return (
            <div className="flex flex-row rounded-xl p-4 bg-white ring-1 ring-slate-900/5 hover:bg-slate-200 cursor-pointer" onClick={() => this.handleClick(this.props.user.id)}>
                <div className="basis-1/4">
                    <img className="w-32 h-32 rounded-full ring-1 ring-slate-900/5 bg-white" src={this.props.user.avatar} alt="" width="384" height="512" />
                </div>
                <div className="basis-3/4 p-4">
                    <div className="flex flex-col text-left">
                        <div>
                            <p className="text-slate-700 font-medium">
                                {this.props.user.first_name} {this.props.user.last_name}
                            </p>
                            <p className="text-slate-500 font-medium">
                                {this.props.user.employment.title}
                            </p>
                            <div className="text-slate-400 flex mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                                <span>{this.props.user.address.city}, {this.props.user.address.state}</span>
                            </div>
                        </div>
                        <div className="mt-2 text-right">
                            <span className="p-1 text-slate-600 bg-slate-100 font-bold rounded-lg text-center font-medium ">{this.props.user.employment.key_skill}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
