// $(document).ready(function(){
//   $('.media').hide({width:'toggle'},350);
//   $('.work-link').click(function(){
//       $('.header-image').animate({width:'toggle'},350);
//       // $('.media').animate({width:'toggle'},350);
//   });
// });
// var nav = responsiveNav(".nav-collapse", { // Selector
//   animate: true, // Boolean: Use CSS3 transitions, true or false
//   transition: 284, // Integer: Speed of the transition, in milliseconds
//   label: "Menu", // String: Label for the navigation toggle
//   insert: "before", // String: Insert the toggle before or after the navigation
//   customToggle: "", // Selector: Specify the ID of a custom toggle
//   closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
//   openPos: "relative", // String: Position of the opened nav, relative or static
//   navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
//   navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
//   jsClass: "js", // String: 'JS enabled' class which is added to  element
//   init: function(){}, // Function: Init callback
//   open: function(){}, // Function: Open callback
//   close: function(){} // Function: Close callback
// });

// $("#hero-text").fitText(1.2, { minFontSize: '20px', maxFontSize: '52px' });
// $("#hero-sub").fitText(1.2, { minFontSize: '16px', maxFontSize: '24px' });
// $("#page-text").fitText(1.2, { minFontSize: '20px', maxFontSize: '42px' });

function recentTrack(JSONdata) {
  var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
  document.getElementById("recentTrackArtist").innerHTML = oTrack.artist["#text"];
  document.getElementById("recentTrackTitle").href = oTrack.url;
  document.getElementById("recentTrackTitle").innerHTML = oTrack.name;
}