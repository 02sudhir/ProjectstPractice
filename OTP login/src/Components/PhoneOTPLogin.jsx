import React, { useState } from 'react';
import OtpInput from './otp-input';

const PhoneOTPLogin = () => {
  const [PhoneNumber, setPhonenumber] = useState("");
  const [showOtpinput, setshowOtpinput] = useState(false);
 
  const handlePhonenumber = (event) => {
    setPhonenumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    
    if (PhoneNumber.length < 10 || regex.test(PhoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    setshowOtpinput(true);
  };

  const onOtSubmit = ()=> {
    console.log("log in success");
  }

  return (
    <div>
      {!showOtpinput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input 
            type="text" 
            value={PhoneNumber}
            onChange={handlePhonenumber}
            placeholder="Enter Phone number"
          /> 
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p> enter otP sent TO {PhoneNumber}</p>
           <otp-input length={4} onOtSubmit={} />
        </div>
      )}
    </div>
  );
}

export default PhoneOTPLogin;