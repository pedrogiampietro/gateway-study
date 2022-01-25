import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm';

const PUBLIC_KEY = 'pk_test_123981290381290jkasd';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
