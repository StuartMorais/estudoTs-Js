type pizza = {
    name: string
    price: number
}

type order = {
    id: number
    pizza: pizza
    status: "ordered" | "completed"
}

const menu = [
    {name: "Margarita", price: 8},
    {name: "Pepperoni", price: 12},
    {name: "Portuguesa", price: 5},
    {name: "Calabresa", price: 5},
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

addNewPizza({name: "Chiken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chiken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})
pizzaOrder("Chiken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)