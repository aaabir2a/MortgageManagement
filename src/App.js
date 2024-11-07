
import { Container, Grid } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import SliderSelect from './Components/SliderSelect';
import Tenure from './Components/Tenure';
import Result from './Components/Result';

function App() {
  return (
    <div className="App">

      <Container maxWidth = "xl">

      <Navbar/>
      <Grid container spacing={5}>
      <Grid item md={6}>
        <SliderSelect/>
        <Tenure/>
      </Grid>

      <Grid item md={6}>
        <Result/>
      </Grid>
      </Grid>

      </Container>


        
    </div>
  );
}

export default App;
