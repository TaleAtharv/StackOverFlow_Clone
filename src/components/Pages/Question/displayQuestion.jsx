import React from 'react'
import Leftsidebar from '../../Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Rightsidebar/Rightsidebar'
import QuestionDetails from './QuestionDetails'

const displayQuestion = () => {
    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <QuestionDetails />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default displayQuestion
