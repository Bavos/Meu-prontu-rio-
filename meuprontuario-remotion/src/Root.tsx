import React from 'react';
import {Composition, Sequence} from 'remotion';
import './styles.css';
import {DURATION_IN_FRAMES, FPS, TIMELINE, VIDEO_HEIGHT, VIDEO_WIDTH} from './constants';
import {Scene01Intro} from './scenes/Scene01Intro';
import {Scene02Problem} from './scenes/Scene02Problem';
import {Scene03Solution} from './scenes/Scene03Solution';
import {Scene04Benefits} from './scenes/Scene04Benefits';
import {Scene05Human} from './scenes/Scene05Human';
import {Scene06CTA} from './scenes/Scene06CTA';

const MeuProntuarioVideo: React.FC = () => (
  <>
    <Sequence from={TIMELINE.intro.from} durationInFrames={TIMELINE.intro.duration}>
      <Scene01Intro />
    </Sequence>
    <Sequence from={TIMELINE.problem.from} durationInFrames={TIMELINE.problem.duration}>
      <Scene02Problem />
    </Sequence>
    <Sequence from={TIMELINE.solution.from} durationInFrames={TIMELINE.solution.duration}>
      <Scene03Solution />
    </Sequence>
    <Sequence from={TIMELINE.benefits.from} durationInFrames={TIMELINE.benefits.duration}>
      <Scene04Benefits />
    </Sequence>
    <Sequence from={TIMELINE.human.from} durationInFrames={TIMELINE.human.duration}>
      <Scene05Human />
    </Sequence>
    <Sequence from={TIMELINE.cta.from} durationInFrames={TIMELINE.cta.duration}>
      <Scene06CTA />
    </Sequence>
  </>
);

export const RemotionRoot: React.FC = () => (
  <Composition
    id="MeuProntuarioComercial"
    component={MeuProntuarioVideo}
    durationInFrames={900}
    fps={30}
    width={1080}
    height={1920}
  />
);
