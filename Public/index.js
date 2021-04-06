$(document).ready(function () {
    $('.header').height($(window).height());

})

const history = useHistory();
history.push("SteamClubGuestView");

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
//        document.querySelector("#content").innerText =
//          googleUser.getBasicProfile().getGivenName();