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

    }


class pilot extends employee{

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
const Camry = new car("Camry", "Toyota", "2", "gas")
const Elantra = new car("Elantra", "Hyundai", "3", "gas")
//planes
const AC130 = new plane("AC-130", "ward", "01", "jet")
const VTOL = new plane ("VTOL", "ward", "02", "jet")
