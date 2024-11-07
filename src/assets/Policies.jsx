import React from 'react';
import { useParams } from 'react-router-dom';

const Policies = () => {
    const {name} = useParams()
 
  return (
    <div className="px-6 py-[5.7rem] bg-gray-50 text-gray-800">
      
      {name === "terms" && <section className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Terms and Conditions</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>Welcome to ISKCON Yanam Stores. By using our website and purchasing our products, you agree to comply with these terms and conditions. We reserve the right to modify these terms at any time.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Product Information</h2>
            <p>We sell ISKCON-related books and materials. All descriptions, images, and specifications are accurate to the best of our ability but may vary slightly.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Payment</h2>
            <p>We accept payments through Razorpay. By providing payment information, you confirm that you are authorized to use the payment method. Payment must be made in full at the time of purchase.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Shipping and Delivery</h2>
            <p>Once your order is placed, we will process it within 3-5 business days. Delivery times may vary based on your location.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
            <p>ISKCON Yanam Stores is not liable for any damages resulting from the use or inability to use our products or website. This includes direct, indirect, incidental, and consequential damages.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes will be resolved in accordance with Indian law.</p>
          </div>
        </div>
      </section>}

      {name === "privacy" && <section className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Information Collection</h2>
            <p>We collect personal information such as your name, email, address, and payment details only when you place an order. This information is used solely for order processing and delivery.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Data Usage</h2>
            <p>We use your personal information to fulfill your orders and improve our services. We may also use your email to send order updates or promotional offers, but you can opt out at any time.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Data Security</h2>
            <p>We implement secure practices to protect your data. However, no method of transmission over the internet is entirely secure, so we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Sharing Information</h2>
            <p>We do not share your personal information with third parties, except as necessary to complete your order or if required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Changes to Privacy Policy</h2>
            <p>We may update this policy as necessary. Any changes will be posted on this page.</p>
          </div>
        </div>
      </section>}

     {name === "refund" && <section>
        <h1 className="text-3xl font-bold text-center mb-4">Refund and Cancellation Policy</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Order Cancellations</h2>
            <p>You may cancel your order before it is shipped. To do so, please contact us at <a href='mailto:iskconyanamstores@gmail.com' className='text-blue-600'>iskconyanamstores@gmail.com</a>. Once an order is shipped, it cannot be canceled.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Refunds</h2>
            <p>We only offer refunds for products that are damaged or defective upon delivery. If you receive a damaged item, please contact us within 7 days with proof of damage, and we will arrange for a replacement or refund.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Return Process</h2>
            <p>To request a return or refund, contact us with your order details and proof of purchase. If eligible, refunds will be processed within 7-10 business days.</p>
          </div>
        </div>
      </section>}

    </div>
  );
};

export default Policies;