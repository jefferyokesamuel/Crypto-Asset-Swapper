async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log("Connecting")
            await ethereum.request({ method: "eth_requestAccounts"})
        } catch (err) {
            console.log(err)
        }
        
        // If Connedted, enable swap button
    }
}        }
