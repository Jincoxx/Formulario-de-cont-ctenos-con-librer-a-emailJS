const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_qur2pc9'
const templateId = 'template_ogamv4m'
const apikey = 'QT54_HA5kv4hiaU6A'

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
