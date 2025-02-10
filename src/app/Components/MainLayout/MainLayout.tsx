import React from 'react';

const MainLayout = ({setModuleState,children,moduleDetails}:any) => {

    const initalAddRecored=()=>{

        setModuleState((prev:any)=>({...prev,mode:'add',modal:true}));

    }



  return (
    <div className='w-100 p-4 flex flex-col '   >
        <div  className='w-100 flex justify-between items-center p-1 px-2 gap-5 '   >
       {
    moduleDetails.hasAddButton && <div  className='p-2 bg-red-black-gradient flex w-full rounded-lg' >
        <span className='text-pretty text-lg text-white  '   >
            {moduleDetails.mainLabel}
        </span>
      </div>
       }
      <div>
      <button  className='btn  btn-success dark:text-white   ' onClick={initalAddRecored}    >
                افزودن
         
        </button>
  
      </div>
    
        </div>


       <div className='w-full' >
        {
            children
        }
       </div>
    
    </div>
  )
}

export default MainLayout