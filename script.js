async function getNFTs() {
    const wallet = document.getElementById("wallet").value;
    const container = document.getElementById("nfts");

    container.innerHTML = "Loading NFTs...";

    const response = await fetch(`https://api.reservoir.tools/users/${wallet}/tokens/v7`, {
        headers: {
            "accept": "*/*"
        }
    });

    const data = await response.json();

    container.innerHTML = "";

    if (!data.tokens || data.tokens.length === 0) {
        container.innerHTML = "No NFTs found.";
        return;
    }

    data.tokens.forEach(t => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${t.token.name}</h3>
            <img src="${t.token.image}" width="200"/>
        `;
        container.appendChild(div);
    });
}
