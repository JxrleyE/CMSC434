function openCity(tab) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(tab).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function showWarning() {
    document.getElementById("profile-warning").style.display = "flex";
}

function closeWarning() {
    document.getElementById("profile-warning").style.display = "none";
}

// choices form submission logic
document.getElementById("choicesForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var camera = document.querySelector('input[name="camera"]:checked').value;
  var lens = document.getElementById("lensSelection").value;
  document.getElementById("choicesResult").textContent =
    "Your setup: " + camera + ", with " + lens + " lens.";
});
