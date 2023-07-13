import React  from 'react'
import { useNavigate } from 'react-router-dom';


const User = ( {user} ) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/users/details/${user.id}`);
    }

    return (
        <div className="flex flex-row rounded-xl p-4 bg-white ring-1 ring-slate-900/5 hover:bg-slate-200 cursor-pointer" onClick={() => handleClick(user.id)}>
            <div className="basis-1/4">
                <img className="w-20 h-20 rounded-full ring-1 ring-slate-900/5 bg-white" src={user.avatar} alt="" width="384" height="512" />
            </div>
            <div className="basis-3/4 p-4">
                <div className="flex flex-col text-left">
                    <p className="text-slate-700 font-medium text">
                        {user?.first_name} {user?.last_name}
                    </p>
                    <p className="text-slate-500 font-medium text-xs">
                        {user?.employment?.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default User