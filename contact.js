const scriptURL = "https://script.google.com/macros/s/AKfycbxbnCAq2Ox2DJaOe0b7MOPo18C-NLy-MqKLyXDwypRVKdfjGwzHovWKSPrdlKWs_OeJ/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Received!!"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })