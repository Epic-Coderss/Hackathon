// import { createRequire } from 'module';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
requirejs.config({
  //Pass the top-level main.js/index.js require
  //function to requirejs so that node modules
  //are loaded relative to the top-level JS file.
  nodeRequire: require
});
let db = new sqlite3.Database('users.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

let sql = 'SELECT * FROM AdminPerms';
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    var usernames = row.Username;
    var where = row.AdminOf;
    console.log(usernames);
    console.log(where)
  });
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var name = profile.getName();
  var email = profile.getEmail();
  console.log(name);
  console.log('Image URL: ' + profile.getImageUrl());
  console.log(email);
  var id_token = googleUser.getAuthResponse().id_token;
  // This is null if the 'email' scope is not present.
}

sqlite3 = requirejs(['sqlite3'])

define(function(require) {
  var dep = require('dependency');

  //The value returned from the function is
  //used as the module export visible to Node.
  return function () {};
});

function adminClick(sqlite3) {
  let db = new sqlite3.Database('users.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the users database.');
  });
  let sql = 'SELECT * FROM AdminPerms';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      var usernames = row.Username;
      var where = row.AdminOf;
      console.log(usernames);
      console.log(where)
    });
  });
  if (name == usernames && !(where == null)) {
    window.location.replace('https://hackathon-309716.firebaseapp.com/adminPg.html')
  } else {
    console.log('work on this')
  }
}

function guestView() {
  window.location.replace('https://hackathon-309716.firebaseapp.com/SteamClubGuestView.html')
}

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

//        document.querySelector("#content").innerText =
//          googleUser.getBasicProfile().getGivenName();