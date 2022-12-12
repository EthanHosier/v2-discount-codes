import React, {useEffect} from 'react'
import BaseCoupon from "./BaseCoupon"

const NUMBER_OF_DISCOUNTS = 11;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SpecificBrandPage = ({brand}) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
          });
      }, [])
  return (
    <div className='container-fluid bg-light-grey'>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-lg-4 col-12 order-last order-lg-first'>
                    <div className='p-5 bg-white d-none d-lg-block square-shadow'>
                        <div className='p-5 border d-flex justify-content-center align-items-center'>LOGO</div>
                    </div>

                    <div className=' small-rounded text-secondary my-4 p-2'>
                        <p>{brand} is a UK-based retailer of sports fashion and footwear. It was founded in 1981 and has since grown to become one of the leading sports fashion retailers in the world, with over 1,000 stores across the UK and Europe, as well as a strong presence in the US and Asia. {brand} offers a wide range of products, including trainers, sports apparel, and accessories from top brands such as Nike, adidas, and Puma. {brand} is known for its focus on providing high-quality products and excellent customer service, making it a popular destination for sports fashion enthusiasts.</p>
                        
                        <h6><strong>Save on stylish sportswear for less with a {brand} discount code {(new Date).getFullYear()}</strong></h6>
                        <p>Using a discount code at {brand} is a great way to save money on your purchases. These codes can be used online or in-store and are often offered as part of a promotion or special event. To use a discount code at {brand}, simply enter the code at checkout when placing your order. The discount will then be applied to your total, allowing you to save money on your purchase. By using a discount code, you can save money on your favorite sports fashion and footwear at {brand}.</p>

                        <h6><strong>How to save with a discount code at {brand}</strong></h6>
                        <p>Using a discount code at {brand} is a simple and straightforward process. To use a discount code, follow these steps:</p>
                        <ol>
                            <li>Shop at {brand} and add the items you want to purchase to your shopping cart.</li>
                            <li>Once you have added all the items you want to buy to your cart, proceed to checkout.</li>
                            <li>At the checkout page, you will see a field labeled "Discount Code". This is where you will enter your discount code.</li>
                            <li>Enter your discount code into the field and click "Apply" or "Submit" to apply the code to your order.</li>
                            <li>If the code is valid and has not expired, the discount will be applied to your order and the new, discounted total will be displayed.</li>
                            <li>Review the order to make sure the discount has been applied and then complete the checkout process to place your order.</li>
                        </ol>
                        <p>By using a discount code, you can save money on your {brand} purchase and get the sports fashion and footwear you want at a great price.</p>

                        <h6 className='mt-5'><strong>Similar Brands</strong></h6>
                        <div className='d-flex flex-wrap'>
                            {[...Array(35)].map((e,i)=>{
                                return <div className='rounded bg-white m-2 cursor-pointer'>BRAND {i}</div>
                            })}
                        </div>
                    </div>

                    
                </div>
                
                

                <div className='col-lg-8 col-12'>
                    <div className='container d-flex bg-white small-rounded square-shadow p-3'>
                        <div className='border small-rounded px-5 py-4 me-3 d-lg-none d-flex justify-content-center align-items-center'>LOGO</div>
                        <div>
                            <h5><strong>{brand} Discount Codes & Vouchers {MONTHS[(new Date()).getMonth()]} {(new Date()).getFullYear()} </strong></h5>
                            <p className='mb-0'>{NUMBER_OF_DISCOUNTS} tested and verified {brand} Discount Codes & Vouchers</p>
                        </div>
                    </div>
                    {[...Array(11)].map((e,i) =>{
                            return <BaseCoupon/>
                        })}
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default SpecificBrandPage