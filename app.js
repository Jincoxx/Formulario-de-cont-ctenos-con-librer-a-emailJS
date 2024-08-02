const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'nombre de mi servigio de gmail'
const templateId = ''

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs
    .sendForm(serviceId,templateId,frmEmail,apikey)
    .then( (result) => Swal.fire('Su mensaje se envio conrrectamente.'))
    .catch( (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ha sido posible enviar el mensaje!',
        });
    });

}