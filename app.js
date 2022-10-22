const alertMe = document.querySelector(".shop_journal_btn");
alertMe.addEventListener("click", function (e) {
  setTimeout(function () {
    alert("No Product Currently At Stock!");
    alertMe.textContent = "More Goods Coming Soon!...";
  }, 2000);
});
