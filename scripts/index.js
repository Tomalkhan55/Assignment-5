// move to ticket section by click
const scrollButton = document.getElementById('scroll-button');
const targetSection = document.getElementById('my-section');

scrollButton.addEventListener('click', () => {
    const topPosition = targetSection.offsetTop;
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});

// add new section
let selectedSeats = [];

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {

        if (selectedSeats.includes(button.id)) {
            button.style.backgroundColor = '';
            selectedSeats = selectedSeats.filter(item => item !== button.id);
            document.getElementById('total-seat').innerText = parseInt(document.getElementById('total-seat').innerText) + 1;
        }
        else if (selectedSeats.length < 4) {
            button.style.backgroundColor = 'green';
            selectedSeats.push(button.id);
            document.getElementById('total-seat').innerText = parseInt(document.getElementById('total-seat').innerText) - 1;

            let newSection = document.createElement('div');
            newSection.className = 'flex justify-between my-5';
            newSection.innerHTML = '<p>' + button.id + '</p><p>Economy</p><p>550</p>';
            document.getElementById('ordered-seat').appendChild(newSection);
        }
        else {
            alert('Maximum of 4 buttons can be selected.');
        }
    });
});



// confimation area
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const countSelectSeat = document.getElementById('count-select-seat');
        const totalPrice = document.getElementById('total-price');
        const grandTotal = document.getElementById('grand-total');
        let count = Number(countSelectSeat.innerText);
        let total = Number(totalPrice.innerText);
        let grand = Number(grandTotal.innerText);
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            count -= 1;
            total -= 550;
            grand -= 550;
        } else {
            button.classList.add('selected');
            count += 1;
            total += 550;
            grand += 550;
        }
        countSelectSeat.innerText = count;
        totalPrice.innerText = total;
        grandTotal.innerText = grand;
    });
});


//   coupon section

let total = 0;
let discount = 0;

const couponInput = document.getElementById('coupon-input');
const couponApply = document.getElementById('coupon-apply');
const grandTotal = document.getElementById('grand-total');

couponApply.addEventListener('click', () => {
    const couponValue = couponInput.value;

    if (couponValue === 'NEW15') {
        discount = 0.15;
    }
    else if (couponValue === 'Couple 20') {
        discount = 0.2;
    }
    else {
        discount;
    }

    const discountedTotal = (total - (total * discount));

    grandTotal.textContent = `${discountedTotal}`;
});
