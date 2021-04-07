// import { createRequire } from 'module';
var require = require('sqlite3');
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

function adminClick() {
  var sqlite3 = require('sqlite3');
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

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

//        document.querySelector("#content").innerText =
//          googleUser.getBasicProfile().getGivenName();