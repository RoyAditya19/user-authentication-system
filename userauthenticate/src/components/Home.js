import React from 'react';
import UserDetails from './UserDetails';

const Home = (props) => {
  
const {showAlert} = props;    //as showalert was passed as a props and then using the de-structring method showalert was taken from the props.
  return (
    <>
<UserDetails showAlert={showAlert} />
    </>
  )
}

export default Home
