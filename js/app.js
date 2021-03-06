const alertBanner = document.querySelector('#alert');
const notifications = document.querySelector('.notify');

const chartSelect = document.querySelector('.traffic-nav');

const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

const trafficCanvas = document.querySelector('#traffic-chart');
const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector('#mobile-users');

let members = ['Molly Tuttle', 'Joe Armstrong', 'Victoria Chambers', 'Graham Issac'];

const settings = document.querySelector('.settings');
const timezone = document.querySelector('#timezone');
const public = document.querySelector('.publicToggle');
const email = document.querySelector('.emailToggle');


// Load saved settings

window.onload = settingsLoad;

function settingsLoad() {
  if (localStorage.length !== 0) {
  timezone.value = localStorage.getItem('selectedTimezone');

  if (localStorage.getItem('publicProfile') === 'true') {
    public.checked = true;
  } else public.checked = false;

  if (localStorage.getItem('emailOption') === 'true') {
    email.checked = true;
  } else email.checked = false;

  }
}

// Notification Bell

notifications.addEventListener('click', () => {
  const notifyCircle = document.querySelector('.notifyCircle');
  const dropDown = document.querySelector('.dropdown-content');
    notifyCircle.style.fill = '#39ff14';
    if (window.getComputedStyle(dropDown).display === 'none') {
      dropDown.style.display = 'block';
    } else if (window.getComputedStyle(dropDown).display === 'block') {
      dropDown.style.display = 'none';
    }
});


// Alert Banner

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
      alertBanner.style.display = 'none';
    }
  });




// Messaging Section


send.addEventListener('click', () => {
// checks to see if user and message field are filled Layout
  if (user.value === '' && message.value === ''){
    alert('Please fill out user and message fields before sending.');
    event.preventDefault();
  } else if (user.value === '') {
    alert('Please fill out user field before sending.');
    event.preventDefault();
  } else if (message.value === '') {
    alert('Please fill out message field before sending.');
    event.preventDefault();
  } else {
    alert(`Message sucessfully sent to: ${user.value}.`);
  }
});



// Settings Save


settings.addEventListener('click', e => {
  let target = e.target;
  if (target.textContent === 'Cancel') {
    localStorage.clear();
    timezone.value = 'Select a Timezone';
    email.checked = false;
    public.checked = false;
  } else if (target.textContent === 'Save') {
  localStorage.setItem('selectedTimezone', timezone.value);
  localStorage.setItem('publicProfile', public.checked);
  localStorage.setItem('emailOption', email.checked);

  }


});


// LINE GRAPH CODE

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      background: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  };

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});



// Change line graph

chartSelect.addEventListener('click', e => {
  let target = e.target;
  let text = target.textContent;
  let lis = document.querySelectorAll('.traffic-nav-link');


  let trafficData0 = {
      labels: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"],
      datasets: [{
        data: [50, 150, 70, 30, 70, 205, 65, 105, 150, 30, 50],
        background: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
      }]
    };

  let trafficData1 = {
      labels: ["7/20", "7/21", "7/22", "7/23", "7/24", "7/25", "7/26", "7/27", "7/28", "7/29", "7/30"],
      datasets: [{
        data: [750, 650, 860, 400, 1050, 650, 870, 875, 800, 675, 550],
        background: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
      }]
    };

    let trafficData3 = {
        labels: ["Sep.", "Oct.", "Nov.", "Dec.", "Jan.", "Feb.", "March", "Apr.", "May", "June", "July"],
        datasets: [{
          data: [7500, 9700, 10000, 8300, 9200, 7650, 10050, 7150, 9850, 7600, 9300],
          background: 'rgba(116, 119, 191, .3)',
          borderWidth: 1,
        }]
      };

  function removeClass() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = `traffic-nav-link`;
    }
  }

  function addClass() {
    for (let i = 0; i < lis.length; i++) {
    if (text === lis[i].textContent) {
      lis[i].className = `traffic-nav-link active`;
      }
    }
  }




  for (let i = 0; i < lis.length; i++) {
  if (text === lis[i].textContent) {
    if (i === 0){
      let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
          duration: 0
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        legend : {
          display: false
        }
      };

      let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData0,
        options: trafficOptions
      });
    } else if (i === 1){
      let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
          duration: 0
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        legend : {
          display: false
        }
      };

      let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData1,
        options: trafficOptions
      });
    } else if (i === 2){
        let trafficOptions = {
          aspectRatio: 2.5,
          animation: {
            duration: 0
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          },
          legend : {
            display: false
          }
        };

        let trafficChart = new Chart(trafficCanvas, {
          type: 'line',
          data: trafficData,
          options: trafficOptions
        });
      } else if (i === 3){
          let trafficOptions = {
            aspectRatio: 2.5,
            animation: {
              duration: 0
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            },
            legend : {
              display: false
            }
          };

          let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData3,
            options: trafficOptions
          });
          }

    }
  }

  removeClass();
  addClass();

});

// BAR GRAPH

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Dougnut chart

const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyles: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


// Autocomplete

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}


autocomplete(document.getElementById("userField"), members);
