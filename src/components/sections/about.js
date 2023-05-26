import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 50px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--purple);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--purple);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid #d97bffa8;
      top: 20px;
      left: 20px;
      z-index: -1;
    }

    a {
      padding: 10px;

      &.hashtag {
        padding-left: 20px;
      }
    }

    .hashtag {
      padding-left: 20px;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Node',
    'React',
    'Java',
    'Angular',
    'Golang',
    'Postgres',
    'Solidity',
    'MongoDB',
    'AWS Services',
    'Docker',
    'Terraform',
    'Kubernetes',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p style={{ fontFamily: 'Courier New', fontSize: '18px' }}>
              👋 Hi, I'm Daniel, and I am a Senior Software Engineer hailing from Argentina. I have
              over 13 years of experience in both backend and frontend development, along with
              expertise in Cloud Services such as AWS o GCP.
            </p>
            <p style={{ fontFamily: 'Courier New', fontSize: '18px' }}>
              As a tech enthusiast, I am passionate about working on projects that can make a real
              impact on users. Throughout my career, I have embraced various roles and technologies,
              allowing me to quickly adapt to any team's needs and requirements.
            </p>
            <p style={{ fontFamily: 'Courier New', fontSize: '18px' }}>
              I am a Crypto enthusiast. So, feel free to contact me if you are interested in:{' '}
            </p>
            <p style={{ fontFamily: 'Courier New', marginTop: '-10px' }}>
              <a href="https://us.mullenlowe.com/">#Bitcoin</a>
              <a href="https://us.mullenlowe.com/">#Blockchain</a>
              <a href="https://us.mullenlowe.com/" style={{ paddingLeft: '5px' }}>
                #NFTs
              </a>
              <a href="https://us.mullenlowe.com/" style={{ paddingLeft: '5px' }}>
                #Metaverse
              </a>
              <a href="https://us.mullenlowe.com/" style={{ paddingLeft: '5px' }}>
                #DeFi
              </a>
              <a href="https://us.mullenlowe.com/">#Web3</a>
              <a href="https://us.mullenlowe.com/" style={{ paddingLeft: '5px' }}>
                #DAO
              </a>
              <a href="https://us.mullenlowe.com/" style={{ paddingLeft: '5px' }}>
                #SmartContracts
              </a>
            </p>

            <p style={{ fontFamily: 'Courier New', fontSize: '18px' }}>
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
