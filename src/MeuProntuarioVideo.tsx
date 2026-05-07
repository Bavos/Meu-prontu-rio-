import {AbsoluteFill, Sequence} from 'remotion';
import {Scene01Intro} from './scenes/Scene01Intro';
import {Scene02Problem} from './scenes/Scene02Problem';
import {Scene03Solution} from './scenes/Scene03Solution';
import {Scene04Benefits} from './scenes/Scene04Benefits';
import {Scene05Human} from './scenes/Scene05Human';
import {Scene06CTA} from './scenes/Scene06CTA';
import {colors} from './styles';

export const MeuProntuarioVideo = () => {
  return (
    <AbsoluteFill style={{backgroundColor: colors.white}}>
      <Sequence from={0} durationInFrames={120}>
        <Scene01Intro />
      </Sequence>
      <Sequence from={120} durationInFrames={150}>
        <Scene02Problem />
      </Sequence>
      <Sequence from={270} durationInFrames={180}>
        <Scene03Solution />
      </Sequence>
      <Sequence from={450} durationInFrames={210}>
        <Scene04Benefits />
      </Sequence>
      <Sequence from={660} durationInFrames={120}>
        <Scene05Human />
      </Sequence>
      <Sequence from={780} durationInFrames={120}>
        <Scene06CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
