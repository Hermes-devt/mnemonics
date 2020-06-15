
import React, {CSSProperties} from 'react';

export const Sidebar = () =>{


  return(
    <div style={topbar}>
      <div style={link}>Poa system</div>
      <div style={link}>Shaper system</div>
      <div style={link}>Major system</div>
      <div style={link}>Peg system</div>
      <div style={link}>Method of Loci</div>
    </div>
  )
}

const link = {
  borderBottom: '1px solid black',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  cursor: 'pointer',
} as CSSProperties

const topbar = {
  display: 'inline-block',
  width: '20vw',
  height: '80vh',
  backgroundColor: '#f1f1f1',
  borderRight: '2px solid black',
  borderTop: '2px solid black',
  fontSize: 20,
  borderBox: 'box-sizing',
  margin:0,
} as CSSProperties

export default Sidebar;