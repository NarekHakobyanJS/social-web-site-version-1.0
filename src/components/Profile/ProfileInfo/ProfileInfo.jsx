import React, { useState } from 'react'
import ProfileStatusHooks from './ProfileStatusHooks'
import s from "../profile.module.css";
import ProfileDataForm from './ProfileDataForm'

function ProfileInfo({ profile, savePhoto, updateStatus, isOwner, status, saveProfile }) {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <div>
            <img src="https://cdn.vox-cdn.com/thumbor/OyYWBv0iyAce-f2iHHONvv3jZtE=/0x0:4256x2832/1200x800/filters:focal(1788x1076:2468x1756)/cdn.vox-cdn.com/uploads/chorus_image/image/70830023/175678790.0.jpg" width={900} />
        </div>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <img src={profile.photos.large || 'https://www.pngitem.com/pimgs/m/2-23925_male-computer-user-computer-user-clipart-hd-png.png'} width={250} />
            {!isOwner && <input type='file' onChange={onMainPhotoSelected} />}

            {editMode
                ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile}
                    isOwner={isOwner}
                    gotoEditeMode={() => { setEditMode(true) }} />
            }

            <div>
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, gotoEditeMode }) => {
    return (
        <div>
            <div>
                {!isOwner && <button onClick={gotoEditeMode}>Edit</button>}
            </div>
            <div>
                <h3>{profile.fullName}</h3>
            </div>
            <div>
                <b> Looking for a job :  </b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b> My Profetional skills :  </b>{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b> About me :  </b>{profile.aboutMe}
            </div>
            <div>
                <b> Contatcts :  </b>{Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}



const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}

export default ProfileInfo