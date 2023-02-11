async function connect() {
            console.log("Connecting")
            await ethereum.request({ method: "eth_requestAccounts"})
    }
}