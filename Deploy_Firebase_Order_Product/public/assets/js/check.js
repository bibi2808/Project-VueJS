document.getElementById("d-send-button").addEventListener("click", sendInformation);
if (typeof Storage !== "undefined") {
    var cart = JSON.parse(localStorage.getItem("_cart"));
    document.getElementById("name").innerHTML = localStorage.getItem("_name");
    document.getElementById("address").innerHTML = localStorage.getItem("_address");
    document.getElementById("tel").innerHTML = localStorage.getItem("_tel");
    document.getElementById("time").innerHTML = localStorage.getItem("_time");
    document.getElementById("totalCost").innerHTML = localStorage.getItem("_total_Price");
    document.querySelector(".order").innerHTML = "";
    cart.forEach(function (item) {
      document.querySelector(".order").innerHTML +=
        "<dd class='order'>" + item.name +
        "<span style='margin-left:20px' class='quantity'>x " + item.quantity +
        "</span>";
    });
} else {
  alert("Browser does not support Web Storage.");
}

async function sendInformation() {
  var data = {
    name: localStorage.getItem("_name"),
    address: localStorage.getItem("_address"),
    tel: localStorage.getItem("_tel"),
    date: localStorage.getItem("_date"),
    time: localStorage.getItem("_time"),
    cart: JSON.parse(localStorage.getItem("_cart")),
    totalCost: localStorage.getItem("_total_Price"),
  };
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  await axios.post("https://us-central1-waiwaitei2delivery-93693.cloudfunctions.net/sendMail",data, axiosConfig)
    .then(function (response) {
      console.log(response);
      window.location.href = "thankyou.html";
    })
    .catch(function (error) {
      console.log(error);
    });
}
