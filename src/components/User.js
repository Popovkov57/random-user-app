import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div className="flex flex-row rounded-xl p-4 bg-white ring-1 ring-slate-900/5 hover:bg-slate-200 cursor-pointer">
                <div className="basis-1/4">
                    <img className="w-32 h-32 rounded-full ring-1 ring-slate-900/5 bg-white" src={this.props.user.avatar} alt="" width="384" height="512" />
                </div>
                <div className="basis-3/4 p-4">
                    <div className="flex flex-col text-left">
                        <div>
                            <p className="text-slate-600 font-medium">
                                {this.props.user.first_name} {this.props.user.last_name}
                            </p>
                            <p className="text-slate-400 font-medium">
                                {this.props.user.email}
                            </p>
                        </div>
                        <div className="mt-10 text-right">
                            <span class="p-1 text-slate-600 bg-slate-100 font-bold rounded-lg text-center font-medium ">{this.props.user.employment.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
