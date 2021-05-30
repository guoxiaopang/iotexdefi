import React from 'react';
import { Global } from '@emotion/react';
import IBMPlexSansMedium from '../assets/fonts/IBMPlexSans-Medium.ttf';
import IBMPlexSansRegular from '../assets/fonts/IBMPlexSans-Regular.ttf';

const Fonts = () => (
  <Global
    styles={`
      /* IBMPlexSansMedium */
      @font-face {
        font-family: 'Changa';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${IBMPlexSansMedium}') format('truetype');
      }
      /* IBMPlexSansRegular */
      @font-face {
        font-family: 'ChangaRegular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${IBMPlexSansRegular}') format('truetype');
      }
      `}
  />
);
export default Fonts;
