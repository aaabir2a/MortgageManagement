import React, {useState} from 'react';
import { Container, Grid } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import SliderSelect from './Components/SliderSelect';
import Tenure from './Components/Tenure';
import Result from './Components/Result';

function App() {
  const[count,setCount]=useState(100)
   
  const[data, setData]=useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    laonAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })


  return (
    <div className="App">

      <Container maxWidth = "xl">

      <Navbar/>
      <Grid container spacing={5}>
      <Grid item md={6}>
        <SliderSelect data={data} setData={setData}/>
        <Tenure/>
      </Grid>

      <Grid item md={6}>
        <Result/>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        {count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
      </Grid>
      
      </Grid>
      

      </Container>


        
    </div>
  );
}

export default App;
