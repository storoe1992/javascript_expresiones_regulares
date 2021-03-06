
    const validateFields = (name,rut,lastName,email,age,date) =>{
        let validRut =  rut.match(/^[1-9]{1,1}[0-9]{7,7}[kK0-9]{1,1}$/);
        let validName = name.match(/^[a-zA-Z ]+$/);
        let validLastName = lastName.match(/^[a-zA-Z ]+$/); 
        let validMail = email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
        let validAge = age.match(/^[0-9]+$/);
        let validDate = date.match(/^[0-9]{2,2}-[0-12]{2,2}-[0-9]{4,4}$/)
       

        let errorMessage = ''

        if(validRut == null )
            errorMessage = errorMessage === '' ? "Inserte un rut válido" : errorMessage;

        if(validName == null)
            errorMessage = errorMessage === '' ? "Inserte un nombre válido" : errorMessage;

        if(validLastName == null)
            errorMessage = errorMessage === '' ?  "Inserte un apellido válido" : errorMessage;

        if(validMail == null)
            errorMessage = errorMessage === '' ? "Inserte un mail válido" : errorMessage; 
        
        if(validAge == null)
            errorMessage = errorMessage === '' ? "Inserte una edad válida" : errorMessage; 
            
        if(validDate == null)
            errorMessage = errorMessage === '' ? "Inserte una fecha válida" : errorMessage; 
            
        


        let errorValidation = errorMessage.trim()!='';

        if(errorValidation)
            alert(errorMessage);

        return errorValidation;
    }

    const showSuccessMessage = (name,lastName,especialidad,fecha,hora,email)=> {
        document.getElementById("messagetext").innerHTML = `Estimado(a) ${name} ${lastName}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. Gracias por preferirnos.`
    }

    
    function onRegister(event){
        event.preventDefault();
        let name = document.getElementById("name").value;
        let rut = document.getElementById("rut").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let date = document.getElementById("date").value;
        var selectEspecialidad = document.getElementById("especialidad");
        var especialidad = selectEspecialidad.options[selectEspecialidad.selectedIndex].text;
        var selectHour = document.getElementById("hour");
        var hour = selectHour.options[selectHour.selectedIndex].text;
    

        let errorValidation = validateFields(name,rut,lastName,email,age,date);
        
        if(!errorValidation)
            showSuccessMessage(name,lastName,especialidad,date,hour,email)
    }
    