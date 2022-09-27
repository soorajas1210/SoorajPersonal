$(document).ready(function(){
    $("#gform").validate({
        rules:{
            name:{
                required:true,
                minlength:4

                 },
                 email:{
                    required:true,
                    email:true
                
                 },
                 phone:{
                    required:true,
                    minlength:10,
                    maxlength:10,
            

                 },
                 message:{
                    required:true
                 },

        },
        submitHandler:function(form){
            //form.submit();
            $("#gform").submit((e)=>{
              e.preventDefault()
              $.ajax({
                  url:"https://script.google.com/macros/s/AKfycbxneXeAFGSsMoZM9Xdak7qB4Dn2owBzeKSAHH-8LF1Wlp50Xt4hNLCYNP6zx72zDNCDeQ/exec",
                  data:$("#gform").serialize(),
                  method:"post",
                  success:function (response){
                      alert("Form submitted successfully")
                      window.location.reload()
                      //window.location.href="https://google.com"
                  },
                  error:function (err){
                      alert("Something Error")
            
                  }
              })
            })
        }

       
    })
})


