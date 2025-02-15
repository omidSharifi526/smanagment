'use client'
import React,{useEffect,useState} from 'react';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import DataGrid from '@/app/Components/DataGrid/DataGrid';
import { rows,columns } from '@/app/MocData';
import AddStore from '../store/Components/AddStore/AddStore'
import Modal from '@/app/Components/Modal/Modal';
import StoreDetails from './Components/StoreDetails/StoreDetails';
import AddStaff from './Components/AddStaff/AddStaff';


const page = () => {
  const initialModuleState={
    hasAddButton:true,
    mainLabel:'اطلاعات پرسنل',
    modal:false,
    mode:null
  }
  const [orderModuleState, setOrderModuleState] = useState(initialModuleState);
  const[moduleDetails,setModuleDetails]=useState();
  const [storeInfoModal, setStoreInfoModal] = useState({
    mainLabel:'اطلاعات فروشگاه',
    modal:false,
    mode:null
  })

  useEffect(() => {
    
    console.log(storeInfoModal)
  
  }, [storeInfoModal])



  return (
    <>
     <div className='w-full flex flex-col bg-green-600'   >

      <div className=''>
      <StoreDetails  setStoreInfoModal={setStoreInfoModal}   />
      </div>
      

     </div>
    







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
      label={'پرسنل فروشگاه'}
      
      >
        <AddStaff  />
        </Modal>
      }


      {
      storeInfoModal?.modal && <Modal 
      show={storeInfoModal.modal} 
      changeModalState={setStoreInfoModal}  
      label={'اطلاعات فروشگاه'}
      mode={orderModuleState.mode}

      >
        <AddStore/>

      </Modal>
      }

    </MainLayout>

   
   </>
  )
}

export default page