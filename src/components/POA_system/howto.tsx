
import React, {CSSProperties} from 'react';
// import DominicanSystem from './dominicanSystem';
// import MajorSystem from './majorSystem';
export function HowTo():any{
  return(
    <div style={container}>
      {/* <MajorSystem />
      <DominicanSystem /> */}
    <br/><br/>

      <div>
      <h3>Examples</h3>
      <div>
        <span style={{fontWeight: 'bold'}}>15 </span>
        <span> - Albert Einstein</span>
        <span> - writing- </span>
        <span>Blackboard</span>
        <span> - (ex Albert Einstein writes on a blackboard)</span>
      </div>

      <div>
        <span style={{fontWeight: 'bold'}}>17 </span>
        <span> - Andrew the Giant</span>
        <span> - crushing - </span>
        <span>Can</span>
        <span> - (Andrew the Giant crushing a gigantic can with his hands)</span>
      </div>

      <div>
        <span style={{fontWeight: 'bold'}}>33 </span>
        <span> - Charlie Chaplin </span>
        <span> - stepping - </span>
        <span> mummy</span>
        <span> - (Charlie chapling do a little step dance on a mummy)</span>
      </div>

      <div>
        <h3>Example 2</h3>
        <span>151733</span>
        <span> - Albert Einstein - crushing - mummy</span>
        <br/><br/>
        <div style={{fontStyle: 'italic'}}>
          Imagine you eating lunch when a mummy suddenly attacks you and Albert Einstein 
          comes flying through the window, crushing the mummy; saves the day, and lifts you up
          and you live happily every after. 
        </div>
      </div>

      </div>
    </div>
  )
}

const container = {
  display: 'inline-block',
  width: '75vw',
  verticalAlign: 'top',
  paddingLeft: '50px',
  boxSizing: 'border-box',
  marginBottom: 50,
} as CSSProperties

