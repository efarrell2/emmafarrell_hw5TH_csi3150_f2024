const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  }
];

function createProductCards(){
    for (i=0; i<usedCars.length; i++) {
        const {year, make, model, mileage, price, color, gasMileage} = usedCars[i];
        let picture = "../assets/"+model+".jpeg";
        let title = year+" "+make+" "+model;
        let miles = mileage+" miles";
        let money = "$"+price;
        let carColor = "Color: "+color;
        const productCard = `
            <div class="card" id="${model}" style="width: 400px; height: 400px; margin: 20px">
                <img src="${picture}">
                <div class="info" style="text-align: center">
                    <h1 style="font-size: 30px">${title}</h1>
                    <h2 style="font-size: 22px">${miles}<h2>
                    <h2 style="font-size: 22px">${money}<h2>
                    <h2 style="font-size: 22px">${miles}<h2>
                    <h2 style="font-size: 22px">${carColor}<h2>
                    <h2 style="font-size: 22px">${gasMileage}<h2>
                </div>
            </div>
        `;
        document.getElementById("container").innerHTML += productCard;
    }
}

window.addEventListener("load", createProductCards);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("filters").addEventListener("submit", (e) => {
    e.preventDefault();
    let filterCars = usedCars;
    let max = document.getElementById('max').value;
    max = Number(max);
    if (max != "") {
        for (i = 0; i < usedCars.length; i++) {
          if (usedCars[i].year > max) {
            let x = usedCars[i].model;
            const z = filterCars.findIndex((object) => {
              return object.model === x;
            });
            filterCars.splice(z, 1);
          } else {
            continue;
          }
        }
    }
    // let cars = document.getElementById("cars").value
    // newCars = String(cars);
    // if (cars != "") {
    //   for (i = 0; i < usedCars.length; i++) {
    //     if (usedCars[i].make != newCars) {
    //       let x = usedCars[i].make;
    //       const z = filterCars.findIndex((object) => {
    //         return object.make === x;
    //       });
    //       filterCars.splice(z, 1);
    //     } else {
    //       continue;
    //     }
    //   }
    // }
    let maxMiles = document.getElementById("maxMiles").value;
    maxMiles = Number(maxMiles);
    if (maxMiles != "") {
      for (i = 0; i < usedCars.length; i++) {
        if (usedCars[i].mileage > maxMiles) {
          let x = usedCars[i].model;
          const z = filterCars.findIndex((object) => {
            return object.model === x;
          });
          filterCars.splice(z, 1);
        } else {
          continue;
        }
      }
    }
    let money = document.getElementById("price").value;
    money = Number(money);
    if (price != "") {
      for (i = 0; i < usedCars.length; i++) {
        if (usedCars[i].price > money) {
          let x = usedCars[i].model;
          const z = filterCars.findIndex((object) => {
            return object.model === x;
          });
          filterCars.splice(z, 1);
        } else {
          continue;
        }
      }
    }
    // let color = document.getElementById("color").value;
    // newColor = String(color);
    // if (color != "") {
    //   for (i = 0; i < usedCars.length; i++) {
    //     console.log(
    //       `Checking car: ${usedCars[i].make}, color: ${usedCars[i].color}`
    //     );
    //     console.log(`New color to match: ${newColor}`);

    //     if (
    //       usedCars[i].color.toLowerCase().trim() !==
    //       newColor.toLowerCase().trim()
    //     ) {
    //       console.log(
    //         `Color does not match. Attempting to remove ${usedCars[i].make} from filterCars.`
    //       );
    //       const z = filterCars.findIndex(
    //         (object) => object.make === usedCars[i].make
    //       );
    //       console.log(`Index found in filterCars: ${z}`);
    //       if (z !== -1) {
    //         console.log(`Removing ${filterCars[z].make} from filterCars`);
    //         filterCars.splice(z, 1);
    //       } else {
    //         console.log(`Make not found in filterCars.`);
    //       }
    //     }
    //   }
    // }
    //console.log(filterCars);
    document.getElementById("container").innerHTML = "";
    for (i = 0; i < filterCars.length; i++) {
      const { year, make, model, mileage, price, color, gasMileage } =
        filterCars[i];
      let picture = "../assets/" + model + ".jpeg";
      let title = year + " " + make + " " + model;
      let miles = mileage + " miles";
      let money = "$" + price;
      let carColor = "Color: " + color;
      const newproductCard = `
            <div class="card" id="${model}" style="width: 400px; height: 400px; margin: 20px">
                <img src="${picture}">
                <div class="info" style="text-align: center">
                    <h1 style="font-size: 30px">${title}</h1>
                    <h2 style="font-size: 22px">${miles}<h2>
                    <h2 style="font-size: 22px">${money}<h2>
                    <h2 style="font-size: 22px">${miles}<h2>
                    <h2 style="font-size: 22px">${carColor}<h2>
                    <h2 style="font-size: 22px">${gasMileage}<h2>
                </div>
            </div>
        `;
      document.getElementById("container").innerHTML += newproductCard;
    }

  });
});

