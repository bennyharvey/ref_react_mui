import React from 'react'

import { useCommonStyles } from "../../components/Layout/styles";

type UsersProps = {
    
}

const Users: React.FC<UsersProps> =({}) => {
    const cstyles = useCommonStyles();

    return (
        <div>
            Users
        </div>
    )
}

export default Users