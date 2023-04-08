import React from 'react';
import Title from "../../components/Title/Title";
import {useGetDataQuery} from "../../store/reducers/page1";
import SideLeft from "./SideLeft";
import SideRight from "./SideRight";
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
const Page1 = () => {
    const nav = useNavigate()
    const {data = []} = useGetDataQuery()
    return (
        <section className={'page'}>
            <div className="container">
                <div className="page__top">
                    <Title title={'Станица номер 1'}/>
                    <div className="page__top__navigation">
                        <BsArrowLeft onClick={() => nav(-1)}/>
                        <BsArrowRight onClick={() => nav('/second')}/>
                    </div>
                </div>
                <div className="page__content">
                    {
                        data.map(item => (
                            <div key={item.companyName} className={'page__card'}>
                             <SideLeft companyName={item.companyName} currency={item.currency} latestTime={item.latestTime} closeSource={item.closeSource} calculationPrice={item.calculationPrice}/>
                                <SideRight avgTotalVolume={item.avgTotalVolume} changePercent={item.changePercent} extendedPrice={item.extendedPrice} iexOpenTime={item.iexOpenTime} lowTime={item.lowTime}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Page1;