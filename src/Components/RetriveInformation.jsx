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
                                <div key={index}>
                                <p>{data.name}</p>
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