import React from 'react';

const EdgeCanTake = (srcId, targetId) => {
  return {
    id            : `${srcId}-${targetId}`,
    source        : srcId,
    target        : targetId,
    type          : 'smoothstep',
    style         : { stroke: 'grey' },
    animated      : 'false',
    arrowHeadType : 'arrowclosed'
  };
};

export default EdgeCanTake;
