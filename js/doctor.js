var apiKey = require('./../.env').apiKey;

var DoctorModule = function() {

};

DoctorModule.prototype.getDoctorByIllness = function(illness) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=47.6062%2C-122.3321%2C20&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=20&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    let bodyData = body.data;
    console.log(bodyData);
    if (bodyData.length === 0){
      $('#results').text("There are no doctors that meet your criteria.");
    } else {
      for(let i = 0; i < bodyData.length; i++) {
        $('#results').append(`<h4>${bodyData[i].profile.first_name} ${bodyData[i].profile.last_name}, ${bodyData[i].profile.title}</h4>`);
        $('#results').append(`<li>Address: ${bodyData[i].practices[0].visit_address.street} <br> ${bodyData[i].practices[0].visit_address.city}, ${bodyData[i].practices[0].visit_address.state}, ${bodyData[i].practices[0].visit_address.zip}</li>`);
        $('#results').append(`<li>Phone: ${bodyData[i].practices[0].phones[0].number}</li>`);

        if(bodyData[i].practices[0].website !== undefined) {
          $('#results').append(`<li>Website: <a href="${bodyData[i].practices[0].website}" target="_blank">${bodyData[i].practices[0].website}</a></li>`);
        } else {
          $('#results').append(`<li>Website: N/A`);
        }

        if(`${bodyData[i].practices[0].accepts_new_patients} = true`) {
          $('#results').append(`<li>Accepts new patients: Yes</li><br>`);
        } else {
          $('#results').append(`<li>Accepts new patients: No</li><br>`);
        }
      }
    }

    }, function(error) {
      $('#results').text(`There was an error processing your request: ${error.message}`);
    });
  };

  DoctorModule.prototype.getDoctorByName = function(name) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6062%2C-122.3321%2C20&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=20&user_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      let bodyData = body.data;
      if (bodyData.length === 0){
        $('#results').text("There are no doctors that meet your criteria.");
      } else {
        for(let i = 0; i < bodyData.length; i++) {

          $('#results').append(`<h4>${bodyData[i].profile.first_name} ${bodyData[i].profile.last_name}, ${bodyData[i].profile.title}</h4>`);
          $('#results').append(`<li>Address: ${bodyData[i].practices[0].visit_address.street} <br> ${bodyData[i].practices[0].visit_address.city}, ${bodyData[i].practices[0].visit_address.state}, ${bodyData[i].practices[0].visit_address.zip}</li>`);
          $('#results').append(`<li>Phone: ${bodyData[i].practices[0].phones[0].number}</li>`);

          if(bodyData[i].practices[0].website !== undefined) {
            $('#results').append(`<li>Website: <a href="${bodyData[i].practices[0].website}" target="_blank">${bodyData[i].practices[0].website}</a></li>`);
          } else {
            $('#results').append(`<li>Website: N/A`);
          }

          if(`${bodyData[i].practices[0].accepts_new_patients} = true`) {
            $('#results').append(`<li>Accepts new patients: Yes</li><br>`);
          } else {
            $('#results').append(`<li>Accepts new patients: No</li><br>`);
          }

        }
      }

      }, function(error) {
        $('#results').text(`There was an error processing your request: ${error.message}`);
      });
    };

exports.doctorModule = DoctorModule;
