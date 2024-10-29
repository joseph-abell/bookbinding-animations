import {makeScene2D, CubicBezier} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const bezier = createRef<CubicBezier>();
  const bezier2 = createRef<CubicBezier>();
  const bezier3 = createRef<CubicBezier>();
  const bezier4 = createRef<CubicBezier>();
  const bezier5 = createRef<CubicBezier>();
  const bezier6 = createRef<CubicBezier>();

  view.add(
    <CubicBezier
      ref={bezier}
      lineWidth={6}
      stroke={'lightseagreen'}
      p0={[-300, 100]}
      p1={[-250, 50]}
      p2={[-250, -50]}
      p3={[-200, 0]}
      end={0}
    />
  ).add(<CubicBezier
    ref={bezier2}
    lineWidth={6}
    stroke={'lightseagreen'}
    p0={[0, 0]}
    p1={[50, 20]}
    p2={[50, 20]}
    p3={[100, 0]}
    end={0}
  />).add(<CubicBezier
    ref={bezier3}
    lineWidth={6}
    stroke={'lightseagreen'}
    p0={[500, 0]}
    p1={[550, 20]}
    p2={[550, 20]}
    p3={[600, 0]}
    end={0}
  />)
  .add(<CubicBezier
    ref={bezier4}
    lineWidth={6}
    stroke={'lightseagreen'}
    p0={[700, 0]}
    p1={[720, -50]}
    p2={[720, -50]}
    p3={[700, -100]}
    end={0}
  />)
  .add(<CubicBezier
    ref={bezier5}
    lineWidth={6}
    stroke={'lightseagreen'}
    p0={[600, -100]}
    p1={[550, 60]}
    p2={[550, 60]}
    p3={[500, -100]}
    end={0}
  />)
  .add(<CubicBezier
    ref={bezier6}
    lineWidth={6}
    stroke={'lightseagreen'}
    p0={[100, -100]}
    p1={[50, 60]}
    p2={[50, 60]}
    p3={[0, -100]}
    end={0}
  />);

  yield* bezier().end(1, 1);
  yield* bezier2().end(2, 1);
  yield* bezier3().end(3, 1);
  yield* bezier4().end(4, 1);
  yield* bezier5().end(5, 1);
  yield* bezier6().end(5, 1);
});