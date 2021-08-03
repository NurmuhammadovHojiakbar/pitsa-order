let pizzaOptions = {
    breadTypes: [
        {
            name: "Yupqa",
            price: 10000
        },
        {
            name: "Qalin",
            price: 10000
        },
        {
            name: "Buxanka",
            price: 7000
        }
    ],
    sizes: [
        {
            name: "Kichik",
            size: 25,
            price: 25000
        },
        {
            name: "O'rtacha",
            size: 30,
            price: 30000
        },
        {
            name: "Katta",
            size: 35,
            price: 45000
        },
        {
            name: "Oilaviy",
            size: 40,
            price: 50000
        },
    ],
    toppings: [
        {
            name: "Pomidor",
            price: 4000
        },
        {
            name: "Tuzlangan bodring",
            price: 5000
        },
        {
            name: "Qazi",
            price: 15000
        },
        {
            name: "Kurka go'shti",
            price: 12000
        },
        {
            name: "Zaytun",
            price: 5000
        },
        {
            name: "Qo'ziqorin",
            price: 7000
        }
    ],
    addl: [
        {
            name: "Sosiskali",
            price: 7000
        },
        {
            name: "Achchiq",
            price: 2000
        },
        {
            name: "Rayhon",
            price: 2000
        }
    ]
};

// Call Form and Fields

const elPitsaForm = document.querySelector(".pitsa-form");
const elPitsaFormBreadType = elPitsaForm.querySelector(".non-type");
const elPitsaFormSize = elPitsaForm.querySelector(".pitsa-form__size");
const elPitsaFormTopping = elPitsaForm.querySelector(".pitsa-form__topping");
const elPitsaFormAdnl = elPitsaForm.querySelector(".pitsa-form__adnl");

// Create Option 
let elOptionTemplate = document.querySelector(".pizza-type-option-template").content;

function createElOption(option){
    let elOption = elOptionTemplate.cloneNode(true);
    elOption.querySelector("option").value = option.name.toLowerCase();
    elOption.querySelector("option").textContent = option.name;
    return elOption;
}

pizzaOptions.breadTypes.forEach(function(breadtype){
    elPitsaFormBreadType.appendChild(createElOption(breadtype))
})
// Create Radio Input

let elRadioTemplate = document.querySelector(".pizza-size-radio-template").content;

function createElRadioSize(size){
    let elRadioSize = elRadioTemplate.cloneNode(true);
    elRadioSize.querySelector('.radio-input').value = size.size;
    elRadioSize.querySelector('.radio-control').textContent = `${size.name} ${size.size}sm`;
    return elRadioSize;
}

pizzaOptions.sizes.forEach(function(size){
    elPitsaFormSize.appendChild(createElRadioSize(size))
})

// Create Checkbox input

let elCheckboxTemplate = document.querySelector(".pizza-topping-checkbox-template").content;

function createElCheckboxTopping(topping){
    let elCheckboxTopping = elCheckboxTemplate.cloneNode(true);
    elCheckboxTopping.querySelector('.checkbox-input').name = topping.name;
    elCheckboxTopping.querySelector('.checkbox-control').textContent = topping.name;
    return elCheckboxTopping;
}

pizzaOptions.toppings.forEach(function(topping){
    elPitsaFormTopping.appendChild(createElCheckboxTopping(topping))
})

pizzaOptions.addl.forEach(function(topping){
    elPitsaFormAdnl.appendChild(createElCheckboxTopping(topping))
})
