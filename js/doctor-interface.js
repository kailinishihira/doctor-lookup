var apiKey = require('./../.env').apiKey;
var DoctorModule = require('../js/doctor.js').doctorModule;

$(document).ready(function() {
  let doctorModule = new DoctorModule();

  $('#illness-input').submit(function() {
    event.preventDefault();
    $('.list').show();
    let illness = $('#illness').val();
    doctorModule.getDoctorByIllness(illness);

    $('#name').val("");
    $('#illness').val("");
    $('#results').empty();

  });


  $('#name-input').submit(function() {
    event.preventDefault();
    $('.list').show();
    let name = $('#name').val();
    doctorModule.getDoctorByName(name);
    $('#name').val("");
    $('#illness').val("");
    $('#results').empty();
    });

  });
