/*import HelloCGU from './cgu_hello'
import MultiButton from './cgu_multiButton'
import BasicTextFields from './login_button'
import Link from '@material-ui/core/Link';
import {Grid, TextField} from "@material-ui/core"
import Lock from "./lock"
import Button from '@material-ui/core/Button';
import './App.css';*/

import MultiButton from './changeText'
import HelloCGU from './cgu_hello'

function App() {
  return (
    /*<div className="App">
        <Grid container style={{minHeight: '100vh'}}>
          <Grid item xs={1} sm={6}>
            <img 
              src="https://i0.zi.org.tw/kocpc/2021/01/1611477294-5830d062501eb5a2b777dade755489e2.jpg" 
              style={{width:"100%", height:"100%", objectFit:"cover"}} 
              alt="img" 
            />
          </Grid>
          <Grid container item xs={12} sm={6} 
          alignItems="center" direction="column"  justify="space-between"
          style={{padding:10}}>
            <div style={{display:"flex",flexDirection:"column",maxHeight:400,maxWidth:300}}>
              <Grid container justify="center">
              <div style={{marginTop:200}}></div>
                {HelloCGU()}
                <div style={{height:200}}></div>
                  {BasicTextFields()} 
                <div style={{height:10}}></div>
                {Lock()}
                <br></br>
                <div style={{height:100}}></div>
                <Button>Forget password?</Button>
                <Button color="primary" variant="contained" style={{width:900,height:40,marginTop:20}}>
                  log
                </Button>
              </Grid>
            </div>
      
          </Grid>
        </Grid>*/
      
    <div className="App">
      {HelloCGU()}
      {MultiButton(10)}
    </div>
  );
}

export default App;
