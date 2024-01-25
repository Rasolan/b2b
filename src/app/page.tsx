import About from "@/components/sections/main/about/about"
import Main from '@/components/sections/main/mian/main';
import Die from '@/components/sections/main/die/die';
import Advantages from '@/components/sections/main/advantages/advantages';
import Answers from '@/components/sections/main/answers/answers';
import Play from '@/components/sections/main/play/play';
export default function Home() {
  
  return (
    <>
      <Main></Main>
      <About></About>
      <Die></Die>
      <Advantages></Advantages>  
      <Answers></Answers>
      <Play></Play>
    </>
  )
}
