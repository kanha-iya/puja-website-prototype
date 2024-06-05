// Now again with a footer:

let footer = document.createElement('footer');
document.querySelector('body').append(footer);


let footerContent = ` 
<div class="social-media">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">whatsapp</a>
        </div>
        <div class="footer">&copy; All Right Reserve to company name </div>
`


document.querySelector('body>footer:last-of-type').innerHTML = footerContent;