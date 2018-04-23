// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  // const hq = 42;
  // let block;

  // switch (hq) {
  //   case distance > hq:
  //     block = distance - hq;
  //       break;

  //   case distance < hq:
  //     block = (distance - hq) * -1;
  //       break;
  // }
  // return block;

  let block;

  if (distance < 42) {
   block = (distance - 42) * -1;
  } else if (distance > 42) {
    block = (distance - 42);
  }
  return block;
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
 if (start < end) {
   return (end - start) * 264;
 } else {
   return (start - end) * 264;
 }

}

function calculatesFarePrice(start, end) {
  let result;
  if (distanceTravelledInFeet(start, end) <= 400) {
    result = 0;
  }
  if (distanceTravelledInFeet(start, end) >= 401) { 
    result = (distanceTravelledInFeet(start, end) - 400) * (2/100);
    if (distanceTravelledInFeet(start, end) >= 2000) {
      result = 25;
      }
  }
  if (distanceTravelledInFeet (start, end) >= 2500) {
    result = 'cannot travel that far';
  }
    return result;
  }
