
jQuery('#form').validate({
	rules:{
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:8
		},
	},messages:{
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 8 characters long"
		},
	},
	submitHandler:function(form){
		form.submit();
	}
});