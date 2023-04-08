import React from 'react';

const SideLeft = ({companyName,calculationPrice,currency,latestTime,closeSource}) => {
    return (
        <div className="page__card__side">
            <div className="page__card__cont">
                <p className="page__card__desc">companyName =></p>
                <p className="page__card__info">{companyName}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">currency =></p>
                <p className="page__card__info">{currency}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">latestTime =></p>
                <p className="page__card__info">{latestTime}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">closeSource =></p>
                <p className="page__card__info">{closeSource}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">calculationPrice =></p>
                <p className="page__card__info">{calculationPrice}</p>
            </div>
        </div>
    );
};

export default SideLeft;