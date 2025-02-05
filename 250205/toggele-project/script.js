const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const modalGnb = document.querySelector(".modal-gnb");

  this.classlist.toggle("active");
  modalGnb.classList.toggle("active");
});
