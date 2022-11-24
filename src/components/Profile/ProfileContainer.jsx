import React, { useEffect } from 'react';
import Profile from './Profile';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer"
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        props.getUserProfile(id)
    }, [])

    useEffect(() => {
        props.getStatus(id)
    }
        , [])

    if (!id) {
        return navigate('/login')
    }
    return (
        <Profile {...props}
            isOwner={!id}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            />
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withAuthRedirect,
)(ProfileContainer)


