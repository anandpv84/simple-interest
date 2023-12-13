import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function App() {


  const [principle, setprinciple] = useState(0);
  const [interest, setinterest] = useState(0);
  const [year, setyear] = useState(0);
  const [result, setResult] = useState(0)
  const [isprinciple, setIsPrinciple] = useState(true);
  const [isinterest, setIsInterest] = useState(true)
  const [isyear, setisyear] = useState(true)


  const calculateInterest = (e) => {
    e.preventDefault();
    const result = (principle * interest * year) / 100;
    console.log(result)
    setResult(result)
  }

  const handleReset = () => {
    setprinciple(0);
    setinterest(0);
    setyear(0);
    setResult(0);
  }

  const validate = (e) => {
    const { name, value } = e.target;

    if (name === 'principlevalue') {
      setprinciple(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsPrinciple(true)
      } else {
        setIsPrinciple(false)
      }
    }
    else if (name === 'interestvalue') {
      setinterest(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsInterest(true)
      } else {
        setIsInterest(false)
      }
    }
    else {
      setyear(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setisyear(true)
      } else {
        setisyear(false)
      }
    }
  }


  return (
    <>

      <div className="d-flex justify-content-center align-items-center w-100 mt-5 bg-dark" style={{ height: '90vh' }}>

        <div className="bg-light p-5 rounded" style={{ width: '500px' }}>

          <h2>Simple interest</h2>
          <p>Calculate your simple interest easily</p>
          <div style={{ height: '150px' }} className="bg-warning mt-3 flex-colom rounded d-flex justify-content-center align-items-center" >
            <h2>{result}</h2>
          </div>

          <form action="" className="mt-3" onSubmit={(e) => calculateInterest(e)}>
            <TextField name='principlevalue' value={principle} className="w-100 mt-2" id="outlined-basic" label="Principle amount" variant="outlined"
              onChange={(e) => validate(e)} />
            {
              !isprinciple &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>
            }
            <TextField name='interestvalue' value={interest} className="w-100 mt-2" id="outlined-basic" label="Rate of Interest (%)" variant="outlined"
              onChange={(e) => validate(e)} />
            {
              !isinterest &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>
            }
            <TextField name='yearvalue' value={year} className="w-100 mt-2" id="outlined-basic" label="Year" variant="outlined"
              onChange={(e) => validate(e)} />
            {
              !isyear &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>
            }
            <Stack direction="row" spacing={2} className='mt-3'>
              <Button disabled={isprinciple && isinterest && isyear?false:true} variant="contained" className="bg-success" style={{ height: "50px", width: "200px" }} type="submit">Calculate</Button>
              <Button variant="contained" className="bg-light" style={{ height: "50px", width: "200px", color: "blue" }} onClick={handleReset}>Reset</Button>
            </Stack>
          </form>

        </div>
      </div>

    </>

  );
}
export default App;
