import {makeScene2D, CubicBezier, Circle, Spline, Knot} from '@motion-canvas/2d';
import {createRef, all} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const column1 = -400;
  const column2 = -200;
  const column3 = -100;
  const column4 = 100;
  const column5 = 200;
  const column6 = 400;

  const row1 = 200;
  const row2 = 100;
  const row3 = 0;
  const row4 = -100;
  const row5 = -200;

  const circle = 20;

  const bezier1 = createRef<CubicBezier>();
  const bezier2 = createRef<CubicBezier>();
  const bezier3 = createRef<CubicBezier>();
  const bezier4 = createRef<CubicBezier>();
  const bezier5 = createRef<CubicBezier>();
  const bezier6 = createRef<CubicBezier>();
  const bezier7 = createRef<CubicBezier>();
  const bezier8 = createRef<CubicBezier>();
  const bezier9 = createRef<CubicBezier>();
  const bezier10 = createRef<CubicBezier>();
  const spline1 = createRef<Spline>();
  const spline2 = createRef<Spline>();
  const spline3 = createRef<Spline>();

  view.add(
    <>
      <Circle x={column1} y={row1} width={circle} height={circle} fill="#e13238" />
      <Circle x={column2} y={row1} width={20} height={circle} fill="#e13238" />
      <Circle x={column3} y={row1} width={20} height={circle} fill="#e13238" />
      <Circle x={column4} y={row1} width={20} height={circle} fill="#e13238" />
      <Circle x={column5} y={row1} width={20} height={circle} fill="#e13238" />
      <Circle x={column6} y={row1} width={20} height={circle} fill="#e13238" />
      <Circle x={column1} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column2} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column3} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column4} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column5} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column6} y={row2} width={20} height={circle} fill="#e13238" />
      <Circle x={column1} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column2} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column3} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column4} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column5} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column6} y={row3} width={20} height={circle} fill="#e13238" />
      <Circle x={column1} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column2} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column3} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column4} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column5} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column6} y={row4} width={20} height={circle} fill="#e13238" />
      <Circle x={column1} y={row5} width={20} height={circle} fill="#e13238" />
      <Circle x={column2} y={row5} width={20} height={circle} fill="#e13238" />
      <Circle x={column3} y={row5} width={20} height={circle} fill="#e13238" />
      <Circle x={column4} y={row5} width={20} height={circle} fill="#e13238" />
      <Circle x={column5} y={row5} width={20} height={circle} fill="#e13238" />
      <Circle x={column6} y={row5} width={20} height={circle} fill="#e13238" />

      <CubicBezier
        ref={bezier1}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column1 - 100, row1-200]}
        p1={[column1 - 50, row1-150]}
        p2={[column1 - 30, row1-100]}
        p3={[column1, row1]}
        end={0}
      />

      <CubicBezier
        ref={bezier2}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column2, row1]}
        p1={[column2+50, row1+20]}
        p2={[column2+50, row1+20]}
        p3={[column3, row1]}
        end={0}
      />

      <CubicBezier
        ref={bezier3}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column4, row1]}
        p1={[column4+50, row1+20]}
        p2={[column4+50, row1+20]}
        p3={[column5, row1]}
        end={0}
      />

      <CubicBezier
        ref={bezier4}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column6, row1]}
        p1={[column6+20, row1-50]}
        p2={[column6+20, row1-50]}
        p3={[column6, row2]}
        end={0}
      />

      <CubicBezier
        ref={bezier5}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column5, row2]}
        p1={[column5-30, row2+180]}
        p2={[column5-30, row2+180]}
        p3={[column4, row2]}
        end={0}
      />

      <CubicBezier
        ref={bezier6}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column3, row2]}
        p1={[column3-10, row2+160]}
        p2={[column3-30, row2+160]}
        p3={[column2, row2]}
        end={0}
      />

      <Spline
        ref={spline1}
        lineWidth={6}
        stroke={'lightseagreen'}
        points={[
          [column1, row2],
          [column1-40, row1-20],
          [column1, row1-20],
          [column1-50, row1-40],
          [column1-30, row1-40],
          [column1, row1-60],
          [column1-40, row1-80],
          [column1, row3],
        ]}
        end={0}
      />

      <CubicBezier
        ref={bezier7}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column2, row3]}
        p1={[column2-40, row3+200]}
        p2={[column2+40, row3+200]}
        p3={[column3, row3]}
        end={0}
      />  

      <CubicBezier
        ref={bezier8}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column4, row3]}
        p1={[column4-50, row3+200]}
        p2={[column4+30, row3+200]}
        p3={[column5, row3]}
        end={0}
      />

      <Spline
        ref={spline2}
        lineWidth={6}
        stroke={'lightseagreen'}
        points={[
          [column6, row3],
          [column6-20, row1 - 60],
          [column6+20, row1 - 60],
          [column6, row4],
        ]}
        end={0}
      />

      <CubicBezier
        ref={bezier9}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column5, row4]}
        p1={[column5+30, row4+250]}
        p2={[column5, row4+150]}
        p3={[column4, row4]}
        end={0}
      />

      <CubicBezier
        ref={bezier10}
        lineWidth={6}
        stroke={'lightseagreen'}
        p0={[column3, row4]}
        p1={[column3+50, row4+200]}
        p2={[column3-30, row4+150]}
        p3={[column2, row4]}
        end={0}
      />

<Spline
        ref={spline3}
        lineWidth={6}
        stroke={'lightseagreen'}
        points={[
          [column1, row4],
          [column1-40, row4+140],
          [column1+40, row4+140],
          [column1, row5],
        ]}
        end={0}
      />
    </> 
  );

  yield* bezier1().end(1, 1);
  yield* bezier2().end(1, 1);
  yield* bezier3().end(1, 1);
  yield* bezier4().end(1, 1);
  yield* bezier5().end(1, 1);
  yield* bezier6().end(1, 1);
  yield* all(spline1().start(0, 1), spline1().end(1, 2));
  yield* bezier7().end(1, 1);
  yield* bezier8().end(1, 1);
  yield* all(spline2().start(0, 1), spline2().end(1, 2));
  yield* bezier9().end(1, 1);
  yield* bezier10().end(1, 1);
  yield* all(spline3().start(0, 1), spline3().end(1, 2));
});