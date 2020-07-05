
import React, { useState } from 'react';
import poaObject from './poaArr';

export function PoaList(){
  const [ poa ] = useState<any>( poaObject() )
  return(
    <span>
      <h1>Example list</h1>

      <div style={{width: '99%', margin: '0px auto', backgroundColor: ''}}>
        <span style={{fontWeight: 'bold', width: '50px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Nr</span>
        <span style={{fontWeight: 'bold', width: '230px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Persons</span>
        <span style={{fontWeight: 'bold', width: '230px',  fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Actions</span>
        <span style={{fontWeight: 'bold',  width: '230px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Objects</span>
      </div>
      {poa.map( (item:any,index:number):any=>{return(
        <div key={index} style={{border: '1px solid silver', padding: '2px 0px'}}
        >
          <span style={{display: 'inline-block', width: 30}}>{item.nr}</span>
          <span style={{display: 'inline-block', width: 230}}>{item.person} </span>
          <span style={{display: 'inline-block', width: 270}}>{item.action} </span>
          <span style={{display: 'inline-block', width: 230}}>{item.object} </span>
        </div>
      )
      })}

    </span>

  )
}


export default PoaList;