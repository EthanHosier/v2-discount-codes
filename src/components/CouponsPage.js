import React, {useState} from 'react'
import { useSearchParams, Outlet} from 'react-router-dom';
import BaseCoupon from './BaseCoupon'

const NUM_OF_PAGES = 3;
const CouponsPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  return (

    <div className='container-fluid bg-light-grey'>
      <div className='container pt-5'>
        <Outlet/>
        <div className='row mt-5'>
          <div className='col-xs-12 col-lg-4 order-lg-first order-last'>
            
            <div className='pt-2'>
              <h6 className='text-secondary'><strong>How to <span className='text-accent'>Save</span> With Website.com</strong></h6>
              <p className='text-secondary'>
              To use a discount code or voucher from [WEBSITE NAME], simply search for the category of item or brand you wish to purchase from. Once you have found the discount or voucher you want to use, either follow the link to the voucher or copy the code and enter it at checkout when you are making your purchase. This will automatically apply the discount to your total, allowing you to save money on your purchase. Make sure to keep coming back to [WEBSITE NAME] as we are constantly adding new discount codes and offers. Overall, using [WEBSITE NAME] is a simple and effective way to save money on your purchases.
              </p>
            </div>

            <div className='bg-white square-shadow pt-2 mt-5' >
              <h6 className='border-bottom p-3'>Hand Picked</h6>
              <div className='row'>
                
                <div className='col mb-3 mt-1'>
                  {[...Array(3)].map((e,i)=>{
                    return <div className='py-3 border ms-3 my-3 d-flex justify-content-center align-items-center hover-border-accent cursor-pointer'>
                      <p className='mb-0 py-3'>Logo {i}</p>
                    </div>
                  })}
                </div>

                <div className='col mb-3 mt-1'>
                  {[...Array(3)].map((e,i)=>{
                    return <div className='py-3 border me-3 my-3 d-flex justify-content-center align-items-center hover-border-accent cursor-pointer'>
                      <p className='mb-0 py-3'>Logo {i}</p>
                    </div>
                  })}
                </div>

                
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-8'>
          {searchParams?.get("q") && <h2 className='mb-3'>Search Results for "{searchParams.get("q")}"</h2>}

            <div className='square-shadow bg-white d-flex justify-content-between align-items-center px-4 py-4'>
              <h6 className='mb-0'>Found 18 Coupons</h6>
              <select class=" border-mid-grey bg-white w-150 p-2 ms-1">
                <option selected>Popular</option>
                <option value="1">Ending Soon</option>
                <option value="2">Latest</option>
                <option value="3">Name</option>
              </select>
            </div>

            {[...Array(10)].map(()=>{
              return <BaseCoupon/>
            })}

          <div className='d-flex justify-content-center mb-3'>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                
                
                <li class="page-item">
                  <button className={`border-0 square-shadow rounded-start ${selectedPage>1 && "hover-bg-accent"} mx-3 px-3 py-2 bg-white`} onClick={() => setSelectedPage(selectedPage-1)} disabled={selectedPage<=1}>&laquo;</button>
                </li>
                
                {
                  [...Array(3)].map((e,i) =>{
                    return <li class="page-item"><button className={`border-0 square-shadow small-rounded hover-bg-accent mx-3 px-3 py-2 ${selectedPage==i+1 ? "bg-accent": "bg-white"}`} onClick={() => setSelectedPage(i+1)} >{i+1}</button></li>
                  })
                }
                
                <li class="page-item">
                <li class="page-item">
                  <button className={`border-0 square-shadow rounded-end hover-bg-accent mx-3 px-3 py-2 bg-white ${selectedPage<NUM_OF_PAGES && "hover-bg-accent"}`} onClick={() => setSelectedPage(selectedPage+1)} disabled={selectedPage>=NUM_OF_PAGES}>&raquo;</button>
                </li>
                </li>
              </ul>
            </nav>
          </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponsPage