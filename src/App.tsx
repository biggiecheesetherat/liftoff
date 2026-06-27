import React, { useState } from 'react';
import { 
  ThemeProvider, createTheme, CssBaseline, Box 
} from '@mui/material';
import TitleBar from './TitleBar';
import BlocklyEditor from './BlocklyEditor';

// The M3 Dark Mode Configuration
const m3Theme = createTheme({
  palette: {
    mode: 'dark', // Tells MUI to use dark mode defaults (white text, dark backgrounds)
    primary: { main: '#D0BCFF' }, // M3 "Primary" for dark mode
    background: { 
      default: '#1C1B1F', // M3 Dark Surface
      paper: '#1C1B1F' 
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 24, textTransform: 'none', padding: '10px 24px' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { '& .MuiOutlinedInput-root': { borderRadius: 12 } },
      },
    },
  },
});

export default function App() {
  const [projectName, setProjectName] = useState("Untitled");

  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline /> {/* Crucial: Applies the dark background color to the <body> */}
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        <TitleBar projectName={projectName} setProjectName={setProjectName} />
        <Box sx={{ flexGrow: 1, p: 0 }}>
          <BlocklyEditor />
        </Box>
      </Box>
    </ThemeProvider>
  );
}