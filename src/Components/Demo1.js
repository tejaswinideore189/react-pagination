import React from 'react'
import code from '../Images/code.jpg'
function Demo1() {
    return (
        <div>
            <img src={code} alt='' className='img-fluid'/>
            <p>We call this a “root” DOM node because everything inside it will be managed by React DOM.
                Applications built with just React usually have a single root DOM node. If you are integrating React into an 
                existing app, you may have as many isolated root DOM nodes as you like.</p>
                
        </div>
    )
}

export default Demo1
