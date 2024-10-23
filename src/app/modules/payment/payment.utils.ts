/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import dotenv from 'dotenv';
import config from '../../config';
dotenv.config();

export const initiatePayment = async (paymentData: any) => {
  try {
    const response = await axios.post(config.ammarpay_payment_url!, {
      store_id: config.ammarpay_store_id,
      tran_id: paymentData.transactionId,
      success_url: 'http://www.merchantdomain.com/suc esspage.html',
      fail_url: 'http://www.merchantdomain.com/faile dpage.html',
      cancel_url: 'http://www.merchantdomain.com/can cellpage.html',
      amount: paymentData.totalPrice,
      currency: 'BDT',
      signature_key: config.ammarpay_signature_keys,
      desc: 'Merchant Registration Payment',
      cus_name: paymentData.custormerName,
      cus_email: paymentData.customerEmail,
      cus_add1: paymentData.customerAddress,
      cus_add2: 'N/A',
      cus_city: 'N/A',
      cus_state: 'N/A',
      cus_postcode: '1206',
      cus_country: 'Bangladesh',
      cus_phone: paymentData.customerPhone,
      type: 'json',
    });

    // console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Payment initiation failed!');
  }
};

export const verifyPayment = async (tnxId: string) => {
  try {
    const response = await axios.get(config.ammarpay_verify_payment_url!, {
      params: {
        store_id: config.ammarpay_store_id,
        signature_key: config.ammarpay_signature_keys,
        type: 'json',
        request_id: tnxId,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error('Payment validation failed!');
  }
};
