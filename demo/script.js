
const amount = document.getElementById('amount')
const details = document.getElementById('details')
const category = document.getElementById('category')
const resultsEl = document.getElementById('results')

const key = `1716214eab9d483a83a640c8189acd06`
const resourceName = `expenses`

let EDIT_FLAG = false;
let EDIT_USER_ID = null;


async function fetchExpenses() {
    try {
        let res = await axios.get(
            `https://crudcrud.com/api/${key}/${resourceName}`)
        
        renderResponse(res.data)
    }
    catch (err) { console.log(err) }

}

function renderResponse(expenses) {
    console.log(expenses);
    console.log(`inside render`);
    resultsEl.innerHTML = ''
    expenses.forEach((expInfo, idx) => {

        let expItemEl = document.createElement('li')
        expItemEl.classList.add('expense-item')
        expItemEl.innerHTML = `
        <div class="amountEl">Rs.${expInfo.amount}</div>
        <div class="detailsEl">${expInfo.details}</div>
        <div class="categoryEl">${expInfo.category}</div>`


        let delButton = document.createElement('button')
        delButton.textContent = 'delete'
        delButton.setAttribute('id', expInfo._id)
        delButton.classList.add('btn-del')


        let editButton = document.createElement('button')
        editButton.textContent = 'edit'
        editButton.setAttribute('id', expInfo._id)
        editButton.classList.add('btn-edit')


        expItemEl.append(delButton)
        expItemEl.append(editButton)


        delButton.addEventListener('click', e => delExpense(e))
        editButton.addEventListener('click', e => editExpense(e))

        document.getElementById('results').appendChild(expItemEl)
    });
}
function clearFormData() {
    amount.value = ""
    details.value = ""
    category.value = '"'
}

async function addExpense(data) {
    try {
        await axios.post(`https://crudcrud.com/api/${key}/${resourceName}`, data)
        fetchExpenses()
    } catch (err) {
        err => console.log(err)
    }

}

async function saveEditedExpense(data) {
    try {
        await axios.put(`https://crudcrud.com/api/${key}/${resourceName}/${EDIT_USER_ID}`, data)
        fetchExpenses()

    } catch (err) {
        err => console.log(err)
    }
    EDIT_FLAG = false
}

async function delExpense(e) {
    const userID = e.target.getAttribute('id')
    try {
       await axios.delete(`https://crudcrud.com/api/${key}/${resourceName}/${userID}`)
        fetchExpenses()
    } catch (err) {
        err => console.log(err)
    }
}

async function editExpense(e) {
    console.log(`first`)
    EDIT_FLAG = true
    const userID = e.target.getAttribute('id')
    console.log(userID)
    EDIT_USER_ID = userID
    try {
        let res = await axios.get(
            `https://crudcrud.com/api/${key}/${resourceName}/${userID}`)

        const { amount: a, details: d, category: c } = res.data

        amount.value = a
        details.value = d
        category.value = c
    } catch (err) {
        err => console.log(err);
    }
}

window.addEventListener('DOMContentLoaded', fetchExpenses)
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        "amount": amount.value,
        "details": details.value,
        "category": category.value
    }
    if (!EDIT_FLAG)
        addExpense(data)
    else
        if (EDIT_FLAG)
            saveEditedExpense(data)
        else return;

    setTimeout(() => {
        clearFormData()
    }, 1000);
})

