async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log("Connecting")
            await ethereum.request({ method: "eth_requestAccounts"})
        } catch (err) {
            console.log(err)
        }
        // Change the button when connected
        document.getElementById("login_button").innerHTML = "Connected"
        // If Connedted, enable swap button
        document.getElementById("swap_button").disabled = false
    } else { 
        document.getElementById("login_button").innerHTML = "Install Metamask"
    }
    
}

document.getElementById("login_button").onclick = connect

document.getElementById("from_token_select").onclick = openModal

function openModal() {
    document.getElementById("token_modal").style.display = "block"
}    document.getElementById("token_modal").style.display = "none";
}
