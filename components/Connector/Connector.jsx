import React, { useLayoutEffect, useRef, useState } from 'react';
import './Connector.scss';
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

function isInViewport(el) {
    var bounding = el.getBoundingClientRect();

    if (
        bounding.bottom >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
};

export default function Connector({ events }) {

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [hasAppeared, setHasAppeared] = useState(false);

    const hasAppearedRef = useRef(null);
    const containerRef = useRef(null);
    const svgRef = useRef(null);

    hasAppearedRef.current = hasAppeared;

    useLayoutEffect(() => {
        events.subscribe("connector/content.scroll", () => {
            // if(!hasAppearedRef.current) {
            setHasAppeared(isInViewport(containerRef.current))
            // }
        })

        function setSize() {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }
        setSize();

        new ResizeObserver(setSize)
            .observe(containerRef.current);
    }, [events, hasAppeared])

    return (
        <div className="line-container-container">
            <div className={classNames({
                "line-container": true,
                "hidden": !hasAppeared
            })} ref={containerRef}>
                <svg ref={svgRef} id="line" version="1.1" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" viewBox={createViewBox(dimensions.width, dimensions.height)} height="100%" width="100%">
                    <path d={createPath(dimensions.width, dimensions.height)} vectorEffect="non-scaling-stroke" strokeWidth="2"
                        fill="none">
                    </path>
                </svg>

            </div>
        </div>
    )
}