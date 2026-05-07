import {Composition} from 'remotion';
import {MeuProntuarioVideo} from './MeuProntuarioVideo';

export const Root = () => {
  return (
    <Composition
      id="MeuProntuarioComercial"
      component={MeuProntuarioVideo}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
