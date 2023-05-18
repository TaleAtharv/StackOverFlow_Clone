import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Avatar from '../../Avatar/Avatar'
import Leftsidebar from '../../Leftsidebar/Leftsidebar'
import { FaBirthdayCake, FaMapPin } from 'react-icons/fa'
import moment from 'moment'
import { useState } from 'react'
import ProfileBio from './ProfileBio'
import { FaPen } from 'react-icons/fa'
import EditProfileForm from './EditProfileForm'
import './UserProfile.css'
import Location from '../../Location/Location'


const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)




    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className="user-details">
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='
                            30px'>
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p>
                                    <FaBirthdayCake /> Joined {moment(currentProfile?.joinedOn).fromNow()}
                                </p>

                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                    <FaPen /> Edit Profile
                                </button>
                            )
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                            ) : (
                                <ProfileBio currentProfile={currentProfile} />
                            )
                        }
                        {
                            currentUser?.result._id === id && (
                                <div className='ko'>
                                    <h3><FaMapPin/>Location</h3>
                                    <Location />
                                </div>)}
                    </>
                </section>
            </div>
        </div>
    )
}

export default UserProfile
