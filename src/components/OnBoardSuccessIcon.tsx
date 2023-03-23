import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const OnBoardSccessIcon = () => (
  <Svg width={114} height={114} fill="none">
    <Circle cx={57} cy={57} r={57} fill="#fff" fillOpacity={0.25} />
    <Circle cx={57} cy={57} r={43} fill="#fff" />
    <Path
      d="M49.775 73.93c-.425 0-.838-.084-1.24-.249a3.352 3.352 0 0 1-1.097-.743L34.617 60.117c-.661-.661-.992-1.464-.992-2.409 0-.944.33-1.747.992-2.408.66-.661 1.452-.992 2.373-.992.92 0 1.735.33 2.443.992l10.342 10.342L74.567 40.92c.66-.661 1.452-1.004 2.373-1.027.92-.024 1.711.319 2.373 1.027.66.66.991 1.464.991 2.408 0 .945-.33 1.747-.992 2.408l-27.2 27.2c-.33.331-.696.579-1.097.744a3.228 3.228 0 0 1-1.24.248Z"
      fill="#188748"
    />
  </Svg>
);

export default OnBoardSccessIcon;
