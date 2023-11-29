import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <img src = {Logo} alt = "logo" style = {{
          width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
    </Stack>
  )
}

export default Navbar