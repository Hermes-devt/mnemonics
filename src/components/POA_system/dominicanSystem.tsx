
import React, {} from 'react';

export function DominicanSystem(){

  return(
    <span>
      <h2>The Dominican System</h2>
      <h4>
        1. Each digit between zero and nine gets assigned to a letter to its corresponding 
        point in the alphabet
      </h4>
      <div style={{marginLeft: 30,}}>
        1 - A (first letter)
        <br/>
        2 - B (second letter)
        <br/>
        3 - C (third letter and so on)
        <br/>
        4 - D 
        <br/>
        5 - E
        <br/>
        6 - S (first letter in six; hard to find people on the letter F)
        <br/>
        7 - G 
        <br/>
        8 - H
        <br/> 9 - N (first letter in nine)
      </div>

      <h4> 2. Then you try to figure out a person whos initials start with each letter </h4>

      <div>15. (AE) - Albert Einstein</div>
      <div>18. (AG) - Andrew the Giant</div>
      <div>33. (CC) - Charlie Chaplin</div>
    </span>
  )
}

export default DominicanSystem;