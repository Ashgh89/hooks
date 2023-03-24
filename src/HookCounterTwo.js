import { useState } from "react";

const HookCounterTwo = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const firstNameHandler=(e)=>{
    setUserData({...userData, firstName: e.target.value})
  }
  const lastNameHandler=(e)=>{
    setUserData({...userData, lastName: e.target.value})
  }
  return (
    <form>
      <input
        type="text"
        placeholder="firstName..."
        value={userData.firstName}
        onChange={firstNameHandler}
      />
       <input
        type="text"
        placeholder="lastName..."
        value={userData.lastName}
        onChange={lastNameHandler}
      />
    </form>
  );
};

export default HookCounterTwo;
