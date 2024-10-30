import {makeScene2D, CubicBezier, Circle} from '@motion-canvas/2d';
import {createRef, all, tween, map} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const column1 = -50;
  const column2 = column1 + 100;
  const row1 = 45;
  const row2 = row1 - 100;

  const circle = 20;

  const bezier1 = createRef<CubicBezier>();
  const bezier2 = createRef<CubicBezier>();

  const holeColour = '#222';
  const stringColour = '#ddd';


  view.add(
    <>
      <Circle x={column1} y={row1} width={circle} height={circle} fill={holeColour} />
      <Circle x={column2} y={row1} width={circle} height={circle} fill={holeColour} />
      <Circle x={column1} y={row2} width={circle} height={circle} fill={holeColour} />
      <Circle x={column2} y={row2} width={circle} height={circle} fill={holeColour} />

      <CubicBezier
        ref={bezier1}
        lineWidth={6}
        stroke={stringColour}
        p0={[column1, row1]}
        p1={[column1, row1 + 40]}
        p2={[column2, row1 + 40]}
        p3={[column2, row1]}
        end={0}
      />

      <CubicBezier
        ref={bezier2}
        lineWidth={6}
        stroke={stringColour}
        p0={[column2, row2]}
        p1={[column2, row2 + 140]}
        p2={[column1, row2 + 140]}
        p3={[column1, row2]}
        end={0}
      />
    </>
  );

  yield* all(
    bezier1().end(1, 0.3),
    tween(
      0.4,
      (value) => bezier1()
        .p1([column1, map(row1 + 40, row1, value)])
        .p2([column2, map(row1 + 40, row1, value)])
    )
  );
  yield* bezier2().end(1, 0.3);
  yield* all(
    tween(
      0.2,
      (value) => bezier1()
        .p1([column1, map(row1, row1 - 70, value)])
        .p2([column2, map(row1, row1 - 70, value)])
    ),
    tween(
      0.2,
      (value) => bezier2()
        .p1([column2, map(row2 + 140, row2 + 70, value)])
        .p2([column1, map(row2 + 140, row2 + 70, value)])
    )
  )
});