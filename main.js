// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyDbtDWWVe882UN9P6Af2XbvgSVQEnDrw0Q",
    authDomain: "project-3155705669180094265.firebaseapp.com",
    databaseURL: "https://project-3155705669180094265.firebaseio.com",
    projectId: "project-3155705669180094265",
    storageBucket: "project-3155705669180094265.appspot.com",
    messagingSenderId: "194425600799"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});