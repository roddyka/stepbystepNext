import {createContext ,useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengesProviderProps{
    children: ReactNode,
    level : number,
    currentExperience : number,
    challengesCompleted : number
      
}
interface Challenge{
    type:'body' | 'eye',
    description: string,
    amount: number
}
interface ChallengesContexData{
    level: number,
    currentExperience: number,
    challengesCompleted : number,
    activeChallenge: Challenge;
    experienceToNextLevel: number,
    levelUp : ()=>void,
    startNewChallenge : ()=>void,
    resetChallenge :()=> void,
    completeChallenge :()=> void,
    closeLevelUpModal :()=> void,
}
export const ChallengesContext = createContext({} as ChallengesContexData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1)* 4 ,2);

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [levelUp, currentExperience, challengesCompleted]);

    function levelUp(){
        setLevel(level + 1);
        setIsModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio',{
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
            
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider 
        value={{level,
         currentExperience,
          challengesCompleted,
           levelUp,
            startNewChallenge,
            resetChallenge,
            activeChallenge,
            experienceToNextLevel,
            completeChallenge, 
            closeLevelUpModal
            }}>
            {children}

            { isModalOpen && <LevelUpModal /> }
        </ChallengesContext.Provider>
    );
}