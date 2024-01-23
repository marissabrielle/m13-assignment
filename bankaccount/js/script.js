// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

function bankAccount(ownerName) {
    let balance = 0
    let owner = ownerName

    return ({
        withdrawl: function (withdrawalAmount) {
            if (withdrawalAmount === NaN) {
                balance -= withdrawalAmount
                showAccountInfo()
            } else {
                balance = balance - withdrawalAmount
                console.log(balance)
            }
        },

        deposit: function (depositAmount) {
            if (depositAmount === NaN) {
                balance += depositAmount
                showAccountInfo()
            } else {
                balance = balance + depositAmount
                console.log(balance)
            }
        },

        getBalance: function () {
            return balance
        },

        getOwnerName: function () {
            return owner
        }
    })
}

let account

$('nameBtn').addEventListener("click", function () {
    let ownerName = prompt('Enter your name:')
    // console.log(ownerName)
    account = bankAccount(ownerName)

    $('accountInfo').innerHTML += `Account owner: ${account.getOwnerName()}<br>`
    $('accountInfo').innerHTML += `Account balance: ${account.getBalance()}<br>`
})

$('depositBtn').addEventListener("click", function () {
    let depositAmount = parseFloat(prompt("Enter your deposit amount:"))
    // console.log(depositAmount)
    account.deposit(depositAmount)

    $('accountInfo').innerHTML += `New account balance: ${account.getBalance()}<br>`

})

$('withdrawlBtn').addEventListener("click", function () {
    let withdrawalAmount = parseFloat(prompt("Enter your withdraw amount:"))
    // console.log(withdrawalAmount)
    account.withdrawl(withdrawalAmount)

    $('accountInfo').innerHTML += `New account balance: ${account.getBalance()}<br>`
})