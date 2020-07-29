export const getRatingLevel = (score) => {
  const RatingMatch = {
    0: `Bad`,
    3: `Normal`,
    5: `Good`,
    8: `Very good`,
    10: `Awesome`,
  };

  const levelStep = Object.keys(RatingMatch).find((step) => score >= step);

  return RatingMatch[levelStep];
};
