// Initialize Sidenav
const elem = document.querySelector('.sidenav');
const instance = new M.Sidenav(elem);

// Initialize modal w/ trigger
const elem = document.getElementById('modal id here');
const instance = M.Modal.init(elem, { dismissible: false });
instance.open();