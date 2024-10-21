import { Card, CardContent, CardActions, Typography, Button, Modal, Box, FormLabel, Input, Grid } from '@mui/joy';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Students() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Handlers for Add Student modal
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  // Handlers for Demo modal
  const handleShowDemoModal = () => setShowDemoModal(true);
  const handleHideDemoModal = () => setShowDemoModal(false);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3, color: '#0D0D0D', fontSize: '20px', fontWeight: 'bold' }}>
        Students
      </Typography>
      
      {/* Student Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Card variant="outlined" sx={{ minWidth: '600px', maxWidth: '100%' }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0D0D0D', fontSize: '18px' }}>
              Everything Students Related
            </Typography>
            <Typography variant="body1" sx={{ color: '#0D0D0D', fontSize: '12px' }}>
              Manage Students, View Student Details, Enrollment, and More
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="solid"
              size="sm"
              sx={{
                backgroundColor: '#00007D',
                color: 'white',
                borderRadius: '20px',
                maxWidth: '150px',
                '&:hover': { backgroundColor: '#00004D' }
              }}
              onClick={handleOpenAddModal}
            >
              <AddIcon sx={{ mr: 1 }} />
              Add Student
            </Button>
          </CardActions>
        </Card>
      </div>

      {/* Add Student Modal */}
      <Modal open={openAddModal} onClose={handleCloseAddModal}>
        <Box sx={{ 
          padding: '16px', 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          maxWidth: '600px', 
          margin: 'auto', 
          marginTop: '100px', 
          boxShadow: 24 // Added shadow for better visibility
        }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: '#0D0D0D' }}>
            Add New Student
          </Typography>

          <Grid container spacing={2}>
            {/* First Row: First Name and Last Name */}
            <Grid item xs={6}>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <Input id="first-name" placeholder="Enter first name" fullWidth sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={6}>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <Input id="last-name" placeholder="Enter last name" fullWidth sx={{ mb: 2 }} />
            </Grid>

            {/* Second Row: Location and Date of Birth */}
            <Grid item xs={6}>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input id="location" placeholder="Enter location" fullWidth sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={6}>
              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <Input
                id="dob"
                placeholder="Enter date of birth"
                fullWidth
                sx={{ mb: 2 }}
                startDecorator={<CalendarTodayIcon />}
              />
            </Grid>
            {/* Fourth Row: Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="solid"
                sx={{ mt: 2, backgroundColor: '#00007D', color: 'white', '&:hover': { backgroundColor: '#00004D' } }}
                fullWidth
                startIcon={<PersonAddIcon />}
                onClick={handleCloseAddModal}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default Students;
