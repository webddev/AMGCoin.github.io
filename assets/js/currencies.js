const URL1 = "http://api.coinlayer.com/api/live?access_key=7adee762bff8c90bd72e931ccf581cf1"

const currencies = document.getElementById('webticker-dark-icons')

const arr = ['BTC',
    'ETH',
    'GAME',
    'LBC',
    'NEO',
    'STE',
    'LIT',
    'NOTE',
    'MINT',
    'IOT',
    'DAS',
    'VOX',
    'USDT',
    'LTC',
    'TRX',
    'ADA',
    'XRP',
    'XMR',
    'DOGE'];

function createCoinEl(index, name, price) {
    const listItem = document.createElement('li')
    listItem.dataset.update = `item${index}`
    const icon = document.createElement('i')
    icon.classList.add('cc')
    icon.classList.add(name)
    listItem.appendChild(icon)
    const text = document.createTextNode(name)
    listItem.appendChild(text)
    const span = document.createElement('span')
    span.classList.add('coin-value')
    span.textContent = ` $${price}`
    listItem.appendChild(span)
    console.log(listItem)
    return listItem

}
async function createCoinList() {
    const result = await fetch(URL1)
        .then(res => res.json())
    if (result) {
        arr.forEach((el, i) => {
            for (let crypto of Object.entries(result?.rates)) {
                if (crypto[0] === el) {
                    currencies.appendChild(createCoinEl(i, el, crypto[1]))
                }
            }
        })

    }
}
createCoinList()