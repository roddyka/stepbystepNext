import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import GoogleLogin from 'react-google-login';
export function Profile(){
    const {level} = useContext(ChallengesContext);
    const [logged, setLogged] = useState(false);

    function responseGoogle(data){
        console.log(data);
    }
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/roddyka.png" alt="Rodrigo Antunes"/>
               <div>
                   <strong>Rodrigo Antunes</strong>
                  
                   <p> <img src="icons/level.svg" alt=""/> Level {level}</p>
               </div>
               {/* {logged ? (
               <>
               <img src="https://github.com/roddyka.png" alt="Rodrigo Antunes"/>
               <div>
                   <strong>Rodrigo Antunes</strong>
                  
                   <p> <img src="icons/level.svg" alt=""/> Level {level}</p>
               </div>
               
               </>
            ) : (
                <GoogleLogin
                clientId="32005075808-0q6e4g758g5f2j9b7k6e5dkpsnrfhrbo.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            )}  */}

            
        </div>
    )
}