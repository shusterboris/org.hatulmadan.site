import { useState } from "react";

export default function useToken(){
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.gwttoken
      };
    
      const [token, setToken] = useState(getToken());
    
      const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.gwttoken);
      };

      const clearToken = () =>{
        setToken(null)
        sessionStorage.removeItem('token')
      }

      return {
        setToken: saveToken,
        clearToken: clearToken,
        token
      }
}