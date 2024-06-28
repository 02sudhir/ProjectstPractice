const handlePaymentSuccess = (orderId) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5174';
    const redirectUrl = `${baseUrl}/verify?success=true&orderId=${orderId}`;
    window.location.href = redirectUrl;
  };
  

  const processPayment = async () => {
   
    const orderId = '667ebcdbf4aa6f0985924601'; 
    handlePaymentSuccess(orderId);
  };
  