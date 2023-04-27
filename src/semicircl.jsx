import { Circle } from 'rc-progress';
import Header from './header';
function Details(props) {

  return (
    <>
    <Header/>

     <Circle percent={60} strokeWidth={4} strokeColor="#000" gapDegree={120}  style={{maxWidth:"20%"}}/> 
    </>
  );
}

export default Details;
