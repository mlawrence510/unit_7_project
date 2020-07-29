const alertBanner = document.querySelector('#alert');

alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <p>ALERT: Your have 6 overdue tasks to complete.</p>
    <p class="alertX">x</p>
  </div>
  `;

  alertBanner.addEventListener('click', e=> {
    const element = e.target;
    if (element.classList.contains("alertX")) {
      alertBanner.style.display = 'none'
    }
  });
