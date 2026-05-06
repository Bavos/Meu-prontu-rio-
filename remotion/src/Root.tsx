import React from 'react';
import {Composition} from 'remotion';
import './styles.css';
import {DURATION_IN_FRAMES, FPS, HEIGHT, MeuProntuarioCommercial, WIDTH} from './compositions/MeuProntuarioCommercial';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MeuProntuarioCommercial"
      component={MeuProntuarioCommercial}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{}}
    />
  </>
);
