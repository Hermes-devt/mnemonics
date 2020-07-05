
import React, {CSSProperties} from 'react';
import { Link } from "react-router-dom";

export const Sidebar = () =>{
  return(
    <div style={sideBar}>
      <Link to="/poa_system" style={link}>Poa system</Link>
      <Link to="/dominicanSystem" style={link}>Dominican system</Link>

      <Link to="/POA_list" style={link}>List</Link>
      <Link to="/POA_game" style={link}>Game</Link>


      <Link to="/shaper_system" style={link}>Shaper system</Link>
      <Link to="/majorSystem" style={link}>Major system</Link>
      <Link to="/pegSystem" style={link}>Peg system</Link>
      <Link to="/method_of_loci" style={link}>Method of Loci</Link>
    </div>
  )
}

const link = {
  display: 'block',
  borderBottom: '1px solid black',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  cursor: 'pointer',
} as CSSProperties

const sideBar = {
  display: 'inline-block',
  width: '20vw',
  // height: '80vh',
  height: '10000px',
  backgroundColor: '#f1f1f1',
  borderRight: '2px solid black',
  borderTop: '2px solid black',
  fontSize: 20,
  borderBox: 'box-sizing',
  margin:0,
} as CSSProperties

export default Sidebar;