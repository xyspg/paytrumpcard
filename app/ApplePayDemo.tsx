'use client'
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    ApplePaySession?: typeof ApplePaySession;
  }
  const ApplePaySession: any;
}

const ApplePayDemo = () => {
  const [isApplePayAvailable, setIsApplePayAvailable] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Check if Apple Pay is available
    if (window.ApplePaySession) {
      const canMakePayments = ApplePaySession.canMakePayments();
      setIsApplePayAvailable(canMakePayments);
      
      if (canMakePayments) {
        setStatus('Apple Pay is available!');
      } else {
        setStatus('Apple Pay is not set up on this device.');
      }
    } else {
      setStatus('Apple Pay is not supported on this browser.');
    }
  }, []);

  const handleApplePayClick = () => {
    if (!window.ApplePaySession) {
      setStatus('Apple Pay not supported');
      return;
    }

    const paymentRequest = {
      countryCode: 'US',
      currencyCode: 'USD',
      supportedNetworks: ['visa', 'masterCard', 'amex', 'discover','chinaUnionPay'],
      merchantCapabilities: ['supports3DS'],
      total: {
        label: 'Trump Gold Card',
        amount: '50000000',
        type: 'final'
      },

    };

    try {
      // Try to use the highest supported version
      let version = 3;
      if (ApplePaySession.supportsVersion && ApplePaySession.supportsVersion(6)) {
        version = 6;
      } else if (ApplePaySession.supportsVersion && ApplePaySession.supportsVersion(4)) {
        version = 4;
      }

      const session = new ApplePaySession(version, paymentRequest);

      session.onvalidatemerchant = (event: any) => {
        setStatus('Validating merchant...');
        event.completeMerchantValidation();        

      };

      session.onpaymentmethodselected = (event: any) => {
        setStatus('Payment method selected');
        console.log('Payment method:', event.paymentMethod);
        
        // Update totals if needed
        const update = {
          newTotal: paymentRequest.total,
        };
        session.completePaymentMethodSelection(update);
      };

      session.onpaymentauthorized = (event: any) => {
        setStatus('Payment authorized! Processing...');
        console.log('Payment token:', event.payment.token);
        
        // In production, send the payment token to your server for processing
        setTimeout(() => {
          session.completePayment(ApplePaySession.STATUS_SUCCESS);
          setStatus('Payment completed successfully!');
        }, 2000);
      };

      session.oncancel = (event: any) => {
        setStatus('Payment cancelled');
        console.log('Payment cancelled');
      };

      // Start the Apple Pay session
      session.begin();
      setStatus('Starting Apple Pay...');

    } catch (error) {
      console.error('Apple Pay error:', error);
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      {/* Apple Pay Button */}
      {isApplePayAvailable ? (
        <button
          onClick={handleApplePayClick}
          className="apple-pay-button"
        />
      ) : (
        <button
          onClick={handleApplePayClick}
          style={{
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            marginBottom: '20px'
          }}
        >
          Your device does not support Apple Pay.
        </button>
      )}
    </div>
  );
};

export default ApplePayDemo;