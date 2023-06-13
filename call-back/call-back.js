
//CALL BACK FUNCTIONS -- order of intended operations

const cars = ['volvo', 'bmw', 'mercedes', 'jeep']

//passing callback into the function as an arg, and calling it 
//from within the function itself

const addCar = (newcar, callback) => {
  setTimeout(() => {
    cars.push(newcar)
    callback();
  }, 200)
}


const getCars = () =>   {
    setTimeout(() =>    {
        console.log(cars)
    }, 100)
}

// addCar('ford');
// getCars(); this doesnt print the array with ford in it because js is async,
// and the data came back from the database faster then it was pushed to the array
// in this case its simulated with setTimeOut()

//callBackFunction will help by passing get car
// into the add car function, forcing it to exicute first

addCar('ford', getCars)
console.log(cars)

//now the array renders with ford included 
//output: [ 'volvo', 'bmw', 'mercedes', 'jeep', 'ford' ]