export const burnSurfaceValues = {
  baby0: {
    headNeck: 19,
    anteriorTrunk: 13,
    posteriorTrunk: 13,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 13.5,
    leftLeg: 13.5,
    rightButtock: 2.5,
    leftButtock: 2.5,
    genitalPerineum: 1
  },
  year1: {
    headNeck: 17,
    anteriorTrunk: 13,
    posteriorTrunk: 13,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 14.5,
    leftLeg: 14.5,
    rightButtock: 2.5,
    leftButtock: 2.5,
    genitalPerineum: 1
  },
  year5: {
    headNeck: 13,
    anteriorTrunk: 13,
    posteriorTrunk: 13,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 16.75,
    leftLeg: 16.75,
    rightButtock: 2.5,
    leftButtock: 2.5,
    genitalPerineum: 1
  },
  year10: {
    headNeck: 11,
    anteriorTrunk: 13,
    posteriorTrunk: 13,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 17.5,
    leftLeg: 17.5,
    rightButtock: 2.5,
    leftButtock: 2.5,
    genitalPerineum: 1
  },
  year15: {
    headNeck: 9,
    anteriorTrunk: 13,
    posteriorTrunk: 13,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 18,
    leftLeg: 18,
    rightButtock: 2.5,
    leftButtock: 2.5,
    genitalPerineum: 1
  },
  adult: {
    headNeck: 9,
    anteriorTrunk: 18,
    posteriorTrunk: 18,
    rightArm: 9,
    leftArm: 9,
    rightLeg: 18,
    leftLeg: 18,
    genitalPerineum: 1
  }
};

export function calculateBurnTbsa(values: Record<string, number>, regionFractions: Record<string, number>, palmCount: number) {
  const regionTotal = Object.entries(regionFractions).reduce((sum, [region, fraction]) => {
    return sum + (values[region] || 0) * fraction;
  }, 0);
  const rawTotal = regionTotal + Math.max(0, palmCount);
  return {
    rawTotal,
    total: Math.min(100, rawTotal),
    capped: rawTotal > 100,
  };
}
