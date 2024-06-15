console.log(`==========Step 1============`);
class Vehical{
    // Data Members Or Properties or Attributes or States
    constructor(Brand, Model, Year, Color, Mileage){
        this.Brand = Brand;
        this.Model= Model;
        this.Year = Year;
        this.Color = Color;
        this.Mileage = Mileage;
    }

    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: Brand: ${this.Brand },  Model: ${this.Model},  Year: ${this.Year},  Color: ${this.Color},  Mileage: ${this.Mileage}`);
    }
}
const Toyota= new Vehical("Toyota", "1Hatchback","2019 ",  "black","72610 Km");
Toyota.details();

const Mercedes = new Vehical("Mercedes", "Maybach"," 2015",  " White", "83132 Km");
Mercedes.details();

const BMW = new Vehical("BMW", "BMW X3","2003 ",  "Green ", "76736 Km");
BMW.details();

const OPEL = new Vehical("OPEL", "Corsa"," 1982",  "Grey","115688 Km");
OPEL.details();

const Volkswagen = new Vehical("Volkswagen", "Mokka", "2014 ","Voilet","108032 Km");
Volkswagen.details();


console.log(`==========Step 2============`);
class College{
    // Data Members Or Properties or Attributes or States
    constructor(Name, Location, Establishment, Student){
        this.Name = Name;
        this.Location= Location;
        this.Establishment =Establishment ;
        this.Student = Student ;
    
    }

    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: College Name: ${this.Name }, Location: ${this.Location}, Establishment: ${this.Establishment}, Number of student: ${this.Student}`);
    }
}
const PTVAIM = new College ("PTVAIM", "Mumbai", "2000 ",  "5000");
PTVAIM.details();

const  SGBAU = new College ("SGBAU", ""," Amravati",  " 2020", "4000");
SGBAU.details();

const GCOEJ = new College ("GCOEJ", "Jalgoan", "2003 ",  "10000 ");
GCOEJ.details();

const Bambhuri = new College ("Bambhuri", "jalgoan"," 1982","11568");
Bambhuri.details();

