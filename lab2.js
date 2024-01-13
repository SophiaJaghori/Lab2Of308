//Growth control system.
//********************************************************************************************** */
const p =3.1415;
let radius = 5;
const area = p *radius *radius;
console.log(`the area in which the plant is growing is  ${area}`);
let plantSpace = 0.8;
let currentPlantCount = 20;
const MaxCapacity = area/0.8   ;
console.log(`max capacity of plant is ${MaxCapacity}`);

const AfterCertianWeek = (currentPlantCount/MaxCapacity) *100;
console.log(AfterCertianWeek);
if(AfterCertianWeek >80){
    console.log("Prune");
}
else if(AfterCertianWeek>=50 && AfterCertianWeek <=80){
    console.log("Monitor");
}
else{
    console.log("Plant");
}
// If I chec for the following weeks
// I can find the Current plants using this Formula (currentplants = initialplants * 2^weeks)

let week1= 1;
let week2= 2;
let week3 =3;
const CurrentPlants = currentPlantCount * Math.pow(2,week1);
console.log(`result for one week of plant is ${CurrentPlants}`);

const CurrentPlants1 = currentPlantCount * Math.pow(2,week2);
console.log(`result for one week of plant is ${CurrentPlants1}`);

const CurrentPlants2 = currentPlantCount * Math.pow(2,week3);
console.log(`result for one week of plant is ${CurrentPlants2}`);



