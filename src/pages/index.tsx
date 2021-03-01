
import { ExperienceBar } from "../components/ExperienceBar";
import  Head  from 'next/head';
import { Profile } from "../components/Profile";
import styles from '../styles/Pages/Home.module.css';
import { CompletedChallenger } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";
interface homeProps {
  level : number
  currentExperience : number
  challengesCompleted : number
}


export default function Home(props : homeProps) {

 
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}
    >
      
      <div className={styles.container}>
        <Head><title>Inicio | StepByStep</title></Head>
        <ExperienceBar />
        <CountdownProvider>
        <section>
          <div>
            <Profile />
            <div className={styles.syfyContainer}>
              <CompletedChallenger />
              <Countdown/>
            </div>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps : GetServerSideProps  =  async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return {
    props: {
      level :  Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted : Number(challengesCompleted)
    }
  }
}
