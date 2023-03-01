//creating a class for car service station
class CarServiceStation {
    constructor(carType, serviceCode) {
        this.carType = carType;
        this.serviceCode = serviceCode;
    }
    //creating a method to generate bill
    generateBill() {
        let bill = 0;
        let serviceCode = this.serviceCode;
        let carType = this.carType;
        let serviceCodeArray = serviceCode.split(",");
        for (let i = 0; i < serviceCodeArray.length; i++) {
            if (serviceCodeArray[i] == "BS01") {
                if (carType == "Hatchback") {
                    bill += 2000;
                } else if (carType == "Sedan") {
                    bill += 4000;
                } else if (carType == "SUV") {
                    bill += 5000;
                }
            } else if (serviceCodeArray[i] == "EF01") {
                if (carType == "Hatchback") {
                    bill += 5000;
                } else if (carType == "Sedan") {
                    bill += 8000;
                } else if (carType == "SUV") {
                    bill += 10000;
                }
            } else if (serviceCodeArray[i] == "CF01") {
                if (carType == "Hatchback") {
                    bill += 2000;
                } else if (carType == "Sedan") {
                    bill += 4000;
                } else if (carType == "SUV") {
                    bill += 6000;
                }
            } else if (serviceCodeArray[i] == "BF01") {
                if (carType == "Hatchback") {
                    bill += 1000;
                } else if (carType == "Sedan") {
                    bill += 1500;
                } else if (carType == "SUV") {
                    bill += 2500;
                }
            } else if (serviceCodeArray[i] == "GF01") {
                if (carType == "Hatchback") {
                    bill += 3000;
                } else if (carType == "Sedan") {
                    bill += 6000;
                } else if (carType == "SUV") {
                    bill += 8000;
                }
            }
        }
        if (bill > 10000) {
            return `Total Bill: ${bill} + Complimentary Cleaning`;
        } else {
            return `Total Bill: ${bill}`;
        }
    }
}

//creating an object for car service station
let carServiceStation = new CarServiceStation("SUV", "BS01,EF01");

//calling the method to generate bill
console.log(carServiceStation.generateBill());