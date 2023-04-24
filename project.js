class vehicle{
    constructor(name, companyName, ID){
        this.name = name
        this.companyName = companyName
        this.ID = ID
    }
}

class car extends vehicle{
    constructor(name, companyName, ID, CarType){
        super(name, companyName, ID);
        this.CarType = CarType;
}
}
class plane extends vehicle{
    constructor(name, companyName, ID, PlaneType){
        super(name, companyName, ID);
        this.PlaneType = PlaneType;

    }
}

class employee{
    constructor(Ename, EID, DoB){
        this.Ename = Ename
        this.EID = EID
        this.DoB = DoB
    }
}

class driver extends employee{
    constructor(Ename, EID, DoB, DriverLicense) {
        super(Ename, EID, DoB);
        this.DriverLicense = DriverLicense;
    }
}

class pilot extends employee{
    constructor(Ename, EID, DoB, PilotLicense) {
        super(Ename, EID, DoB);
        this.PilotLicense = PilotLicense;
      }

    }


class reservation{
    constructor(reservationID, vehiclesID, EmployeeID, reservationDate){
        this.reservationID = reservationID
        this.vehiclesID = vehiclesID
        this.EmployeeID = EmployeeID
        this.reservationDate = reservationDate
    }
}
//cars
const Emgrand = new car("Emgrand", "Geely", "1", "gas")
const H1 = new car("H1", "Hyundai", "2", "gas")
const Elantra = new car("Elantra", "Hyundai", "3", "gas")
//planes
const AC130 = new plane("AC-130", "ward", "01", "jet")
const VTOL = new plane ("VTOL", "ward", "02", "jet")
//driver and pilot
const P= new pilot("Anas", "100", "1999/12/06", "230230")
const D = new driver("Ahmed", "115", "2001/11/25", "111444")

const reservations = [];

function createReservation(EID, ID) {
  //find employee with matching EID
  let employee;
  if (pilots.some(pilot => pilot.EID === EID)) {
    employee = pilots.find(pilot => pilot.EID === EID);
  } else {
    console.log("Error: Employee is not a pilot");
    return;
  }
  
  //find vehicle with matching ID
  let vehicle;
  if (cars.some(car => car.ID === ID)) {
    vehicle = cars.find(car => car.ID === ID);
    if (vehicle.CarType === "Car") {
      console.log("Error: Vehicle is a car, not a plane");
      return;
    }
  } else if (planes.some(plane => plane.ID === ID)) {
    vehicle = planes.find(plane => plane.ID === ID);
  } else {
    console.log("Error: Vehicle not found");
    return;
  }
  
  //create new reservation object and add it to reservations array
  const reservation = new Reservation(
    Math.random().toString(10).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    vehicle.ID,
    employee.EID,
    new Date().toLocaleDateString()
  );
  reservations.push(reservation);
  return reservation;
}

console.log(reservations);

