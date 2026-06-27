import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Box } from '@mui/material';

const TitleBar = ({ projectName, setProjectName }: { projectName: string, setProjectName: (val: string) => void }) => {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper', // Automatically switches based on mode
        color: 'text.primary',       // Automatically switches to white in dark mode
        borderBottom: '1px solid',
        borderColor: 'divider'       // Automatically switches to a subtle border
        }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: '-0.5px' }}>
          Liftoff
        </Typography>

        {/* Input field for the project name */}
        <TextField 
          size="small" 
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          sx={{ 
            width: 200,
            '& .MuiOutlinedInput-root': { borderRadius: 8 } 
          }}
        />

        <Box sx={{ flexGrow: 1 }} />

        {/* Primary Action */}
        <Button 
          variant="contained" 
          disableElevation
          sx={{ borderRadius: 24, px: 3 }}
        >
          Run
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;