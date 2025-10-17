// mobile responsive navbar 
let bar=document.querySelector(".bar")
let navBarshow=document.querySelector(".nav-bar2")
bar.addEventListener("click",function(){
    navBarshow.style.display="block"
    bar.style.display="none"
})
let closeNavBar=document.querySelector(".close-bar")
closeNavBar.addEventListener("click",function(){
    navBarshow.style.display="none"
    bar.style.display="block"
})



// progress bar 

let progresshtml=document.querySelector(".pgb-html")
let progresscss=document.querySelector(".pgb-css")
let progressjs=document.querySelector(".pgb-js")
let progressui=document.querySelector(".pgb-ui")
window.addEventListener("load",function(){
    setTimeout(() => {
        progresshtml.style.width="96%"
    },500);
})
window.addEventListener("load",function(){
    setTimeout(() => {
        progresscss.style.width="85%"
    },500);
})
window.addEventListener("load",function(){
    setTimeout(() => {
        progressjs.style.width="80%"
    },500);
})
window.addEventListener("load",function(){
    setTimeout(() => {
        progressui.style.width="70%"
    },500);
})



// form submition

let form = document.querySelector("form")
let msg1 = document.querySelector(".msg1")
let msg2 = document.querySelector(".msg2")
let msg3 = document.querySelector(".msg3")
let msg4 = document.querySelector(".msg4")
let nam = document.querySelector("#nme")
let email = document.querySelector("#eml")
let subject = document.querySelector("#subject")
let textarea = document.querySelector("#txtarea")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    if (nam.value === "") {
        msg1.innerText = "Please Enter Your Name"
        msg1.style.color = "indianred"
    }
    else if (email.value === "") {
        msg2.innerText = "Please Enter Your Email"
        msg2.style.color = "indianred"
    }
    else if (subject.value === "") {
        msg3.innerText = "Please Enter Your subject"
        msg3.style.color = "indianred"
    }
    else if (textarea.value === "") {
        msg4.innerText = "Please Enter Your Message"
        msg4.style.color = "indianred"
    }
    else{
        form.setAttribute('action',"https://formspree.io/f/xyznlwoq");
        form.setAttribute(`method`,"POST");
        form.submit()
    }
})

nam.addEventListener("input", () => msg1.innerText = "")
email.addEventListener("input", () => msg2.innerText = "")
textarea.addEventListener("input", () => msg4.innerText = "")
subject.addEventListener("input", () => msg3.innerText = "")
