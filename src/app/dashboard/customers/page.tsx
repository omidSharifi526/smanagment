'use client'

import React,{useState,useEffect} from 'react';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import DataGrid from '@/app/Components/DataGrid/DataGrid';
import {columns,rows} from '../../MocData/index';
import Modal from '@/app/Components/Modal/Modal';
import AddCustomer from './Components/Forms/AddCustomer/AddCustomer';


const pages = () => {
  const initialModuleState={
    hasAddButton:true,
    mainLabel:'مشتریان',
    modal:false,
    mode:null
  }
const [customerModuleState, setCustomerModuleState] = useState(initialModuleState)


  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'نام ' },
    { field: 'lastName', headerName: 'نام خانوادگی' },


  ];

  // تعریف سطرها
  const rows = [
    { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35 },
    { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },
    { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45 },
    { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16 },
    { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null },
  ];






  return (
<>
    <MainLayout 
    // hasAddButton={true}
    setModuleState={setCustomerModuleState}
    moduleDetails={customerModuleState}
    
    >
      

      {
        <DataGrid 
        rows={rows}
        columns={columns}
        handleModuleState={setCustomerModuleState}
        

        />
      }
      {
      customerModuleState?.modal &&  <Modal 
      show={customerModuleState.modal} 
      changeModalState={setCustomerModuleState}  
      mode={customerModuleState.mode}
      label={'مشتری'}
      
      >
        <AddCustomer/>

        </Modal>
      }

    </MainLayout>

   
   </>
  )
}

export default pages