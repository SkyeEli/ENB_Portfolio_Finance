import React from 'react';
import MarketDetail from './MarketDetail';


const MarketBox = ({ marketShare, stockNameFromSearch, getStockData, addToWatchList, addShareToPortfolio }) => {


    const handleChange = (event) => {
        const inputText = event.target.value
        if (inputText.length === 2 || 3 || 4) {
            stockNameFromSearch(inputText)
            getStockData(inputText)
        }
    }

    return (
        <>
            <div className='marketbox'>
                <h2> Market Shares</h2>

                <h4>Search a stock</h4>
                <form>
                    <input maxLength="4" className="searchShares"
                        onChange={handleChange} placeholder="Enter stock symbol"
                        type="text"></input>
                </form>
            </div>
            <MarketDetail stock={marketShare} addToWatchList={addToWatchList} addShareToPortfolio={addShareToPortfolio} />
        </>
    )
}

export default MarketBox;