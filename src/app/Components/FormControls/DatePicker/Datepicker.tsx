import * as React from 'react';



import { LocalizationProvider, DateTimePicker,DatePicker } from '@mui/x-date-pickers';

import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import 'dayjs/';
import { faIR } from '@mui/x-date-pickers/locales';
import moment from 'moment-jalaali';


import './style.css'







export default function DatePickerField() {
 


  return ( <LocalizationProvider 
    dateAdapter={AdapterMomentJalaali}  
    localeText={faIR.components.MuiLocalizationProvider.defaultProps.localeText}
    adapterLocale='fa'

    
  >
          <DatePicker 
            sx={{fontFamily:'IS !important'}}
          className='bg-gray-400 mdt '
           
          defaultValue={moment('2022-02-01T12:00:00')}
             />
          </LocalizationProvider>
       
  );
}
