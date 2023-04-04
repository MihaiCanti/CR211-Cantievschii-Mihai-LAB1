import React from 'react';
import { Card } from 'antd';
import GTX from '../interface/extentedInterface';



export interface GTXsProp{
    GPUs: GTX[];
}



const Card_box = ({GPUs}:GTXsProp) =>{

    return(
    <div className='grid-3'>
        {GPUs.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.Model} bordered={false} style={{textAlign:"center", width: 300 }} >
            <img src={card.photo} alt="image" style={{
                width: 300,
                height: 237,
            }}/>
           <p> Core Clock : {card.CoreClock} </p>
            <p> VRam :  {card.VRam}</p>
            <p> MemoryType : {card.MemoryType}</p>
            <p> TDP : {card.TDP}</p>
            <p> Power Connectors : {card.PowerConnectors}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
}

export default  Card_box;
