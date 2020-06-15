
import React, {CSSProperties} from 'react';
import img1 from '../temp.jpg';

export const Topbar = () =>{
  // src/mnemonic_ico.ico

  return(
    <div style={topbar}>
      <h1 style={{paddingTop: 10, margin: 0, textAlign: 'center', fontStyle:'italic'}}>Practice your Mnemonics</h1>
      <img src={img1} style={img} alt="logo" />
    </div>
  )
}

const img = {
  position: 'absolute',
  top: 0,
  left: 20,
  height: '100%',

} as CSSProperties

const topbar = {
  position: 'relative',
  width: '100vw',
  height: '60px',
  backgroundColor: '#f1f1f1',
  padding: 0,
  margin:0,
  borderBottom: '1px solid black',
} as CSSProperties

export default Topbar;