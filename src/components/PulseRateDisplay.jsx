// src/components/PulseRateDisplay.js
import React from 'react';
import { Typography, Paper } from '@mui/material';

const PulseRateDisplay = ({ pulseRate }) => {
  return (
    
      <Typography variant="h4" sx={{ color: 'primary.main', mt: 1 }}>
        {pulseRate} BPM
      </Typography>

  );
};

export default PulseRateDisplay;
