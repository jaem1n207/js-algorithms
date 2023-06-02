// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120835'

/**
 * @param {number[]} emergency
 * @returns {number[]}
 */
const setOrderOfTreatment = emergency => {
  const descendingOrder = (a, b) => b - a;
  const descendingOrderOfEmergency = emergency.slice().sort(descendingOrder);

  return emergency.map(element => descendingOrderOfEmergency.indexOf(element) + 1);
};

export default setOrderOfTreatment;
