document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let contact = '+919625564381'; // Your WhatsApp number

    // Encode message
    var encodedMessage = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message 
    );

    // Construct WhatsApp link
    var link;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
    } else {
        link = `https://web.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
    }

    // Open WhatsApp link in a new tab
    window.open(link, '_blank');
});
