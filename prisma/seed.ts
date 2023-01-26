import prisma from "../src/config/database.js";

async function main(){

prisma.cars.createMany({
 data:[{
    "model": "gol",
    "licensePlate": "AZD0987",
    "color": "PRETO",
    "year": "2017",
 },
 {
    "model": "uno",
    "licensePlate": "CDE0765",
    "color": "BRANCO",
    "year": "2018",
 },
 {
    "model": "corsa",
    "licensePlate": "FGH0432",
    "color": "VERMELHO",
    "year": "2019",
 },
 {
    "model": "palio",
    "licensePlate": "HIJ0321",
    "color": "AZUL",
    "year": "2020",
 }
 ]   
}
)
}

main()
    .then(()=>
    console.log("Successful registration"))
    .catch(e => {
        console.error(e);
        process.exit(1);
    }    
    )
    .finally(async ()=>{
       await prisma.$disconnect();
    })