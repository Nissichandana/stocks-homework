import stocks from "../data"

// let apiRoot = "https://financialmodelingprep.com/api/v3/"
// let apiKey = "1ea3a54a98af7d5e9d610752bb1af838"

// async function getStocks() {
//     // 
//     let res = await fetch(apiRoot + "stocks/real-time-price?apikey=" + apiKey)
//     let data = await res.json()
//     console.log("API stocks:", data)
//     return data
// }

//getStocks()

export default function Dashboard() {
    return (
        <div>
            <table>
                <tr>
                    <th>Company name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>symbol</th>
                    <th>open</th>
                </tr>
                {stocks.map(function(stock){
                    return (
                        <tr key={stock.symbol}>
                            <td>{stock.name}</td>
                            <td>{stock.lastPrice}</td>
                            <td style={{
                                color: stock.change < 0 ? 'red' : 'green'
                            }}>
                                {stock.change.toFixed(2)}
                            </td>
                            <td>{stock.symbol}</td>
                            <td>{stock.open}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}