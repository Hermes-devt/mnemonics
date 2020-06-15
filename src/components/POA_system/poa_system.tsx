
import React, {CSSProperties, useState, useEffect, useRef} from 'react';
import poaObject from './poaArr';

export const PoaSystem = () =>{
  const [ poa, setPOA] = useState<any>( poaObject() )
  const [randValue, setRandValue] = useState<number>(0);
  const [lowerLimit, setLowerLimit] = useState<number | string>(0);
  const [upperLimit, setUpperLimit] = useState<number | string>(10);

  useEffect( ()=>{
    const value = generateNewValue()
    let obj = poaObject();
    console.log('obj', obj);
    setRandValue( value );
  }, [])


  const generateNewValue = (): number=>{
    const lower:number = typeof lowerLimit === 'string' ? parseInt( lowerLimit ) : lowerLimit;
    const upper:number = typeof upperLimit === 'string' ? parseInt( upperLimit ) : upperLimit; 
    if( isNaN(lower) || isNaN(upper )) return -1;

    let value =  Math.floor( Math.random() * (upper - lower + 1) ) + lower;
    return value;
  };

  return(
    <div 
    tabIndex={0}
    onKeyDown={ (evt)=>{ 
      if( evt.key === 'Enter'){
        let value = generateNewValue();
        setRandValue( value );
      }
    }}
    style={content}>
      <h1 style={{paddingTop: 10, margin: 0, textAlign: 'center', fontStyle:'italic'}}>POA System</h1>
      <div style={{width: '600px', backgroundColor: '', margin: '0px auto'}}>
        <div style={{textAlign:'center', padding: 10,}}>Generate values between</div>
        <div style={{margin: '0px auto', backgroundColor: '', width: 170, padding: 0}}>
          <input onChange={ (evt)=>{ setLowerLimit( evt.currentTarget.value); }}
          style={limits as CSSProperties} value={lowerLimit} />
          <span> and </span>
          <input onChange={ (evt)=>{ setUpperLimit( evt.currentTarget.value)}}
          style={limits as CSSProperties} value={upperLimit} />
          <div style={{textAlign: 'center', fontSize: 50, color: 'black', padding: 30,}}> {randValue} </div>
        </div>
      </div>

      <div style={button} onClick={ ()=>{ let value = generateNewValue(); setRandValue( value ); }} >Generate new value</div>

      <div style={answerBlock} >
        <div 
          onMouseEnter={ (evt)=>{ evt.currentTarget.style.opacity = '1'; }}
          onMouseLeave={ (evt)=>{ evt.currentTarget.style.opacity = '0'; }}
          style={answer}>

          <div style={poaText as CSSProperties}>{poa[randValue].person}</div>
          <div style={poaText as CSSProperties}>{poa[randValue].action}</div>
          <div style={poaText as CSSProperties}>{poa[randValue].object}</div>

        </div>
      </div>
      <div style={{textAlign: 'center', fontSize: 12,fontStyle: 'italic'}}> Hover over the block to display the answer </div>

      <div style={{width: 800, margin: '30px auto', backgroundColor: ''}}>
        <span style={{fontWeight: 'bold', width: '50px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Nr</span>
        <span style={{fontWeight: 'bold', width: '230px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Persons</span>
        <span style={{fontWeight: 'bold', width: '230px',  fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Actions</span>
        <span style={{fontWeight: 'bold',  width: '230px', fontSize: 25, paddingBottom: 20, display: 'inline-block'}}>Objects</span>
        {poa.map( (item:any,index:number):any=>{return(
          <div 
            key={index} 
            style={{border: '1px solid silver', padding: '2px 0px'}}
          
          >
            <span style={{display: 'inline-block', width: 30}}>{item.nr}</span>
            <span style={{display: 'inline-block', width: 230}}>{item.person} </span>
            <span style={{display: 'inline-block', width: 270}}>{item.action} </span>
            <span style={{display: 'inline-block', width: 230}}>{item.object} </span>
          </div>
        )
        })}
      </div>

    </div>
  )
}

const answerBlock = {
  width: 900,
  height: 100,
  textAlign: 'center',
  margin: '0px auto',
  border: '1px solid silver',
  borderRadius: 5,
  marginTop: 15,
} as CSSProperties

const answer = {
  width: '100%',
  height: '100%',
  textAlign: 'center',
  opacity: 0,
} as CSSProperties

const poaText = {
  display: 'inline-block',
  width: 250,
  fontWeight: 'bold',
  paddingTop: '30px',
  fontSize: 25,
}

const button = {
  width: '180px',
  margin: '0px auto',
  textAlign: 'center',
  padding: '4px 0px',
  border: '1px solid black',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: 'black',
  color: 'white',
} as CSSProperties


const limits = {
  width: 50,
  textAlign: 'center',
}

const content= {
  display: 'inline-block',
  width: '77vw',
  backgroundColor: '#f1f1f1',
  padding: 0,
  margin:0,
  verticalAlign: 'top',
  borderBox: 'box-sizing'
} as CSSProperties

export default PoaSystem;