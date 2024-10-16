function palindrome() {
    let n = Number(document.getElementById("hello").value);
    let reverse = 0;
    let original = n; // Store the original number before modifying n
    
    while (n > 0) {
        reverse = (reverse * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    
    if (reverse === original) {
        document.getElementById("result").value = "Palindrome Number";
    } else {
        document.getElementById("result").value = "Not a palindrome number";
    }
}
