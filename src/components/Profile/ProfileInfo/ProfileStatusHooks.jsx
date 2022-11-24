import React, { useEffect, useState } from 'react'

const ProfileStatusHooks = (props) => {
    const [editeMode, setEditeMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const activateEditeMode = () => {
        setEditeMode(true)
    }

    const deactivateEditeMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }

    return (
        <>
            {!editeMode &&
                <div>
                   <b>Status : </b> <span onClick={activateEditeMode}>{props.status || '========='}</span>
                </div>
            }
            {editeMode &&
                <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode} />
                </div>
            }
        </>
    )
}

export default ProfileStatusHooks