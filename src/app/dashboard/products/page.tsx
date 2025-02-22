'use client'

import React,{useState,useEffect} from 'react';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import DataGrid from '@/app/Components/DataGrid/DataGrid';
import {columns,rows} from '../../MocData/index';
import Modal from '@/app/Components/Modal/Modal';
import AddProduct from './components/Forms/AddProduct/AddProduct';


const page = () => {

  const initialModuleState={
    hasAddButton:true,
    mainLabel:'محصولات',
    modal:false,
    mode:null
  }
  const [productModuleState, setProductModuleState] = useState(initialModuleState);

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
        setModuleState={setProductModuleState}
        moduleDetails={productModuleState}
        
        >
          
    
          {
            <DataGrid 
            rows={rows}
            columns={columns}
            handleModuleState={setProductModuleState}
            
    
            />
          }
          {
          productModuleState?.modal &&  <Modal 
          show={productModuleState.modal} 
          changeModalState={setProductModuleState}  
          mode={productModuleState.mode}
          label={'محصول'}
          
          >
            {/* <AddCustomer/> */}
            <AddProduct/>
    
            </Modal>
          }
    
        </MainLayout>
    
       
       </>
      )
}

export default page