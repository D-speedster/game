import NewsItem from './NewsItem';

NewsItem
import ItemOffer from './ItemOffer';
export default function Offer() {

    return (
        <div className='Offer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='Box-Offer'>

                            <div className='ms-3 pt-4'> <h4 className=''>تخفیف های ویژه</h4></div>
                            <ItemOffer></ItemOffer>



                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='Box-News'>
                            {/* <img src='/images/GTA-6-Prison-Fence-Rockstar-Games-Logo-768x432.jpg' />
                            <div className='title-News'>
                                <span>کارمندان Rockstar Games به دفتر بازگشتند</span>

                            </div> */}
                            <NewsItem></NewsItem>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
