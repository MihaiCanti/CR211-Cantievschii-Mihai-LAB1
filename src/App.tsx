import React, { useEffect } from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';
import { useRootStore } from '.';
import {Local} from './Layouts/Local'


const gpulist = [
  {
    VRam:"11 GB",
    MemoryType:"GDDR5X",
    TDP:"250 W",
    PowerConnectors:"8 pin+8 pin",
    Model:"EVGA GTX 1080 Ti ",
    CoreClock:"1480 MHZ",
    photo:"/EVGA.jpg"
     
  },
  {
    VRam:"11 GB",
    MemoryType:"GDDR5X",
    TDP:"250 W",
    PowerConnectors:"8 pin+6 pin",
    Model:"Gigabyte GTX 1080 Ti",
    CoreClock:"1544 MHz",
    photo:"/Gigabyte.jpg"
     
  },
  {
    VRam:"11 GB",
    MemoryType:"GDDR5X",
    TDP:"300 W",
    PowerConnectors:"8 pin+8 pin",
    Model:"Asus-Rog GTX 1080 Ti",
    CoreClock:"1594 MHz",
    photo:"/ASUS.jpg"
     
  },



]


function App() {

   const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])

  return (
      <>
        <LayoutCustom></LayoutCustom>
        <p className='text_1'>Data from interface</p>
        <Card_box  
        GPUs={gpulist}
        />
        <p className='text_1'>Data from RootStore</p>
        <Local/>
        <FooterNow></FooterNow>
      </>
  );
}

export default App;

