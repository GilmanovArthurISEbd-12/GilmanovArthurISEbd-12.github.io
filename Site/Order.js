const form = document.forms[0];

form.addEventListener("submit", function(event){
	event.preventDefault();
	const info = new FormData(form);

	 var fio = document.getElementById("fio").value;
	 console.log("Заполнили ФИО:" + fio);
	 var phone = document.getElementById("phone").value;
	 console.log("Заполнили телефоный номер:" + phone);
	 var date = document.getElementById("date").value;
	 console.log("Заполнили дату:" + date);
	 if(document.getElementById("chek").checked && fio != "" && phone != "" && date != ""){
	 	swal.fire({
				  title: "Спасибо за заказ!",
				  icon: "success"
				});
	 } else {
	 	swal.fire({
				  title: "Заполните все поля",
				  icon: "error"
				});
	 }
	 console.log(chek);
})

 	function onFocus(){
      document.getElementById("fio").focus();
 	}
	function onFocusPhNum(){
      document.getElementById("phone").focus();
 	}
 	function onFocusDate(){
      document.getElementById("date").focus();
 	}
 	function onFocusAccept(){
      document.getElementById("chek").checked = true;
 	}