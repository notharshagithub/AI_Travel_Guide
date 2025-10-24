import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { toast } from "sonner";
// import InfoSection from "@/view-trip/component/InfoSection.jsx";
import InfoSec from "@/view-trip/component/InfoSec.jsx";
import Hotel from "../component/Hotel";
import PlacesToVisit from "../component/PlacesToVisit";
import Footer from "../component/Footer";



function Viewtrip() {
  const { tripid } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    GetTripData();
  }, [tripid]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No such document!");
    }
  }

    return (
      <div className="p-10 md:px-20 lg:px-44 xl:px-56">
        {/* Information sec */}
        <InfoSec trip={trip} />
        {/* recomended Hotel */}
        <Hotel trip={trip} />
        {/* Daily Plan */}
          <PlacesToVisit trip={trip} />
        {/*  Footer */}
         <Footer  />
      </div>
    )
  
}

export default Viewtrip;
