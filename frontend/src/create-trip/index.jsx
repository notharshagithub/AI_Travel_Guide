import React, { useEffect, useState } from 'react'
import {Input} from '../components/ui/input'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectBudgetOptions } from '@/constant/options';
import { SelectTravelesList } from '@/constant/options';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { toast } from "sonner"
import { AI_PROMPT } from '@/constant/options';
import { chatSession } from '@/service/AIModel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';



function CreateTrip() {
    const [place,setPlace] = useState(null);

    const [formData, setFormData] = useState({});


    // const {formData,setFormData} = useState({});

    // const handelInputChange = (name,value) => {
    //     setFormData({...formData,[name]:value})
        
    // }

    const [openDailog, setOpenDialog] = useState(false);
    
    const [loading,setLoading]=useState(false);

    const navigate = useNavigate();


 const handelInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };



useEffect(() => {
    console.log(formData);
}, [formData])




// const login = useGoogleLogin({
//     onSuccess: (codeResp) => console.log(codeResp),
//     onError: (error) => console.log(error),
// });



const login = useGoogleLogin({
    onSuccess: (response) => {
        console.log("Login successful:", response);
        GetUserProfile(response); // Pass the full response object
    },
    onError: (error) => console.error("Login error:", error),
    scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
});



const GenerateTrip=async ()=>{
  
   const user = localStorage.getItem('user');

   if(!user){
   
 setOpenDialog(true);
}

    if(formData?.noOfDays>5&&!formData?.travels||!formData?.budget||!formData?.location){
        toast("Please fill all the fields")
        return ;
    }
   setLoading(true);
  const FINAL_PROMPT = AI_PROMPT
  .replace('{location}', formData.location?.label)
  .replace('{totalDays}', formData.noOfDays)
  .replace('{travels}', formData?.travels)
  .replace('{budget}', formData?.budget)
  .replace('{totalDays}', formData.noOfDays)

 

 const result = await chatSession.sendMessage(FINAL_PROMPT);

 console.log("--"+result?.response?.text());
 setLoading(false);
 SaveAiTrip(result?.response?.text());
}



const SaveAiTrip = async (TripData) => {

  setLoading(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const docId = Date.now().toString();

// Add a new document in collection "cities"
await setDoc(doc(db, "AITrips", docId), {
  userSelection: formData,
  tripData: JSON.parse(TripData),
  userEmail: user?.email,
  id: docId,
});
setLoading(false);
navigate(`/view-trip`+`/${docId}`);

}



const GetUserProfile = async (tokenInfo) => {
   axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
    headers: {
      Authorization: `Bearer ${tokenInfo?.access_token}`,
      Accept: 'Application/json',
    },
   }).then((res)=>{
    console.log(res)
    localStorage.setItem('user',JSON.stringify(res?.data))
    setOpenDialog(false);
    GenerateTrip();

   })
};


    // useEffect(() => {
    //     console.log(formData)
    // },[formData])

  return (
    <div>

    <div className='sm:px-10 md:px-32 lg:px-56 xl:px px-5 mt-10 '>
        <h2 className='font-bold text-3xl'>Tell us your travel preference ⛺🌴 </h2>
        <p className='mt-3 text-gray-500'>Just provide some basic information , and our trip planner will generate a customized itinerary on your preferences </p>
    <div className='mt-20 flex flex-col gap-10'>
       <div>
        <h2 className='text-xl my-3 font-medium'>What is destination of choice ?</h2>
        <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
        selectProps={{
            place,
            onChange:(v)=>{setPlace(v);handelInputChange('location',v)}
        }}
        />
        
       </div>
       <div>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip ?</h2>
  <Input placeholder='Enter number of days' type='number' onChange={(e)=>handelInputChange('noOfDays',Number(e.target.value))} />
       </div>

    </div>

    <div>



    </div>
  <div>

           <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
    <div className='grid grid-cols-3 gap-5'>
        {SelectBudgetOptions.map((item,index)=>(


            <div key={index} 
            onClick={()=>handelInputChange('budget',item.title)}
             className={`p-4 border  rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-lg border-black'}`}>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
        
        ))}


        </div>   

        </div>

         <div>

           <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
    <div className='grid grid-cols-3 gap-5'>
        {SelectTravelesList.map((item,index)=>(


            <div key={index} 
            onClick={()=>handelInputChange('travels',item.people)}
             className={`p-4 border  rounded-lg hover:shadow-lg cursor-pointer ${formData?.travels==item.people&&'shadow-lg border-black'}`}>
            <h2 className='text-4xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
        
        ))}


        </div>   

        </div>

<div className='mt-10 justify-end'>
<Button onClick={GenerateTrip}>Generate Trip</Button>
<h3 className='text-gray-500'>*Please wait for a few seconds after clicking*</h3>
</div>


    </div>
   <Dialog open ={openDailog}>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
        <img src='/logo.svg' alt='logo' />
        <h2 className='font-black text-gray-800'>Sign In with Google</h2>
        <p>Sign In to the App with authentication</p>

        <Button 
        disabled={loading}
        onClick={login}
        className='w-full mt-5 gap-4'>Sign In</Button>
        
       
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
     </div>

  )
}

export default CreateTrip

