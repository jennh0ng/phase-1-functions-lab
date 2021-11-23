// Code your solution in this file!

const HQ = 42

function distanceFromHqInBlocks(pickup) {
    //returns the number of blocks given a value
    
    if(pickup >= 43) {
        return (pickup - HQ)
    }
    if(pickup < 42) {
        return (HQ - pickup)
    }
}

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function, 
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    if(feet >= 43) {
        return ((feet - HQ) * 264)
    }
    if(feet < 42) {
        return ((HQ - feet) * 264)
    }
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return ((start - destination) * 264)
    }
    else if (destination > start) {
        return ((destination - start) * 264)
    }
  }

  distanceTravelledInFeet(42, 50);



  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const ft = distanceTravelledInFeet(start, destination);

    if (ft <= 400) {
        return 0;
    }
    else if (ft > 400 && ft <= 2000) {
        return (ft - 400) * .02;
    }
    else if (ft > 2500) {
        return 'cannot travel that far';
    }
    else if (ft > 2000) {
        return 25;
    }
  }



  

