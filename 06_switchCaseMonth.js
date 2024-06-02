var monthOfYear = function(month ){

switch (month) {
    case 1:
        console.log("January");
      break;
    case 2:
      console.log("February") ;
      break;
    case 3:
    console.log("March");
      break;
    case 4:
     console.log("April");
      break;
    case 5:
      console.log("May") ;
      break;
    case 6:
    console.log("June") ;
      break;
    case 7:
      console.log("July");
    case 8:
        console.log( "August")
    case 9:
  console.log("september");
      case 10:
     console.log("october") ;
      case 11:
    console.log("November");
      case 12:
      console.log("December");
      default:
    // code block
    console.log(`Invalid value ${month}`);
     break;


  }
}
monthOfYear(2)
monthOfYear(1)

monthOfYear("0");
monthOfYear("2")
monthOfYear("5")
monthOfYear("12")
monthOfYear("15")
monthOfYear("100")
monthOfYear("null")
monthOfYear("undefined")

