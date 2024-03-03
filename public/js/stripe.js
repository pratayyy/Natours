/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51OqDBmSDjksXbbIGy3mN6QoNWCi2d3raqXJ0Jyu3hA1jAnX6pWy5gwjlo4vKYPy7bb7HhTr6xMEXsbk2l3yU9D6J00cHhPsb99',
  );

  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    // 2) Route to checkout from + charge card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err.message);
  }
};
