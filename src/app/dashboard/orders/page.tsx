'use client'
import React,{useState,useEffect} from 'react';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import DataGrid from '@/app/Components/DataGrid/DataGrid';
import {columns,rows} from '../../MocData/index';
import Modal from '@/app/Components/Modal/Modal';


const page = () => {
  const initialModuleState={
    hasAddButton:true,
    mainLabel:'سفارشات',
    modal:false,
    mode:null
  }
  const [orderModuleState, setOrderModuleState] = useState(initialModuleState);
  const[moduleDetails,setModuleDetails]=useState();


  useEffect(() => {
    
    console.log(orderModuleState)
  
  }, [orderModuleState])
  




  return (

   <>
    <MainLayout 
    // hasAddButton={true}
    setModuleState={setOrderModuleState}
    moduleDetails={orderModuleState}
    
    >
      

      {
        <DataGrid 
        rows={rows}
        columns={columns}
        handleModuleState={setOrderModuleState}
        

        />
      }
      {
      orderModuleState?.modal &&  <Modal 
      show={orderModuleState.modal} 
      changeModalState={setOrderModuleState}  
      mode={orderModuleState.mode}
      label={'سفارش'}
      
      />
      }

    </MainLayout>

   
   </>

  )
}

export default page