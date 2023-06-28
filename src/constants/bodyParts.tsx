const HEAD = (
  <div
    key="head"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  ></div>
);

const BODY = (
  <div
    key="body"
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    key="right_arm"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    key="left_arm"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    key="right_leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    key="left_leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export default BODY_PARTS;
