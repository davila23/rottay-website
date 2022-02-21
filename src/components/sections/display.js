import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import ReactPlayer from 'react-player';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin-top: 140px;
  background-color: transparent !important;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Display = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=AhXASwFRNhI&t=32s"
        style={{ backgroundColor: 'white' }}
        playing={true}
        muted={true}
        width={'900px'}
        height={'550px'}
        controls={true}
      />
    </StyledAboutSection>
  );
};

export default Display;
