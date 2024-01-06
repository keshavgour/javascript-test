import "./App.css";

function App() {
  // const cars = ["TUV", "Venue", "Figo", "Creta"];
  // const points = [121,231,34,24,25,12,65,43,13,100];
  // points.sort(function(a,b){return a-b});
  // const spread = [...cars, ...points];
  // const d = new Date();
  // let x = Math.pow(8,2);
  // let y = Math.sqrt(64);

  //const index = cars.indexOf("Venue");
  //  cars.sort();
  //   cars.reverse();

  const bikes = ["Shine", "Deluxe", "Phoenix"];
  // const carbike = cars.concat(bikes);
  //cars.splice(2,1,"City","BMW");
  // const bike1 = bikes.slice(1);
  console.log(bikes);

  // let pop = cars.pop();
  // let pushlen = cars.push("Verna");
  // let length = cars.length;
  // let car = cars.toString();
  // let carjoin = cars.join(" * ");

  return (
    <div>
      {/* <h1>{y}</h1>
      <h1>{d.getHours()}</h1>
      <h1>{d.toISOString()}</h1>
      <h2>{points.toString()}</h2>
     cars.toString()</h2>
     <h2>{spread.toString()}</h2> */}
      <h2>{bikes.toString()}</h2>
      {/* <h2>{bike1.toString()}</h2>
     {/* <h2>{carbike.toString()}</h2>  */}

      {/* <h2>Length of Array is :{pushlen}</h2>
     <h3>{car}</h3>
     <h3>{carjoin}</h3>
     <h3>{pop}</h3> */}
    </div>
  );
}

export default App;
