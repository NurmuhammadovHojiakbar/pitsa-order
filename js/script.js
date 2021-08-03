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
let summa = 10000;

// Call Form and Fields

let elPitsaForm = document.querySelector(".pitsa-form");
let elPitsaFormBreadType = elPitsaForm.querySelector(".non-type");
let elPitsaFormSize = elPitsaForm.querySelector(".pitsa-form__size");
let elPitsaFormTopping = elPitsaForm.querySelector(".pitsa-form__topping");
let elPitsaFormAdnl = elPitsaForm.querySelector(".pitsa-form__adnl");

// Create Option 
let elOptionTemplate = document.querySelector(".pizza-type-option-template").content;

function createElOption(option){
    let elOption = elOptionTemplate.cloneNode(true);
    elOption.querySelector("option").value = option.name.toLowerCase();
    elOption.querySelector("option").textContent = option.name;
    elOption.querySelector("option").dataset.cost = option.price;
    return elOption;
}
let elOptionFragment = document.createDocumentFragment();
pizzaOptions.breadTypes.forEach(function(breadtype){
    elOptionFragment.appendChild(createElOption(breadtype))
})
elPitsaFormBreadType.appendChild(elOptionFragment)

// Create Radio Input

let elRadioTemplate = document.querySelector(".pizza-size-radio-template").content;

function createElRadioSize(size){
    let elRadioSize = elRadioTemplate.cloneNode(true);
    elRadioSize.querySelector('.radio-input').value = size.size;
    elRadioSize.querySelector('.radio-input').dataset.cost = size.price;
    elRadioSize.querySelector('.radio-control').textContent = `${size.name} ${size.size}sm`;
    return elRadioSize;
}
let elSizeFragment = document.createDocumentFragment();
pizzaOptions.sizes.forEach(function(size){
    elSizeFragment.appendChild(createElRadioSize(size))
})
elPitsaFormSize.appendChild(elSizeFragment)

// Create Checkbox input

let elCheckboxTemplate = document.querySelector(".pizza-topping-checkbox-template").content;

function createElCheckboxTopping(topping){
    let elCheckboxTopping = elCheckboxTemplate.cloneNode(true);
    elCheckboxTopping.querySelector('.checkbox-input').name = topping.name;
    elCheckboxTopping.querySelector('.checkbox-input').dataset.cost = topping.price;
    elCheckboxTopping.querySelector('.checkbox-control').textContent = topping.name;
    return elCheckboxTopping;
}
let elToppingFragment = document.createDocumentFragment();
pizzaOptions.toppings.forEach(function(topping){
    elToppingFragment.appendChild(createElCheckboxTopping(topping))
})
elPitsaFormTopping.appendChild(elToppingFragment)

let elAdnlFragment = document.createDocumentFragment();
pizzaOptions.addl.forEach(function(topping){
    elAdnlFragment.appendChild(createElCheckboxTopping(topping))
})
elPitsaFormAdnl.appendChild(elAdnlFragment)

// Natijalar 
let finalSumma = elPitsaForm.querySelector(".sum")
let nonTuriNatija = elPitsaForm.querySelector(".non-type__result")

elPitsaFormBreadType.addEventListener("change",()=>{
    for (let opt of elPitsaFormBreadType.children) {
        if(opt.value == elPitsaFormBreadType.value){
            nonTuriNatija.textContent = opt.textContent
            summa = opt.dataset.cost;
            console.log(summa)
        }
    }
})

elPitsaForm.querySelectorAll(".radio-input").forEach((r) =>{
    r.addEventListener("change",()=>{
        elPitsaForm.querySelector(".size__result").textContent = r.value + " sm"
    })
})

elPitsaFormTopping.querySelectorAll(".checkbox-input").forEach((ch)=>{
    ch.addEventListener("change",()=>{
        elUst = elPitsaForm.querySelector(".ustida__result");
        liList = elUst.querySelectorAll("li")
        if(ch.checked == true){
            let newLi = document.createElement("li")
            newLi.textContent = ch.nextElementSibling.textContent;
            elUst.appendChild(newLi)
        }
        if(ch.checked == false){
            for (let li of liList) {
                if(ch.nextElementSibling.textContent == li.textContent){
                    li.remove()
                }
            }
        }
    })
})

elPitsaFormAdnl.querySelectorAll(".checkbox-input").forEach((ch)=>{
    ch.addEventListener("change",()=>{
        elAdnl = elPitsaForm.querySelector(".adnl__result");
        liList = elAdnl.querySelectorAll("li")
        if(ch.checked == true){
            let newLi = document.createElement("li")
            newLi.textContent = ch.nextElementSibling.textContent;
            elAdnl.appendChild(newLi)
        }
        if(ch.checked == false){
            for (let li of liList) {
                if(ch.nextElementSibling.textContent == li.textContent){
                    li.remove()
                }
            }
        }
    })
})

finalSumma.textContent= summa + " so'm";