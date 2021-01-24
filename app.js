var apikey = {
    key: '0b4f918d-3912-4af9-9ae6-22cc74b3a8fd'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
        return response.json();
    })
    .then((api) => {
        var text = "";

        for (let i = 0; i < 10; i++) {
            console.log(api);
            text = text + `

                <div class="media">
                    <div style="width: 70%; display: flex; justify-content: center; align-items: center;">
                        <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                        <div class="media-body">
                            <h5 class="mt-2">
                                ${api.data[i].name}
                            </h5>
                            <div style="display: flex; justify-content: space-between;">
                                <p>
                                    ${api.data[i].symbol}
                                </p>
                                <p>
                                    ${api.data[i].first_historical_data}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            `;
            document.getElementById("coins").innerHTML = text;
        }

    })
    .catch((error) => {
        console.error(error.message);

        var text = "";

        text = text + `

        <div class="media">
            <h1>
                Ocorreu um erro.
                Por favor, recarregue a página.
            </h1>
        </div>

        `
        document.getElementById("coins").innerHTML = text;
    })