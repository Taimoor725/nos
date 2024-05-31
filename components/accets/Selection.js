"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import "@/components/accets/new.css"
export function Selection({name, data}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ 
      minWidth: { xs: '100%', md: 120 },
      maxWidth: { xs: '100%', md: 200 }, 
      borderRadius: "5px", 
      backgroundColor: "white" 
    }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" className='text-black'><div className='flex'>  {name} </div></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          // sx={{ backgroundColor: '#aa90dd' }}
          sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' ,textEmphasisColor: "black" } }} // Change border color here
        >
          {data.map((item) => (
            <MenuItem key={item.value} value={item.value}><div className=' text-black'>{item.label}</div></MenuItem>
          ))}
        </Select>
        {/* <FormHelperText>{name}</FormHelperText> */}
      </FormControl>
    </Box>
  );
}



export function CarCard({name,src,onClick}) {
  return(
    <div className="card" onClick={onClick}>
  <div className="icon">
    <img src={src} alt="loading" />
  </div>
  <p className="title">{name}</p>
  <p className="text">Check all {name}.</p>
  <style jsx>{`.card {
    width: 100%;
    max-width: 300px;
    min-width: 200px;
    height: 250px;
    background-color: #292929;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    border: 2px solid rgba(7, 7, 7, 0.12);
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .icon {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(90deg, #1a1a1a 0%, #4d4d4d 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
  }

  .icon svg {
    fill: white;
  }

  .card .title {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .card .text {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }

  .card:hover {
    height: 270px;
  }

  .card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
  }

  .card:hover .icon {
    background-position: -120px;
    transition: all 0.3s ease;
  }

  .card:hover .icon svg path {
    fill: url('#gradientColor');
    transition: all 0.3s ease;
  }

  @media (max-width: 640px) {
    .card {
      max-width: 170px;
      min-width: 150px;
      height: 200px;
      font-size: 14px;
    }
    .card:hover{
      height:220px
    }
    .card .title,
    .card .text {
      font-size: 10px;
    }

    .icon {
      height: 60px;
      max-width: 60px;
    }
  }



  @media (max-width: 800px) {
    .card {
      max-width: 250px;
      min-width: 200px;
      height: 240px;
      font-size: 14px;
    }
    .card:hover{
      height:260px
    }
    .card .title,
    .card .text {
      font-size: 10px;
    }

    .icon {
      height: 60px;
      max-width: 60px;
    }
  }
    
  `}
  

  
  
  
  
  </style>


</div>
  )
}