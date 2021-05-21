import React from "react";
import Svg, { Path } from 'react-native-svg'
import {IconProps} from './interface'

export default function IconHome({ style }: IconProps) {
    return (
        <Svg width={style.width} height={style.height} viewBox="0 0 29 28">
            < Path fill={style.contrastColor}
               
            />

            <Path fill={style.fillColor}

                />

            <Path fill={style.contrastColor}
                 />

        </Svg>
    )

};