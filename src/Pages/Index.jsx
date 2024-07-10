import React, { useEffect, useState } from 'react'
import AddNewPerson from '../Components/AddNewPerson'

import RetrieveInformation from '../Components/RetriveInformation'
export const Index = () => {

    const [listUserData , setListUserData] = useState([]
);  
   const [addnewPerson, setAddNewPerson] = useState(true)
   const [retriveInformation , setRetriveInformation] = useState(false)
   //to get data from localStorage
   useEffect(()=>{
     const data = (localStorage.getItem("data"))
     console.log("local," ,data.length)
        if(data != undefined &&  data.length >0){
            setListUserData(JSON.parse(data));
        }
   },[])


    return (
        <div>
            {/* navHeader */}
            <div className='w-full p-4 bg-blue-900'>
                <h1 className='text-white text-center text-2xl font-extrabold'>Priyanka Shaw Diractory App</h1>
            </div>

            <div className='bodyArea px-8 py-4 bg-gray-200 h-[630px]'>
                {/* buttons */}
                <div className='w-full p-2'>
                    <button className='border-4 px-6 py-2 mr-8 bg-blue-600 font-semibold text-white text-xl' onClick={()=>{
                        setRetriveInformation(false)
                        setAddNewPerson(true)
                        

                    }}>Add new Person</button>
                    <button className='border-4 px-6 py-2 mr-8 bg-blue-600 font-semibold text-white text-xl' onClick={()=>{
                        setAddNewPerson(false)
                        setRetriveInformation(true )
                    }}>Retrieve Information</button>
                </div>
                {/* data related area */}
                <div className='container w-full h-[500px] border-2 border-black flex flex-col '>
                    {
                         addnewPerson && <div className='tpoicCsalled w-[300px] border-2 border-black text-center font-semibold text-xl mb-2'><p className='p-2'>Add new Person</p></div>
                    }

                    {
                        retriveInformation &&  <div className='tpoicCsalled w-[300px] border-2 border-black text-center font-semibold text-xl mb-2'><p className='p-2'>Retrive Information</p></div>
                    }
                    {/* **********************************middle part injext data************************* */}
                        {addnewPerson &&  <AddNewPerson listUserData = {listUserData}  setListUserData = {setListUserData}/>}
                        {retriveInformation && <RetrieveInformation listUserData={listUserData}/> }
                          {/* **************************************************** */}
                </div>
            </div>
        </div>
    )
}

export default Index;
