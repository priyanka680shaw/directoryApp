import { useEffect, useState } from "react";

function RetrieveInformation({listUserData}){
    //console.log(listUserData)
    const [searchByAadhar , setSearchByAadhar] = useState()
    const [filteredData , setFiltered] = useState([])
    //console.log("SA" ,searchByAadhar)

    function findDataHandler(){
        setFiltered((prev)=>{
            const filteredData = listUserData.filter((data)=>data.addharNo == searchByAadhar)
            console.log("filteredData" , filteredData)
            return filteredData;
        })
    }
    // useEffect(()=>{
    //    // console.log("aadhar" , searchByAadhar)
        
    // } , [searchByAadhar])

    return(
        <>
            <div className="w-full border-2 px-8 py-4">
                <input type ="number" value={searchByAadhar} placeholder="Enter AddharCard Number" className="w-[400px] text-center p-4 m-4" onChange={(e)=>{
                    //console.log(e.target.value)
                    setSearchByAadhar(e.target.value)
                }}/>
                <button className="py-4 px-6  bg-blue-600 text-white font-semibold" onClick={findDataHandler}>Find</button>
                <div className="matchedData">
                    {
                         
                        filteredData && filteredData.map((data , index)=>{
                          //  console.log("data" , data)
                            return(
                                <div key={index} className="p-2 border-2 border-black w-[300px]">
                                <p>user Id : {index+1}</p>
                                <p>Name : {data.name}</p>
                                <p>Addhar Card No : {data.addharNo}</p>
                                <p> Age : {data.age}</p>
                                <p>Date : {data.date}</p>
                                <p> Mobile Number : {data.
mobileNo
}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RetrieveInformation; 