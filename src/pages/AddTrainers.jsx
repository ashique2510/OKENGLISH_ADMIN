import React, { useState } from 'react'

import { addTutorDetails } from '../utils/ApiRoutes'
import { Header } from '../components'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddTrainers = () => {

  const [ details, setDetails ] = useState( { name:'',
                                              place:'',
                                              phoneNumber:'',
                                              email:'',
                                              address:'',
                                              education:'',
                                              experience:'',
                                              passwordOne:'',
                                              passwordTwo:'',

                                            } )

        const [url ,setUrl] = useState(false)
        const [uploadingImg, setUploadingImg] = useState(false)
        const [ allField, setAllField ] = useState(false)
        const [ checkPassword, setCheckPassword ] = useState(false)
        const [ cloudDelay ,setCloudDelay ] = useState(false)

        const navigate = useNavigate()


  const handleChange = function (e) {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmits = function (e) {

    e.preventDefault();
    console.log('from handle submit',details);

     const { name,place, phoneNumber, email, address,education, experience, passwordOne, passwordTwo } = details

       if( !name || !place || !phoneNumber || !email || !address || !education || !experience || !passwordOne || !passwordTwo || !url) {

               console.log('please fill the all the field');
               setAllField(true)

       }else{
        setAllField(false)      

            if( passwordOne !== passwordTwo ){
              setCheckPassword(true)
            }else{
              setCheckPassword(false)

              const addDetails = async() => {

                const response = await axios.post(addTutorDetails,{details:details, url:url})

                if(response){
                  toast.success('Tutor Details Successfully Submitted !', {
                    position: toast.POSITION.TOP_CENTER
                    });

                    setTimeout(() => {
                      navigate("/")
                    }, 6000);

                    }
          
              }
          
              addDetails()


            }

       }
    
  };

  function handleOpenWidget(){

    setCloudDelay(true)
    console.log('trigered cloud');
var myWidget = window.cloudinary.createUploadWidget({
  cloudName: 'dtldzc9tg', 
  uploadPreset: 'd43vjlly'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info);
      setUrl(result.info.url) 
      setUploadingImg(true)
      setCloudDelay(false)


    }
  }
)
// Open widget
myWidget.open();
}


  


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
         <Header category='Page' title='Add New Trainers' />


          {/* start add trainers */}


             
<form onSubmit={handleSubmits}>

<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="text" name="place" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Place</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="tel" name="phoneNumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="text" name="email" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
    </div>
  </div>

  <div className="relative z-0 mb-6 w-full group">
      <input onChange={handleChange} type="text" name="address" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Address</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="text"  name="education" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education qualification </label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input onChange={handleChange} type="text" name="experience" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Previous experience</label>
    </div>
  </div>
  

  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 mb-6 w-full group">
      <input onChange={handleChange} type="password" name="passwordOne" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set a password for your trainer</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input onChange={handleChange} type="password" name="passwordTwo" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6 mt-7">
     <div className="relative z-0 mb-6 w-full group flex justify-center items-center">
         
    { url ? 

      <img className="max-w-xs h-auto rounded-lg border-1 border-black" src={url} alt="imagedescription" />

     :

     <img className="max-w-xs h-auto rounded-lg border-1 border-black" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="imagedescription" />

      }   

     </div>
     <div className="relative z-0 mb-6 w-full group flex justify-center items-center">
          
          {
            cloudDelay && (
              <p className='text-green-500 text-lg font-semibold mr-3'>Please Wait Few Seconds !!</p>

            )
          }

           <button
              onClick={()=>handleOpenWidget()}
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              disabled={uploadingImg}
            >
              Add Trainer Image
            </button>

     </div>
  </div>
           {
            allField && (
              <p className='text-red-500 text-lg font-semibold'>Please Fill All The Field !!</p>
            )
           }
           {
            checkPassword && (

              <p className='text-red-500 text-lg font-semibold'>Your password and confirm password are don't match, please retype again !!</p>

            )
           }
  
           <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3.5 px-12 rounded-full mt-5"
            >
              Subimt
            </button>

</form>



          {/* end add trainers */}

      
    </div>
  )
}

export default AddTrainers