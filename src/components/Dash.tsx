import React from 'react';
import { Box } from '@chakra-ui/react';

export const Dash = ({ width, mr = 0, ml = 0 }: { width: string; mr?: string | number; ml?: string | number }) => {
  return (
    <Box
      width={width}
      mr={mr}
      ml={ml}
      height="12px"
      borderRadius="12px"
      opacity="0.15"
      background="linear-gradient(180deg, #01D3DA 0%, #01D3DC 99.99%, #FD29B5 100%)"
    ></Box>
  );
};
