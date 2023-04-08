import React from 'react';

const SideRight = ({avgTotalVolume,changePercent,extendedPrice,lowTime,iexOpenTime}) => {
    return (
        <div className="page__card__side">
            <div className="page__card__cont">
                <p className="page__card__desc">avgTotalVolume</p>
                <p className="page__card__info">{avgTotalVolume}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">changePercent</p>
                <p className="page__card__info">{changePercent}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">extendedPrice</p>
                <p className="page__card__info">{extendedPrice}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">iexOpenTime</p>
                <p className="page__card__info">{iexOpenTime}</p>
            </div>
            <div className="page__card__cont">
                <p className="page__card__desc">lowTime</p>
                <p className="page__card__info">{lowTime}</p>
            </div>
        </div>
    );
};

export default SideRight;