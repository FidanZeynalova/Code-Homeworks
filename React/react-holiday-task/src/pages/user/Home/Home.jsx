import React from "react";
import UserHome from "../../../components/User/UserHome/UserHome";
import SectionTwo from "../../../components/User/SectionTwo/SectionTwo";
import UserThree from "../../../components/User/UserThree/UserThree";
import SectionFour from "../../../components/User/SectionFour/SectionFour";
import SectionFive from "../../../components/User/SectionFive/SectionFive";
import Contact from "../../../components/User/Contact/Contact";

function Home() {

  return (
    <>
<UserHome/>
<SectionTwo/>
<UserThree/>
<SectionFour/>
<SectionFive/>
<Contact/>
    </>
  );
}

export default Home;
