import React, { useLayoutEffect, useRef, useState } from 'react';
import defaultStyles from './Connector.module.scss';
import classNames from 'classnames';

const createViewBox = (width, height) => (
    `0 0 ${width} ${height}`
)

const createPath = (width, height) => (
    `
      M 1 1 
      L 1 ${height / 2}
      L ${width - 1} ${height / 2}
      L ${width - 1} ${height}
    `
)

export default function Connector({ isVisible, styles = defaultStyles, fillDuration, colorDuration }) {
    const svgRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    const style = {
        '--pathLength': pathLength,
        '--fillDuration': fillDuration,
        '--colorDuration': colorDuration
    }

    useLayoutEffect(() => {
        function setSize() {
            const { width, height } = svgRef.current.getBoundingClientRect();
            setDimensions({ width, height });
            const path = svgRef
                .current
                .querySelector('path');
            setPathLength(path.getTotalLength());
        }
        setSize();

        new ResizeObserver(setSize)
            .observe(svgRef.current);
    }, [])

    return (
        <svg className={classNames({
            [styles.connectorLine]: true,
            [styles.hidden]: !isVisible
        })} ref={svgRef} style={style} version="1.1" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" viewBox={createViewBox(dimensions.width, dimensions.height)} height="100%" width="100%">
            <path d={createPath(dimensions.width, dimensions.height)} vectorEffect="non-scaling-stroke" strokeWidth="2" fill="none"/>
        </svg>

    )
}
