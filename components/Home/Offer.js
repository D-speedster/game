import NewsItem from './NewsItem';
import ItemOffer from './ItemOffer';
export default function Offer() {

    return (
        <div className='Offer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='Box-Offer'>

                            {/* <div className='ms-3 '> <h4 className=''>تخفیف های ویژه</h4></div> */}
                            <ItemOffer></ItemOffer>



                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='Box-News'>

                            <NewsItem></NewsItem>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
