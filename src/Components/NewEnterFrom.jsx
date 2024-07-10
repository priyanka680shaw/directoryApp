// import React, { useState } from 'react'

// const NewEnterFrom = ({setUserData , setListUserData , listUserData , userData}) => {


//     function dataStore(){
//         const data = {
//             name  : name,
//             date : date,
//             addharNo : addharNo,
//             age : age,
//             mobileNo : mobileNo
//         }
//         setUserData(data)
//         setListUserData([...listUserData , data])
//     }


//     function CalculateAge(dob){
//         const dateOfBirth = new Date(dob);
//         const today = new Date();
        
//         const calculatedAge = today.getFullYear() - dateOfBirth.getFullYear();
//         setAge(calculatedAge);

//     }
//     const [name , setname] = useState()
//     const [date , setDate] = useState();
//     const [addharNo , setAdddharNo] = useState()
//     const [mobileNo , setMobileNo] = useState()
//     const [age , setAge] = useState()
//     console.log("age" , age)
//   return (
//     <div className='px-8 m-2 bg-blue-700'>
//     <h1 className='text-white text-center text-2xl font-semibold py-2'>Fill below form for New Entry</h1>
//       <table className='w-full flex justify-center'>
//           <from>
//             <tr>
//             <td className='p-4'><input type='text' placeholder='Enter Name' required className='text-center rounded' value={name} onChange={(e)=> setname(e.target.value)}/></td>
//             <td className='p-4'><input type = "date" className='text-center rounded' required value = {date} onChange={(e)=>{
//                 console.log(e.target.value)
//                 setDate(e.target.value);
//                 CalculateAge(e.target.value)
//             }} /></td>
//             <td className='p-4'><input type='number' placeholder='Addhar Number' required className='text-center rounded' value={addharNo} onChange={(e)=>setAdddharNo(e.target.value)}/></td>
//             <td className='p-4'><input type='number' placeholder='Mobile NUmber' required className='text-center rounded' value = {mobileNo}onChange={(e)=>setMobileNo(e.target.value)}/></td>
//             <td className='p-4'><input value={age} placeholder='Age' required className='text-center rounded' disabled onChange={(e)=>console.log(e.target.value)}/></td>
//             <td className='p-4'><input type='submit' value= "save" className='text-center rounded hover:cursor-pointer ' onClick={dataStore}/></td>
//           </tr>
//           </from>
//        </table>
//     </div>
//   )
// }

// export default NewEnterFrom











import React, { useState } from 'react';

const NewEnterFrom = ({ setUserData, setListUserData, listUserData, setAddData }) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [addharNo, setAddharNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [age, setAge] = useState('');

  function dataStore(event) {
    event.preventDefault();
    const data = {
      name,
      date,
      addharNo,
      age,
      mobileNo
    };
    setUserData(data);
    setAddData(false)
    setListUserData([...listUserData, data]);
  }

  function calculateAge(dob) {
    const dateOfBirth = new Date(dob);
    const today = new Date();
    const calculatedAge = today.getFullYear() - dateOfBirth.getFullYear();
    setAge(calculatedAge);
  }

  function validateMobileNo(number) {
    return number.length === 10;
  }

  function validateAddharNo(number) {
    return number.length === 12;
  }

  return (
    <div className='p-2 bg-blue-700 sm:px-8'>
      <h1 className='text-white text-center text-xl sm:text-2xl font-semibold py-2'>Fill below form for New Entry</h1>
      <form className='w-full flex flex-col items-center sm:flex-row sm:justify-center' onSubmit={dataStore}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl'>
          <input
            type='text'
            placeholder='Enter Name'
            required
            className='text-center rounded w-full'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='date'
            className='text-center rounded w-full'
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              calculateAge(e.target.value);
            }}
          />
          <div className='relative w-full'>
            <input
              type='number'
              placeholder='Aadhaar Number'
              required
              className='text-center rounded w-full'
              value={addharNo}
              onChange={(e) => setAddharNo(e.target.value)}
            />
            {!validateAddharNo(addharNo) && addharNo && (
              <p className="absolute text-red-500 text-xs sm:text-sm">Aadhaar number must be 12 digits.</p>
            )}
          </div>
          <div className='relative w-full'>
            <input
              type='number'
              placeholder='Mobile Number'
              required
              className='text-center rounded w-full'
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            {!validateMobileNo(mobileNo) && mobileNo && (
              <p className="absolute text-red-500 text-xs sm:text-sm">Mobile number must be 10 digits.</p>
            )}
          </div>
          <input
            value={age}
            placeholder='Age'
            required
            className='text-center rounded w-full'
            disabled
          />
          <input
            type='submit'
            value='Save'
            className='text-center rounded hover:cursor-pointer w-full'
            disabled={!validateMobileNo(mobileNo) || !validateAddharNo(addharNo)}
          />
        </div>
      </form>
    </div>
  );
}

export default NewEnterFrom;
