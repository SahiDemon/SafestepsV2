import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Ensure this path is correct
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PulseRateDisplay from './components/PulseRateDisplay'; // Adjust the import path as necessary

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const { data, error } = await supabase
        .from('safesteps')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching data:', error);
        return;
      }

      setData(data);
    };

    fetchHistoricalData();
  }, []);
  const renderChart = (dataKey, color) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_at" tick={{ fill: '#d3ccba' }} />

        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke={color} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );


  const latestPulseRate = data[data.length - 1]?.pulse_rate;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', width: '100%' }}>
          Safesteps Dashboard
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="start">
          {/* Latest Readings Display */}
          <Grid item xs={12} md={3}>
            <Card variant="outlined" sx={{ bgcolor: 'background.paper', boxShadow: 3, mt: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                  Pulse Rate
                </Typography>
                <PulseRateDisplay pulseRate={data[data.length - 1]?.pulse_rate || 'N/A'} />

              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ bgcolor: 'background.paper', boxShadow: 3, mt: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                  Temperature
                </Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  {data[data.length - 1]?.temperature || 'N/A'} °C
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ bgcolor: 'background.paper', boxShadow: 3, mt: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                  Humidity
                </Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  {data[data.length - 1]?.humidity || 'N/A'}%
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ bgcolor: 'background.paper', boxShadow: 3, mt: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                  Air Quality
                </Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  {data[data.length - 1]?.airQuality || 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>



          <Grid item xs={12} sm={8} container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                    Temperature
                  </Typography>
                  {renderChart('temperature', '#8884d8')}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                    Humidity
                  </Typography>
                  {renderChart('humidity', '#82ca9d')}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'medium' }}>
                    Air Quality
                  </Typography>
                  {renderChart('airQuality', '#ffc658')}
                </CardContent>
              </Card>
            </Grid>
          </Grid>


        </Grid>
      </Container>
    </Box>
  );


};

export default Dashboard;
