import * as React from 'react'
import GlobalStyles from '@mui/joy/GlobalStyles'
import Sheet from '@mui/joy/Sheet'
import IconButton from '@mui/joy/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../lg.png'
import { toggleSidebar } from '../utilis'
import { Avatar, Box } from '@mui/joy'
import { Typography } from '@mui/joy'
import { profileImg } from '../assets/images'
import {shulecolor} from '../utils/colors'
import {data} from '../data'

export default function Header () {
  const isMobile = window.innerWidth<600;

  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex:9999999,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1'
        // boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={theme => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '60px'
            }
          }
        })}
      />

      {isMobile ? (   <Box sx={{display: 'flex', gap: 1, alignItems: 'center', justifyContent:'space-between', width:'100%' }}>
      <IconButton
        onClick={() => toggleSidebar()}
        variant='outlined'
     
        size='sm'
        sx={{
          display: {
            sm: 'flex', // Show on small screens
            md: 'none' // Hide on medium and larger screens
          },
             
             borderColor:'#00004d'
        }}
      >
        <MenuIcon sx={{color:'#00004d'}}/>
      </IconButton>
    {data.schoolprofile.map((school,  index) => (<Typography  level="title-lg" key={index}> {school.name} </Typography>)
    )}
      
      <Avatar
        
        src={profileImg}
        srcSet={profileImg}
        sx={{ maxWidth: '40px', maxHeight: '40px', border:'1px solid', borderColor:shulecolor.accent}}
      />

      </Box>):( 
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center', justifyContent:'space-between', width:'100%'}}>
      <IconButton
        onClick={() => toggleSidebar()}
        variant='outlined'
     
        size='sm'
        sx={{
          display: {
            sm: 'flex', // Show on small screens
            md: 'none' // Hide on medium and larger screens
          },
             
             borderColor:'#00004d'
        }}
      >
        <MenuIcon sx={{color:'#00004d'}}/>
      </IconButton>
      <Box sx={{display: 'flex', gap: 1, alignItems: 'center', justifyContent:'space-between'}}>
      <Avatar
        src={logo}
        srcSet={logo}
        sx={{ maxWidth: '40px', maxHeight: '40px' }}
      />
    
      <Typography  level="title-lg">ShuleKwanza</Typography>
</Box>
      
      <Avatar
      src = {profileImg} 
      sx={{border:'2px solid', borderColor:shulecolor.accent}}
      />
 

      </Box>)}

    

     
   
    </Sheet>
  )
}
