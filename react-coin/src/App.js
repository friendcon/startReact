import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] = useState(0);
    const [coincompany, setCoinCompany] = useState(null);

    const onChange = (event) => setAmount(event.target.value);
    const onChange2 = (event) => setCoinCompany(event.target.value);


    // api를 한번 호출하기 위해 dependency 설정을 하지 않는다
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
      <div>
          <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>

          {
              loading ? <strong>Loading...</strong>: (
              <select onChange={onChange2}>
                  {coins.map((coin) => (
                      <option key={coin.id} value={Math.round(coin.quotes.USD.price)}>
                          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD
                      </option>
                  ))}
              </select>
              )
          }
          <br />

          <input value={amount} type="number" onChange={onChange}/>
          result : {amount*coincompany}

          <ul>
              {coins.map((coin) => (
                  <li key={coin.id}>
                      {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default App;
