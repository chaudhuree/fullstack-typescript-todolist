import React, {FC, ReactElement } from 'react'
import Grid from '@mui/material/Grid2'

const Sidebar:FC = ():ReactElement => {
  return (
    <Grid
        size={{md:4}}
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Sidebar Area</h2>
      </Grid>
  )
}

export default Sidebar