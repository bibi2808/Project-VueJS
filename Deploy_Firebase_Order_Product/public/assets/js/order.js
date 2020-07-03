$(document).ready(function () {
  let totalCost = 0;
  let cart = [];
  let price = 0;
  let quantity = 0;
  let name = "";
  let productID = "";
  let Items = function (productID, name, quantity, price) {
    this.productID = productID;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  };
  if (localStorage.getItem("_cart") !== null) {
    cart = [...JSON.parse(localStorage.getItem("_cart"))];
  }
  $("select.amount").on("change", function () {
    price = $(this).data("price");
    quantity = parseInt(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
    name = $(this).parent()[0].previousElementSibling.innerHTML;
    productID = parseInt(
      $(this)
        .attr("name")
        .replace(/[^0-9]/g, "")
    );

    let item = new Items(productID, name, quantity, price);
    if (cart.length === 0) {
      cart.push(item);
    } else {
      update(item);
    }

    totalCost = cart.reduce(function (acc, object) {
      return acc + object.price * object.quantity;
    }, 0);

    $("input.total_Price").val(totalCost);
  });

  // VALIDATE CART
  function validateCart(cart) {
    var found = -1;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].productID === 1 || cart[i].productID === 2) {
        found = i;
        break;
      }
    }
    return found;
  }

  // UPDATE CART ORDER
  function update(item) {
    isUpdated = false;
    cart.forEach(function (el, index) {
      if (el.productID === item.productID) {
        el.quantity = item.quantity;
        if (el.quantity === 0) {
          cart.splice(index, 1);
        }
        isUpdated = true;
      }
    });
    if (!isUpdated) {
      cart.push(item);
    }
  }
  // VALIDATE FORM
  $("#date").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: 1,
  });
  $("#d-form").validate({
    rules: {
      name: {
        required: true,
      },
      address: {
        required: true,
      },
      tel: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 11,
      },
      date: {
        required: true,
      },
      time: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "お名前をご入力ください",
      },
      address: {
        required: "ご住所をご入力ください",
      },
      tel: {
        required: "お電話番号をご入力ください",
        number: "半角数字をご入力ください",
        minlength: "10、あるいは11桁の半角でご入力ください",
        maxlength: "11、あるいは11桁の半角でご入力ください",
      },
      date: {
        required: "配達日をご選択ください",
      },
      time: {
        required: "お届け時間をご選択ください",
      },
    },
  });

  function convertTel(tel) {
    if (tel.length === 11) {
      return tel
        .replace(/\D/g, "")
        .replace(/(\d{1,3})(\d{1,4})?(\d{1,4})?/g, function (txt, f, s, t) {
          if (t) {
            return `${f}-${s}-${t}`;
          } else if (s) {
            return `(${f})-${s}`;
          } else if (f) {
            return `(${f})`;
          }
        });
    } else if (tel.length === 10) {
      return tel
        .replace(/\D/g, "")
        .replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/g, function (txt, f, s, t) {
          if (t) {
            return `${f}-${s}-${t}`;
          } else if (s) {
            return `(${f})-${s}`;
          } else if (f) {
            return `(${f})`;
          }
        });
    }
  }

  // CONFIRM INFOMATION AND SEND REQUEST
  $("#d-send-button").click(function (event) {
    var valid = $("#d-form").valid();
    var name = $('#d-form input[name="name"]').val();
    var address = $('#d-form input[name="address"]').val();
    var tel = $('#d-form input[name="tel"]').val();
    var tel = $('#d-form input[name="tel"]').val();
    var date = $('#d-form input[name="date"]').val();
    var time = $("#d-form select[name='time'] option:selected");
    var total_Price = $(".total_Price").val();
    var checkOut = validateCart(cart);

    if (!valid || cart.length === 0 || checkOut === -1) {
      $(".error_item ").removeClass("item").addClass("error_show");
      if (checkOut !== -1) {
        $(".error_item ").removeClass("error_show").addClass("item");
      }
      event.preventDefault();
    } else {
      localStorage.setItem("_name", name);
      localStorage.setItem("_address", address);
      localStorage.setItem("_tel", convertTel(tel));
      localStorage.setItem("_date", date);
      localStorage.setItem("_time", time.html());
      localStorage.setItem("_total_Price", total_Price);
      localStorage.setItem("_cart", JSON.stringify(cart));
      window.location.href = "check.html";
    }
  });
});
