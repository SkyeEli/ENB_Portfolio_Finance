import React, { useState, useContext } from 'react';
import PortfolioListItem from "./PortfolioListItem";


const PortfolioList = ({ portfolioShares, onClick }) => {

    const portfolioNodes = portfolioShares.map(share => {
        return <PortfolioListItem 
            onClick={onClick} 
            itemId={share._id}
            key={share._id}
            share={share}
        />
    });

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='scrollmenu'>
                {portfolioNodes}
                <h3>Total Portfolio Value: </h3>
            </div>
        </div>
    )
};

export default PortfolioList;