import React, {useState} from "react";

function Home() {
 // handling check boxes
const [mobile, setMobile] = useState(false);
const [laptop, setLaptop] = useState(false);
const [smartwatch, setSmartWatch] = useState(false);
  return (
    <>
    <div>
    <form>
    {mobile ? 'Mobile is checked' : 'Mobile is not checked'} 
    
    {laptop ? 'Laptop is checked' : 'Laptop is not checked'}

    {smartwatch ? 'Mobile is checked' : 'Mobile is not checked'}
    <input 
    type="checkbox"
    value="mobile"
    checked={mobile}
    onChange={(e)=>{
        setMobile(e.target.checked);
    }}
     /> Mobile <br/>

    <input
    type="checkbox" 
    value="laptop"
    checked={laptop}
    onChange={(e)=>{
        setLaptop(e.target.checked);
    }}
     /> Laptop <br/>

    <input 
    type="checkbox" 
    value="smartwatch"
    checked={smartwatch}
    onChange={(e)=>{
        setSmartWatch(e.target.checked);
    }}
    /> Smartwatch <br/>

    </form>
    </div>
    </>
  );
}

export default Home;