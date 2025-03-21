document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("AlIlBrJ4N1mtrjM3b"); // Replace with your EmailJS user ID
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let userName = document.getElementById("user_name").value;
    let userEmail = document.getElementById("user_email").value;
    let userMessage = document.getElementById("user_message").value;

    if (!userName || !userEmail || !userMessage) {
        alert("Please fill in all fields.");
        return;
    }

    // ✅ Step 1: Send User's Message to You
    let toOwner = {
        user_name: userName,
        user_email: userEmail,
        user_message: userMessage
    };

    emailjs.send("service_ri072p9", "template_khx8rer", toOwner)
        .then(() => {
            

            // ✅ Step 2: Send Auto-Reply to the User
            let toUser = {
                user_name: userName,
                user_email: userEmail
            };

            return emailjs.send("service_ri072p9", "template_mcj8pjo", toUser);
        })
        .then(() => {
            
            alert("Message sent successfully! You will receive a reply soon.");
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        });
});
