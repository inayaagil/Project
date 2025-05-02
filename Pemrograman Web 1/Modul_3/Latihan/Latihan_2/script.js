let infaqlist = [];
let totalamount = 0;

function addinfaq() {
    const amountinput = document.getElementById('amountinput');
    const amount = parseint(amountinput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("masukkannominal yang valid");
        return;
    }

    infaqlist.push(amount);
    totalamount += amount;

    updateUI();
    amountinput.value = ''; // clear input
}

function updateUI() {
    const list = document.getElementById('infaqlist');
    const total = document.getElementById('totalamount');

    list.innerHTML = '';
    infaqlist.foreach((amount, index) => {
        const listitem = document.createElement('li');
        listitem.innertext = 'Hari ke - ${index + 1}: Rp ${amount.tolocalestring';
        list.appendChild(listitem);
    });

    total.innertext = totalamount.toLocaleString('id-ID');
}