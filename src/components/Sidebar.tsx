import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../utilis';
import { MenuBookRounded } from '@mui/icons-material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import logo from '../lg.png'
import {Link} from 'react-router-dom';


function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  const isMobile = window.innerWidth < 600;
  return (
    <Sheet
      className="Sidebar"
      sx={{
        // position: { xs: 'fixed', md: 'sticky' },
        position: 'fixed',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        mt:{sm:0, lg: 'var(--Header-height)'},
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 1000000000,
        height: '100vh',
        width: 'var(--Sidebar-width)',
        p: 0.5,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>

        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      {/* <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" /> */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
   <Box sx={{}}>
 
     {isMobile ? (   <>
     <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
      <Avatar
        src={logo}
        srcSet={logo}
        sx={{ maxWidth: '40px', maxHeight: '40px' }}
      />
      <Typography  level="title-lg">ShuleKwanza</Typography>
      </Box>
      <Divider/>
    
      </>):(<Box > </Box>)}


      </Box>


        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
            <Link to="/">
          <ListItem>
            <ListItemButton>
              <GridViewOutlinedIcon  />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>


          <Link to="/school">
          <ListItem>
          
            <ListItemButton>
              <ApartmentRoundedIcon/>
              <ListItemContent>
                <Typography level="title-sm">School</Typography>
              </ListItemContent>
            </ListItemButton>
      
          </ListItem>
          </Link>

          <Link to="/Teachers">
          <ListItem>
            <ListItemButton >
              <PersonRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Teachers</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>

   <Link to="/Students">
          <ListItem>
            <ListItemButton >
              <MenuBookOutlinedIcon  />
              <ListItemContent>
                <Typography level="title-sm">Students</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Academics</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: 'rotate(180deg)',
                          }
                        : {
                            transform: 'none',
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
              <Link to="/examinations">
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>Examinations</ListItemButton>
                </ListItem>
                </Link>
                
                <ListItem>
                  <ListItemButton>Classes</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Subjects</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>CA</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>

       

       

        </List>

   
      </Box>



      {/* <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Siriwat K.</Typography>
          <Typography level="body-xs">siriwatk@test.com</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral">
          <LogoutRoundedIcon />
        </IconButton>
      </Box> */}
    </Sheet>
  );
}
