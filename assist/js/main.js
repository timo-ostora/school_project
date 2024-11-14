
// nav toggle btn
let navToggleBtn = document.getElementById('nav-toggle-btn');

if (navToggleBtn) {
  navToggleBtn.addEventListener('click', () => {
    navToggleBtn.classList.toggle('active')
  })
}

// order page

let orderProcess = document.getElementById('order_process');
let orderNavIcons = document.querySelectorAll('#order_process .icon-box')

let cartItems = document.getElementById('cart_items');
let costomerForm = document.getElementById('costomer-form')
let paymentForm = document.getElementById('payment_form')
let orderSummary = document.getElementById('order_summary')
let confirmation = document.getElementById('confirmation')

let cartSubmintBtn = document.getElementById('cart_submint_btn')
let costomerFormSubmit = document.getElementById('costomer_form_submit')
let paymentFormSubmit = document.getElementById('payment_form_submit')
let summaryBtn = document.getElementById('summary_btn')

let orderSection = [cartItems, costomerForm, paymentForm, orderSummary, confirmation]

// inisialisation
if (orderProcess) {
  goToCartItems()


  cartSubmintBtn.addEventListener('click', () => {
    goToCosomerForm()

  })

  costomerFormSubmit.addEventListener('click', () => {
    goToPayemntForm()
  })

  paymentFormSubmit.addEventListener('click', () => {
    goToOrderSummary()
  })

  summaryBtn.addEventListener('click', () => {
    goToConfirmation()
  })
}
function orderNavTeleport() {
  orderNavIcons.forEach((ele, i) => {
    if (!ele.classList.contains('disabled')) {
      ele.addEventListener('click', () => {
        switch (i) {
          case 0:
            goToCartItems()
            break;
          case 1:
            goToCosomerForm()
            break;
          case 2:
            goToPayemntForm()
            break;
          case 3:
            goToOrderSummary()
            break;
          case 4:
            goToConfirmation()
            break;
          default:
            console.log("no index found")
            break;
        }
      })
    }
  })
}

function cleanOrderSection() {
  orderSection.forEach(ele => {
    ele.style.display = "none"
  })
}

function orderProgress(index) {
  for (let i = 0; i < orderProcess.children.length; i++) {
    const element = orderProcess.children[i];
    if (i < index) {
      element.classList.remove('disabled')
      element.classList.remove('active')
      element.classList.add('active')
    }
  }
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  orderNavTeleport()
}

function goToCartItems() {
  cleanOrderSection()
  orderProgress(1)
  cartItems.style.display = "block";
}

function goToCosomerForm() {
  orderProgress(3)
  cleanOrderSection()
  costomerForm.style.display = "block"
}

function goToPayemntForm() {
  orderProgress(5)
  cleanOrderSection()
  paymentForm.style.display = "block"
}

function goToOrderSummary() {
  orderProgress(7)
  cleanOrderSection()
  orderSummary.style.display = "block"
}

function goToConfirmation() {
  orderProgress(9)
  cleanOrderSection()
  confirmation.style.display = "block"
}


let filterBtn = document.getElementById("filter_triger")
let filterMenu = document.getElementById("filter_menu")

if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    filterMenu.classList.toggle('active')
    filterBtn.children[0].classList.toggle('fill')
  })
}