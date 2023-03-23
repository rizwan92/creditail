import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const LoaderIcon = () => (
  <Svg width={20} height={20} fill="none">
    <Path fill="url(#a)" d="M0 0h20v20H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.005)" />
      </Pattern>
      <Image
        id="b"
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default LoaderIcon;