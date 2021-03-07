import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        // counter state is incremented
        setCounter(counter + 1)
    }

    const subCounter = () => {
        // counter state is decremented
        setCounter(counter - 1)
    }

    return (
        <div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '300%', 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              top: '-15%', 
            }}>
                Counter : 
                <div style={{ 
                  fontSize: '120%', 
                  position: 'relative', 
                  top: '10vh', 
                }}>
                  {counter}
                </div>
                <div className="buttons">
                  <button style={{ 
                    fontSize: '60%', 
                    position: 'relative', 
                    top: '20vh', 
                    marginRight: '5px', 
                    backgroundColor: 'green', 
                    borderRadius: '8%', 
                    color: 'white', 
                    }}
                        onClick={addCounter}>Increment</button>
                    <button style={{ 
                      fontSize: '60%', 
                      position: 'relative', 
                      top: '20vh', 
                      marginLeft: '5px', 
                      backgroundColor: 'red', 
                      borderRadius: '8%', 
                      color: 'white', 
                    }}
                        onClick={subCounter}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <h1>Home 4 Fun</h1>
            <Counter />
            <div>Running ...</div>
        </div>
    )
}

//export default function Post01() {
//   return <h1>First Post</h1>
//}