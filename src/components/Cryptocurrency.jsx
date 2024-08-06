import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';


export default function Cryptocurrency(props) {
    const [search, setSearch] = useState("");
    const [currency, setCurrency] = useState([]);
    const [currencyType, setCurrencyType] = useState('USD');
    const [conversionRate, setConversionRate] = useState(1);

    useEffect(() => {
        axios.get(`https://coinpaprika1.p.rapidapi.com/tickers?limit=${props.LIMIT}`, {
            headers: {
                'x-rapidapi-key': '4deb321338mshf664fd6e3a5b373p148e4ajsn40e4d3a6b9e6',
                'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com'
            }
        })
        .then(res => {
            setCurrency(res.data);
        })
        .catch(err => console.log(err));
    }, [props.LIMIT]);

    useEffect(() => {
        if (currencyType === 'PKR') {
            axios.get('https://api.exchangerate-api.com/v4/latest/USD')
                .then(res => setConversionRate(res.data.rates.PKR))
                .catch(err => console.log(err));
        } else {
            setConversionRate(1);
        }
    }, [currencyType]);

    const toggleCurrency = () => {
        setCurrencyType(types => (types === 'USD' ? 'PKR' : 'USD'));
    };

    const filteredCurrency = currency.filter(data =>
        data.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <div className="mainContainer">
            <div className="container">
            <h1 style={{ color: 'Green' }}>Crypto Currency</h1>
                <input
                    type="text"
                    className="search-bar mx-3"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
              
                <button onClick={toggleCurrency}>
                    Switch to {currencyType === 'USD' ? 'PKR' : 'USD'}
                </button>
                <div className="currency-list">
                    {filteredCurrency.map((data, index) => (
                        <div key={index} className="currency-item">
                            <img src={`https://static.coinpaprika.com/coin/${data.id}/logo.png`} alt={data.name} width="50" height="50" />
                            <div className="currency-details">
                                <h2>{data.name} ({data.symbol})</h2>
                                <p>Rank: {data.rank}</p>
                                <p>Max Supply: {data.max_supply}</p>
                                <p>Total Supply: {data.total_supply}</p>
                                <p> <b>Price:</b> {currencyType === 'USD' ? `$${data.quotes.USD.price.toFixed(2)}` : `Rs${(data.quotes.USD.price * conversionRate).toFixed(2)}`}</p>
                                <p>Volume (24hrs): {currencyType === 'USD' ? `$${data.quotes.USD.volume_24h.toFixed(2)}` : `Rs${(data.quotes.USD.volume_24h * conversionRate).toFixed(2)}`}</p>
                                <p>Last Update: {data.last_updated}</p>
                                <p>Market Cap: {currencyType === 'USD' ? `$${data.quotes.USD.market_cap}` : `Rs${(data.quotes.USD.market_cap * conversionRate).toFixed(2)}`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

