import React from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
function App() {

const [profiles, setProfiles ]= useLocalStorage("profilles", [])

const updateProfiles = (profile)=>{
  let arr =profiles;
  arr.push(profile);
  setProfiles([...arr]);
};


  return (
    <div className='app'>
    <h1>Profile Maker</h1>
     <div>
     <ProfileForm submit={updateProfiles}/>

    <hr/>
    <div className='list'>
    {profiles.map((person,index)=>(
      <ProfileCard key={index} card={person}/>
    ))}
    </div>
    </div>
    </div>
  )
}

export default App