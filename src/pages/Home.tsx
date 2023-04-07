import { Box, Typography } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import EnvVariables from '../utils/variables.utils';
import { useEffect } from 'react';

export const Home = () => {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  const getStocksList = async () => {
    const responseData = (
      await axios.get(`${EnvVariables.INVEST_SITE_BASE_URL}`, axiosConfig)
    ).data;

    console.log('reposta investsite', responseData);

    // axios.post('');
  };

  useEffect(() => {
    getStocksList();
  });

  return (
    <Box>
      <Typography>Ready to go! 123</Typography>
    </Box>
  );
};
