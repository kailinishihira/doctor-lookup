var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#illness-input').submit(function() {
    event.preventDefault();
      let illness = $('#illness').val();

      $('#illness').val("");
      $('#results').empty();
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=47.6062%2C-122.3321%2C20&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=10&user_key=${apiKey}`;

        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });

      promise.then(function(response) {
        let body = JSON.parse(response);
        let bodyData = body.data;
        console.log(bodyData);
        for(let i = 0; i < bodyData.length; i++) {
          $('#results').append(`<li>Name: ${bodyData[i].practices[0].name}</li>`);
          $('#results').append(`<li>Address: ${bodyData[i].practices[0].visit_address.street}, ${bodyData[i].practices[0].visit_address.city}, ${bodyData[i].practices[0].visit_address.state}, ${bodyData[i].practices[0].visit_address.zip}</li>`);
          $('#results').append(`<li>Phone: ${bodyData[i].practices[0].phones[0].number}</li>`);
          $('#results').append(`<li>Accepts new patients: ${bodyData[i].practices[0].accepts_new_patients}</li><br>`);
        }

      //doctor's can have multiple practies... in an array!!!
      //Doctors first and last name
      //address
      //phone numbers are in an array - need another loop
      //website - can't find!!!!
      //accepting new patients


      }, function(error) {
        $('#results').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
// });
