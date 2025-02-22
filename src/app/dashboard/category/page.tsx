'use client'

import React,{useState,useEffect} from 'react';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import DataGrid from '@/app/Components/DataGrid/DataGrid';
import {columns,rows} from '../../MocData/index';
import Modal from '@/app/Components/Modal/Modal';
import AddCategory from './Components/Forms/AddCategory/AddCategory';


const page = () => {


   const initialModuleState={
      hasAddButton:true,
      mainLabel:'دسته بندی',
      modal:false,
      mode:null
    }
    const [categoryModuleState, setCategoryModuleState] = useState(initialModuleState);
  
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
  



// categoryModuleState, setCategoryModuleState

    return (
      <>
          <MainLayout 
          // hasAddButton={true}
          setModuleState={setCategoryModuleState}
          moduleDetails={categoryModuleState}
          
          >
            
      
            {
              <DataGrid 
              rows={rows}
              columns={columns}
              handleModuleState={setCategoryModuleState}
              
      
              />
            }
            {
            categoryModuleState?.modal &&  <Modal 
            show={categoryModuleState.modal} 
            changeModalState={setCategoryModuleState}  
            mode={categoryModuleState.mode}
            label={'محصول'}
            
            >
              {/* <AddCustomer/> */}
              <AddCategory/>
      
              </Modal>
            }
      
          </MainLayout>
      
         
         </>
        )
}

export default page