import { Card, CardContent, CardActions, Typography, Button } from '@mui/joy';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // Icon for Export button

function School() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            color: '#0D0D0D',
            fontSize: '20px', // Set font size for h4 level
            fontWeight: 'bold', // Set font weight to bold
          }}
          variant="h4" // Use the h4 variant for semantic HTML
        >
          School
        </Typography>

        {/* Buttons aligned to the right */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              color: '#000',
              maxWidth: '150px',
              borderRadius: '20px',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
            startIcon={<FileDownloadIcon />}
            onClick={() => console.log('Export action triggered')}
          >
            Export
          </Button>
          <Button
            variant="solid"
            sx={{
              backgroundColor: '#00007D',
              color: 'white',
              borderRadius: '20px',
              '&:hover': { backgroundColor: '#00004D' },
            }}
            startIcon={<AddIcon />}
            onClick={() => console.log('Create School action triggered')}
          >
            Create School
          </Button>
        </div>
      </div>

      {/* School Card */}
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Card 
          variant="outlined" 
          sx={{ 
            minWidth: '600px', 
            maxWidth: '100%', 
            maxHeight: '400px', // Increase the maximum height
            overflow: 'auto', // Allow scrolling if content overflows
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centers content vertically
            alignItems: 'center',
          }}
        >
          <CardContent sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Image inside the card */}
            <img 
              src="/static/img/school.jpg" // Relative path from the public directory
              alt="School"
              style={{ 
                width: '150px', // Set a specific width
                height: '150px', // Set a specific height
                borderRadius: '50%', // Make it round
                marginBottom: '16px', // Add space below the image
              }} 
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0D0D0D', fontSize: '18px', textAlign: 'center' }}>
              Welcome to ShuleKwanza
            </Typography>
            {/* Centered Description Text */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#0D0D0D', 
                fontSize: '14px', 
                textAlign: 'center', // Center align the text
                marginTop: '8px', // Space above the text
                paddingX: '16px', // Horizontal padding for spacing
              }} 
            >
              ShuleKwanza Secondary School is an English medium school and teaches Maths, Science, English, Kiswahili, Social Studies, and Physical Education according to the Tanzanian Curriculum and also offers the Turkish Language as a subject.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}> {/* Center the button */}
            <Button
              variant="solid"
              size="sm"
              sx={{
                backgroundColor: '#00007D',
                color: 'white',
                borderRadius: '20px',
                maxWidth: '150px',
                '&:hover': { backgroundColor: '#00004D' },
              }}
              onClick={() => console.log('Add action triggered')}
            >
              <AddIcon sx={{ mr: 1 }} />
              Create School
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default School;
