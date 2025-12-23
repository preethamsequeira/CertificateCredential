function goVerify() {
  var url = document.getElementById("url").value;

  // Extract credential ID from URL
  var id = url.split("/").pop();

  // Redirect to verification page
  window.location.href = "verify.html?id=" + id;
}

window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");

  // Dummy valid credential for assignment
  if (id === "ABC123") {
    document.getElementById("output").innerHTML =
      <h2 style="color:green;">
       ✅ Your certification credentials are successful
       </h2>;
  } else if (id) {
    document.getElementById("output").innerHTML =
      <h2 style="color:red;">
       ❌ Invalid Credential URL
       </h2>;
  }
};
