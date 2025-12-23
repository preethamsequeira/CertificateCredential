function goVerify() {
  var url = document.getElementById("url").value;

  if (url === "") {
    alert("Please enter credential URL");
    return;
  }

  var id = url.split("/").pop();
  window.location.href = "verify.html?id=" + id;
}

window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");

  if (!id) return;

  if (id === "ABC123") {
    document.getElementById("output").innerHTML =
      <h2 style="color:green;">
        ✅ Your certification credentials are successful
       </h2>;
  } else {
    document.getElementById("output").innerHTML =
      <h2 style="color:red;">
        ❌ Invalid Credential URL
       </h2>;
  }
};
