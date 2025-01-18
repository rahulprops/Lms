import React from 'react'
import HeroSection from '../student/HeroSection'
import Courses from '../student/Courses'
import MyLearning from '../student/MyLearning'
import UserProfile from '../student/UserProfile'

const ShowUserSide = () => {
  return (
    <>
        <HeroSection/>
        <Courses/>
        <MyLearning/>
        <UserProfile/>
    </>
  )
}

export default ShowUserSide