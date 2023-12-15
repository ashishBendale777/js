//function declaraion and function
//calling

const bankAcc = {
    accNo: 12,
    accName: "Ashish",
    accType: "Saving",
    accBalance: 500
}


//function declaration
// function checkBalance() {
    // console.log("Acc Balance", bankAcc.accBalance)
// }

// function deposit(amount) {
//     bankAcc.accBalance += amount
// }

// function withdraw(amount) {
//     bankAcc.accBalance -= amount
// }


//arrow funtion declaration
const checkBalance = () => { console.log("Acc Balance", bankAcc.accBalance) }
// const deposit = (amount) => bankAcc.accBalance += amount
// const withdraw = (amount) => bankAcc.accBalance -= amount


//function call
checkBalance()

// deposit(400)
// withdraw(300)
// deposit(400)
// withdraw(500)
// deposit(120)
// checkBalance()