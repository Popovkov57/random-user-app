import React, { Component } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class User extends Component {

    handleClick = (userId) => {
        this.props.router.navigate(`/users/${userId}`)
    }

    render() {
        return (
            <div className="flex flex-row rounded-xl p-4 bg-white ring-1 ring-slate-900/5 hover:bg-slate-200 cursor-pointer" onClick={() => this.handleClick(this.props.user.id)}>
                <div className="basis-1/4">
                    <img className="w-24 h-24 rounded-full ring-1 ring-slate-900/5 bg-white" src={this.props.user.avatar} alt="" width="384" height="512" />
                </div>
                <div className="basis-3/4 p-4">
                    <div className="flex flex-col text-left">
                        <p className="text-slate-700 font-medium text-xl">
                            {this.props.user.first_name} {this.props.user.last_name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {this.props.user.employment.title}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(User)