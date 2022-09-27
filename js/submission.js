
$("#gform").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        },
        message:{
          minlength:5
        }
    },
    message:{
       name:{

        minlength:"Please enter atlest 2 characters."
       },
       message:{
        minlength:"Please enter atleast 5 characters."
       }
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
});
