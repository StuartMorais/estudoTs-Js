type pizza = {
    id: number
    name: string
    price: number
};

type order = {
    id: number
    pizza: pizza
    status: "ordered" | "completed"
}

const menu: pizza[] = [
    {id: 1, name: "Margarita", price: 8},
    {id: 2,name: "Pepperoni", price: 12},
    {id: 3, name: "Portuguesa", price: 5},
    {id: 4, name: "Calabresa", price: 5},
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: order[] = []

//adds a mew pizza to the menu
function addNewPizza(pizzaObj: pizza){
    menu.push(pizzaObj)
}

//adds an order to the array order
function pizzaOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName) //search in my array menu an pizza with the same name as requested
    if (!selectedPizza) {
        console.error('${pizzaName does not exist in the menu')
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderID: number){
    const order = orderQueue.find(order => order.id === orderID)
    if (!order) {
        console.error(`Order with ID ${orderID} not found.`);
        return;
    }
    order.status = "completed"
    return order
}

addNewPizza({id: 5, name: "Chiken Bacon Ranch", price: 12})
addNewPizza({id: 6, name: "BBQ Chiken", price: 12})
addNewPizza({id: 7, name: "Spicy Sausage", price: 11})
pizzaOrder("Chiken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

export function getPizzaDetail(identifier: string|number){

    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    } else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Must be string or number")
    }
}