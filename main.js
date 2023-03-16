//DOM
const email = document.querySelector("[type=email]")
const err = document.querySelector(".error")
const btn = document.querySelector(".btn")

//Regex
const reg = /^\S+@\S+.\S+$/

//Event Listeners
email.addEventListener("keyup", e => {
  if(reg.test(e.target.value)) {
    email.classList.remove("inval")
    err.style.display = "none"
  }
  else if (e.target.value === "") {
    email.classList.remove("inval")
    err.style.display = "none"
  }else {
    email.classList.add("inval")
    err.style.display = "block"
  }
})
btn.addEventListener("click", submit)

//Functions
function submit() {
  let val = email.value
  btn.classList.add("fade")
  setTimeout(() => btn.classList.remove("fade"), 200)
  if(reg.test(val)) {
    email.classList.remove("inval")
    err.style.display = "none"
    alert("You'll get an email soon")
  }else {
    email.classList.add("inval")
    err.style.display = "block"
  }
}