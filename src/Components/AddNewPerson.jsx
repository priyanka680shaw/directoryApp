import { useEffect, useState } from 'react'
import NewEnterFrom from './NewEnterFrom'

const AddNewPerson = ({listUserData , setListUserData}) => {
    const [addData, setAddData] = useState(false)
    const [userData , setUserData] = useState();
   
    console.log("sdfghjkl" , userData)
    console.log("userList" , listUserData)
    
    useEffect(()=>{
        if(listUserData.length > 0 ){
            localStorage.setItem("data" , JSON.stringify(listUserData))
        }
      
    } , [listUserData])

    //localStorage.setItem("data" , JSON.stringify(listUserData))
   
  return (
    <>
        <div className='middleSection  border-2 border-black h-[400px] w-[100%]'>
                        {/* table for data */}
                        <table className='border-2 border-black w-full'>
                            <thead>
                                <tr className='m-2'>
                                    <th className='border-2 border-black'>Name</th>
                                    <th className='border-2 border-black'>Dath of birth</th>
                                    <th className='border-2 border-black'>Addhar</th>
                                    <th className='border-2 border-black'>Mobile No</th>
                                    <th className='border-2 border-black'>Age</th>
                                    <th className='border-2 border-black'>Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {
                                listUserData && listUserData.map((data , index)=>{
                                    return(
                                        <>
                                    <tr key={index}>
                                    <td className='border-2 border-black text-center'>{data.name}</td>
                                    <td className='border-2 border-black text-center'>{data.date}</td>
                                    <td className='border-2 border-black text-center'>{data.addharNo}</td>
                                    <td className='border-2 border-black text-center'>{data.mobileNo}</td>
                                    <td className='border-2 border-black text-center'>{data.age}</td>
                                    <td className='border-2 border-black text-center'>Delete</td>
                                </tr>
                                        </>
                                    )
                                })
                            }
                               

                            </tbody>
                        </table>
                        {/* add data while click on add button */}
                        <div>
                            {
                                addData && <NewEnterFrom setUserData = {setUserData} userData= {userData} setListUserData={setListUserData} listUserData = {listUserData} setAddData = {setAddData}/>
                            }
                        </div>
                    </div>
                     

                    
                    <div className='endSection w-full text-end px-8 py-2'>
                        <button className='px-[60px] py-2 bg-blue-600 text-white font-extrabold text-xl' onClick={() => {
                            setAddData(true)
                        }}>Add</button>
                    </div>
    </>
  )
}

export default AddNewPerson
