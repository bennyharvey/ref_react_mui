import React, { useContext, useEffect } from 'react'

import { useCommonStyles } from "../../components/Layout/styles";
import { StateContext } from "../../components/App/StateContext"

type UsersProps = {
    
}

const Users: React.FC<UsersProps> =({}) => {
    const cstyles = useCommonStyles();
    const { globalState, setGlobalState } = useContext(StateContext);
    useEffect(()=>{
        // setGlobalState({type: "asd"})
    }, [])
    return (
        <div>
            {globalState.mainMap.name}
        </div>
    )
}

export default Users