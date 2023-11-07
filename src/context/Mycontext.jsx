import React, { createContext, useContext, useState } from 'react'


const DataContext = createContext()


/* costum hook */
export const useMyContext = () => {
    return useContext(DataContext)
}

function createObjectWithFalseValues(num) {
    const StateData = {};
    for (let i = 1; i <= num; i++) {
        StateData[i] = false;
    }
    return StateData;
}

// Example usage:
const myObject = createObjectWithFalseValues(3);



function Mycontext({children}) {
    const [isFalse, setIsFalse] = useState(myObject)

    const handleToggle = (id) => {
        setIsFalse((prev) => ({ ...prev, [id]: !prev[id] }))
    }
    const data = {handleToggle, isFalse}

  return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
  )
}

export default Mycontext