import React, { useState } from 'react'

const Todolist = () => {
    const[activity,setActivity]=useState('')
    const [listdata,setListdata]=useState([])
    function addActivity(){
        setListdata([...listdata,activity])
        setActivity('')


    }

    const removeActivity= (i)=>{
        const updatedlist= listdata.filter((elem,id)=>{
            return i!==id;
        })
        setListdata(updatedlist)

    }
  return (
    <>
    
    <div className='container'>
        <div className='header'>TodoList:</div>
        <input
        type='text'
        placeholder='Add Activity'
        value={activity}
        onChange={(e)=>setActivity(e.target.value)}/>
        <button className='button' onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your list: </p>
        {listdata!==[]&& listdata.map((data,i)=>{
            return(
                <>
                <p className='listdata' key={i}>
                    {data}

                </p>
                <div onClick={()=>removeActivity(i)} ><button className='remove-btn' >Remove(-)</button>
                </div>
                </>
            )
        })}
    </div>
    
    </>
  )
}

export default Todolist