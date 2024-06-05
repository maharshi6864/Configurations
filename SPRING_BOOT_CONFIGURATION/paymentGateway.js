// First Function to Create Order Id.

function paymentStart() {
    let paymentAmount = document.getElementById("amount").value;
    console.log(paymentAmount);
    let htp = new XMLHttpRequest();
    htp.onreadystatechange = function () {
        if (htp.readyState == 4) {
            let response = JSON.parse(htp.responseText);
            // After getting the JSON we can check the status of the order to
			// open payment form
// we have to create an option variable to place the values we get from this
// JSON Object to the integration we get from the
// Razorpay site
            let option={
            		key:'rzp_test_lSxFEtSAXFYF8P',
            		amount:response.amount,
            		currency:'INR',
            		name:'Example Payment Gateway',
            		description:'This is an example of payment gateway.',
            		image:'https://razorpay.com/docs/build/browser/static/razorpay-docs-dark.6f09b030.svg',
// Keeping RazorPay Logo as Image Example
            		order_id:response.id,
            		handler:function(response)
            		{
            			console.log(response.razorpay_payment_id)
            			console.log(response.razorpay_order_id)
            			console.log(response.razorpay_signature)
            			console.log("payment Successful");
            			alert("Done");
            		},
            		"prefill": {
            	        "name": "Eaxmple",
            	        "email": "Eaxmple@example.com",
            	        "contact": "9000090000"
            	    },
            	    "notes": {
            	        "address": "Example.Ahmedabad"
            	    },
            	    "theme": {
            	        "color": "#3399cc"
            	    }
            			
            };
            let rzp= new Razorpay(option);
            rzp.on('payment.failed', function (response){
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
        });
            rzp.open();
            console.log(response);
        }
    };
    htp.open("GET",`http://localhost:8089/user/createOrder/${paymentAmount}`, true);
    htp.send();
}