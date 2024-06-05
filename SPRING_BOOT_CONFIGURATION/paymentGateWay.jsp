<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Payment Page</title>
    <style>
        * {
            margin: 0px;
            padding: 0px
        }

        body, html {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

    </style>
</head>
<body>
<div class="container">
    <form onsubmit="return false;">
        <p style="font-size: 20px;margin: 20px">Amount : </p><input type="text" id="amount"
                                                                    style="margin:20px;width:100%;padding: 15px;font-size: 20px"
                                                                    placeholder="enter amount">
        <br>
        <button onclick="paymentStart()" style="padding: 10px;margin: 20px;width: 100%;cursor: pointer">Pay</button>
    </form>
</div>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script src="<%=request.getContextPath()%>/javascriptResource/paymentGateway.js"></script>

</script>
</body>
</html>