import React from 'react';
import Navbar from '../Components/DataGrid/Navabr/Navbar';

const page = ({children}:any) => {
  return (
    <div>
        <Navbar/>

        {
            children
        }

    </div>
  )
}

export default page