function predictSpam() {
    let emailText = document.getElementById("emailInput").value.toLowerCase();
    let resultElement = document.getElementById("result");

    // List of common spam words
    let spamWords = ["lottery", "win", "free", "prize", "congratulations", "click here", "money", "urgent", "credit card", "bitcoin", "subscribe now", "buy now", "offer", "guaranteed"];

    // Check if email contains any spam words
    let isSpam = spamWords.some(word => emailText.includes(word));

    // Display result
    if (emailText.trim() === "") {
        resultElement.innerHTML = "⚠️ Please enter an email.";
        resultElement.style.color = "red";
    } else if (isSpam) {
        resultElement.innerHTML = "🚨 SPAM DETECTED!";
        resultElement.style.color = "red";
    } else {
        resultElement.innerHTML = "✅ NOT SPAM";
        resultElement.style.color = "green";
    }
}