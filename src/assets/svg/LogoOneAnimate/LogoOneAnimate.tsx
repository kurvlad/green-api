import clsx from 'clsx';
import type { FC } from 'react';

import type { LogoProps } from './LogoOneAnimate.interface';
import styles from './LogoOneAnimate.module.css';

export const LogoOneAnimate: FC<LogoProps> = ({ className, color }) => (
    <svg
        className={clsx(styles.logo, className)}
        width="48"
        height="24"
        viewBox="0 0 72 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="ipp-animation"
    >
        <g id="one">
            <path
                className={styles.one__1__5}
                d="m 31.670094,42.104371 h 4.659812 22.705465 v 5.9041 H 37.576496 31.640445"
                style={{
                    clipRule: 'evenodd',
                    fill: '#151515',
                    fillRule: 'evenodd',
                    strokeWidth: '1.00939',
                }}
                id="1-5"
            />

            <path
                className={styles.one__1__4}
                d="m 26.429839,27.344541 h 3.5386 v 11.0996 c 0,0 0,0.3543 -0.0292,0.9152 0.1166,1.2103 0.5535,2.7453 2.2431,2.7453 l -0.0291,5.9041 c -2.5344,0 -4.3405,-0.679 -5.6805,-1.6827"
                style={{
                    clipRule: 'evenodd',
                    fill: '#151515',
                    fillRule: 'evenodd',
                }}
                id="1-4"
            />

            <path
                className={styles.one__1__3}
                d="m 20.79234,42.104641 c 1.6604,0 2.1265,-1.535 2.243,-2.7453 -0.0583,-0.5609 -0.0291,-0.9152 -0.0291,-0.9152 l 0.0291,-11.0996 h 3.394499 c 0,0 1.3829,19.9852 0.0429,18.9815 -1.3109,1.0037 -3.146099,1.6827 -5.680399,1.6827"
                style={{
                    display: 'inline',
                    clipRule: 'evenodd',
                    fill: '#151515',
                    fillRule: 'evenodd',
                }}
                id="1-3"
            />

            <path
                className={styles.one__1__2}
                style={{
                    display: 'inline',
                    fill: '#151515',
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: 'none',
                    strokeWidth: '1.01686',
                    strokeOpacity: '1',
                }}
                d="m 8.9801654,42.135648 12.1703106,-0.031 v 5.9041 l -12.1703106,0.0015 z"
                id="1-2"
            />

            <path
                className={styles.one__1__1}
                d="m 9.256379,48.010249 c -9.4091744,0 -9.1469994,-9.5351 -9.1469994,-9.5351 V 7.3607781 c 2.942189,-1.71217 5.360019,-4.25092 6.933069,-7.32103002 V 37.914248 c 0,0 -0.55348,4.221401 2.2139304,4.221401"
                style={{
                    clipRule: 'evenodd',
                    fill: '#151515',
                    fillRule: 'evenodd',
                }}
                id="1-1"
            />
        </g>

        <g id="two">
            <path
                className={styles.two__2__3}
                d="m 31.823877,16.414416 c 2.5343,0 2.0391,4.2214 2.0391,4.2214 v 18.3321 h 6.3505 v -18.893 c 0,0 0.2622,-9.535 -8.3896,-9.535 z"
                style={{
                    clipRule: 'evenodd',
                    display: 'inline',
                    fill: `${color ? color : '#17aaab'}`,
                    fillRule: 'evenodd',
                }}
                id="2-3"
            />

            <path
                className={styles.two__2__2}
                style={{
                    fill: `${color ? color : '#17aaab'}`,
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: 'none',
                    strokeWidth: '1.01377',
                    strokeOpacity: '1',
                }}
                d="m 20.807971,10.498967 11.192028,0.04095 2e-6,5.8745 -11.19203,-0.04095 z"
                id="2-2"
            />

            <path
                className={styles.two__2__1}
                d="m 21.150476,10.498967 c -8.622699,0 -8.389599,9.534999 -8.389599,9.534999 v 22.084837 l 6.350499,-3e-6 V 20.594866 c 0,0 -0.4953,-4.221399 2.0391,-4.221399"
                style={{
                    clipRule: 'evenodd',
                    fill: `${color ? color : '#17aaab'}`,
                    fillRule: 'evenodd',
                }}
                id="2-1"
            />
        </g>

        <g id="three">
            <path
                className={styles.three__3__3}
                d="m 62.8357,16.4136 c 2.5344,0 2.0391,4.2214 2.0391,4.2214 v 18.3321 h 6.3505 v -18.893 c 0,0 0.2622,-9.535 -8.3896,-9.535 z"
                style={{
                    clipRule: 'evenodd',
                    fill: `${color ? color : '#17aaab'}`,
                    fillRule: 'evenodd',
                }}
                id="3-3"
            />

            <path
                className={styles.three__3__2}
                style={{
                    fill: `${color ? color : '#17aaab'}`,
                    fillOpacity: '1',
                    fillRule: 'evenodd',
                    stroke: 'none',
                    strokeWidth: '1.00771',
                    strokeOpacity: '1',
                }}
                d="m 52,10.5391 h 11.046638 v 5.8745 H 52 Z"
                id="3-2"
            />

            <path
                className={styles.three__3__1}
                d="m 52.173901,10.5391 c -8.6226,0 -8.389601,9.535 -8.389601,9.535 v 18.6864 h 6.3505 V 20.635 c 0,0 -0.4953,-4.2214 2.0391,-4.2214"
                style={{
                    clipRule: 'evenodd',
                    fill: `${color ? color : '#17aaab'}`,
                    fillRule: 'evenodd',
                }}
                id="3-1"
            />
        </g>

        <path
            className={styles.four__4__1}
            d="M68.312 47.9705C69.9208 47.9705 71.225 46.6488 71.225 45.0184C71.225 43.3881 69.9208 42.0664 68.312 42.0664C66.7031 42.0664 65.3989 43.3881 65.3989 45.0184C65.3989 46.6488 66.7031 47.9705 68.312 47.9705Z"
            fill={color ? color : '#17AAAB'}
            id="4-1"
        />
    </svg>
);
