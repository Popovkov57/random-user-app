import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <figure className="md:flex rounded-xl p-4 bg-white ring-1 ring-slate-900/5">
                <img className="w-32 h-32 rounded-full ring-1 ring-slate-900/5" src={this.props.user.avatar} alt="" width="384" height="512" />
                <div className="p-4 md:text-left">
                    <figcaption className="font-medium">
                        <div className="text-slate-700">
                            {this.props.user.first_name} {this.props.user.last_name}
                        </div>
                        <div className="text-slate-400">
                            {this.props.user.email}
                        </div>
                        <p class="p-1 mt-4 bg-slate-100 font-bold rounded-lg text-center">{this.props.user.employment.title}</p>
                    </figcaption>
                </div>
            </figure>
        )
    }
}
