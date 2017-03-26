
$(document).ready(function(){

function init(){
  //var dest = "Sydney_Harbour_Bridge_night.jpg";
  // var dest = "puydesancy.jpg";
  //window.setTimeout("10000", pushToFB('nextURL',dest));
  //window.setTimeout("3000", changeImage(dest));
}
init();

firebase.database().ref("nextURL").on('value', function(snapshot){
 console.log(snapshot.val());
 if(snapshot.val() != null){
   changeImage(snapshot.val());
   snapshot.ref.remove();
   pushToFB('currentURL',snapshot.val());
 }
});

function changeImage(destination){
  $('#destImg').attr("src", destination);
}

function pushToFB(eP,url){
  var newUrlRef = firebase.database().ref(eP);
  var urlRef = newUrlRef.set(url);


}


function clearNextURL(){

}











})
