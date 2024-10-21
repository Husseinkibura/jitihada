import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import { Route, Routes } from 'react-router-dom'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'

import Sidebar from './components/Sidebar'
import OrderTable from './components/OrderTable'
import OrderList from './components/OrderList'
import Header from './components/Header'
import School from './pages/School'
import Results from './pages/Results'
import Teachers from './pages/Teachers'
import Students from './pages/Students'
import Dashboard from './pages/Dashboard'
import SMS from './pages/SMS'
import Examinations from './pages/Examinations'

//function to check token


//main to render routes and pages

//functio to decode and check jwt validity

export default function JoyOrderDashboardTemplate () {

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          minHeight: '100dvh',
          backgroundColor: '#f2f2f2'
        }}
      >
          <Header />

            {/* Sidebar component */}
            <Sidebar />
        {/* Header Component */}
      

    

        <Box
          component='main'
          className='MainContent'
          sx={{
            mt: {
              xs: '0px',
              sm: 'var(--Header-height)',
              md: 'var(--Header-height)'
            },
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(var(--Header-height))',
              sm: 'calc(var(--Header-height))',
              md: 3
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            //height: '100dvh',
            marginLeft: { sx: 0, md: 'var(--Sidebar-width)' }, // Add space for the sidebar
            padding: 2,
            gap: 1,
            zIndex:0,
          }}
        >
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
       
            <Breadcrumbs
              size='sm'
              aria-label='breadcrumbs'
              separator={<ChevronRightRoundedIcon />}
              sx={{ pl: 0 }}
            >
              <Link
                underline='none'
                color='neutral'
                href='#some-link'
                aria-label='Home'
              >
                <HomeRoundedIcon />
              </Link>
              <Link
                underline='hover'
                color='neutral'
                href='#some-link'
                sx={{ fontSize: 12, fontWeight: 500 }}
              >
                Dashboard
              </Link>
              <Typography
                color='primary'
                sx={{ fontWeight: 500, fontSize: 12 }}
              >
                Orders
              </Typography>
            </Breadcrumbs>
          </Box> */}

          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {/* <Typography level='h3' component='h1'>
              Orders
            </Typography> 

            {/* <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button> */}
          </Box>

          <Box sx={{}}>
            <Routes>
              <Route path='/teachers' element={<Teachers />} />
              <Route path='/students' element={<Students />} />
              <Route path='/school' element={<School />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/sms' element={<SMS />} />
              <Route path='/examinations' element={<Examinations />} />
            </Routes>
          </Box>

          {/* Main content */}
        </Box>
      </Box>
    </CssVarsProvider>
  )
}
