import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {GradientBackground} from '../components/GradientBackground';
import {PRODUCT} from '../constants';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({frame, fps, config: {damping: 16, stiffness: 75, mass: 0.9}});
  const titleOpacity = interpolate(frame, [14, 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const glow = interpolate(Math.sin(frame / 14), [-1, 1], [0.65, 1]);

  return (
    <GradientBackground>
      <div className="safe-area">
        <div
          style={{
            position: 'relative',
            width: 304,
            height: 304,
            display: 'grid',
            placeItems: 'center',
            transform: `scale(${interpolate(logo, [0, 1], [0.72, 1])})`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -28,
              borderRadius: '50%',
              background: `rgba(255, 255, 255, ${0.18 * glow})`,
              filter: 'blur(8px)',
            }}
          />
          <div className="heart">
            <div className="plus-mark" />
          </div>
        </div>
        <h1
          className="title-xl white-text"
          style={{opacity: titleOpacity, transform: `translateY(${interpolate(titleOpacity, [0, 1], [24, 0])}px)`}}
        >
          {PRODUCT.name}
        </h1>
        <p className="subtitle muted-white" style={{opacity: titleOpacity}}>
          {PRODUCT.slogan}
        </p>
      </div>
    </GradientBackground>
  );
};
