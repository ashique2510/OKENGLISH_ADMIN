import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllUser ,getAllbooking, getAllTutorsDetails} from '../utils/ApiRoutes'
import axios from 'axios'
import Moment from 'react-moment';
import 'moment-timezone';


const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu ] = useState(true)
    const [ isClicked, setIsClicked ] = useState(initialState)
    const [screenSize ,setScreenSize ] =useState(undefined)

    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [ currentMode, setCurrentMode ] = useState('Light')
    const [ themeSettings, setThemeSettings ] = useState(false)
    const [ allUser ,setAllUser] = useState([])
    const [ allUserData , setAllUserData ] = useState([ ])
    const [ allBooking, setAllBooking ] = useState('')
    const [ allTutors, setAllTutors ] = useState('')
    const [ dateAndTime ,setDateAndTime ] =useState([ ])
    const [ show , setShow ] = useState(true)


    const setMode = (e) => {
        setCurrentMode(e.target.value);
        
        localStorage.setItem('themeMode',e.target.value)

        setThemeSettings(false)
    }

    
    const setColor = (color) => {
        setCurrentColor(color);
        
        localStorage.setItem('colorMode', color)

        setThemeSettings(false)

    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true})
    }

//   Registered User

useEffect(() => {

    const getUserData = async() => {

      const allUsersData = await axios.get(getAllUser)
      setAllUser(allUsersData.data)
      
    }
    getUserData()
      
   } ,[])

  //  console.log('all user',allUser);


 useEffect(() =>{


  const dateTime =  allUser.map((item) => {
       
       const fullDate = new Date (item.createdAt)
         const regDate = fullDate.getDate()+"/"+(fullDate.getMonth()+1)+"/"+fullDate.getFullYear()

         //  console.log('Date', regDate);
         var hours = fullDate.getHours();
         var minutes = fullDate.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;

          var strTime = hours + ':' + minutes + ' ' + ampm;
          return { date:regDate, time:strTime }
          
        })
        setDateAndTime(dateTime)
      
    },[allUser])

    // console.log('date and time',dateAndTime);
    //     console.log('all user', allUser);



   useEffect(() => {

           const data = allUser.map((item,index)=>{
                 
            return { ...item, ...dateAndTime[index]}
                 
           })
           setAllUserData(data)

   } ,[dateAndTime ,allUser])

  

   //   get All booking

useEffect(() => {

    const getUserData = async() => {

      const allUsersData = await axios.get(getAllbooking)
      setAllBooking(allUsersData.data)
      // console.log('get all booking',allUsersData.data);
    }
    getUserData()
      
   } ,[])


    //   get All Tutor

useEffect(() => {

  const getTutorData = async() => {

    const allTutorsData = await axios.get(getAllTutorsDetails)
    setAllTutors(allTutorsData.data)
    // console.log('get all Tutors data',allTutorsData.data);
  }
  getTutorData()
    
 } ,[])





      return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,currentMode,
            themeSettings, setThemeSettings,
            setMode,setColor,
            setCurrentMode,
            setCurrentColor,
            initialState,
            allUserData,allBooking,
            allTutors,
            show , setShow,
        }}
        >
         {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);