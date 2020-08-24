//=======================================================================================================================
//                                                   Specific Formats For Form Inputs
//=======================================================================================================================


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno =  /^(?:07[0-9]{8})$/;
var creditcardno = /^(?:[1-9]{1}[0-9]{15})$/;
var postcode = /^\d{4}$/;;
var cvvformat=/^\d{3}$/;


//=======================================================================================================================
//                                                   Getting Acces to Form Elements
//=======================================================================================================================

//Text Fields
const order=document.querySelector('#order');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const contact=document.querySelector('#contact');
const deliveryaddress=document.querySelector('#deladdress');
const deliverysuburb=document.querySelector('#delsuburb');
const deliverypostcode=document.querySelector('#delpostcode');
const billingaddress=document.querySelector('#biladdress');
const billingsuburd=document.querySelector('#bilsuburb');
const billingpostcode=document.querySelector('#bilpostcode');
const fullname=document.querySelector('#fullname');
const creditcard=document.querySelector('#creditcard');
const cvv=document.querySelector('#cvv');

//Select Fields
const month=document.querySelector('#month');
const year=document.querySelector('#year');

//Radio Buttons
const yes=document.querySelector('#yes');
const no=document.querySelector('#no');
const pickup=document.querySelector('#pickup');
const delivery=document.querySelector('#delivery');
const onpickup=document.querySelector('#paypickup');
const online=document.querySelector('#payonline');

//Sections
const paymentinfo=document.querySelector('.paymentinfo');
const deliveryinfo=document.querySelector('.deliveryaddress');
const choice=document.querySelector('#yesno');


//Submit Button
const submit=document.querySelector("#submit");


//=======================================================================================================================
//                                                          Form Validation
//=======================================================================================================================


    //Alert Message to Print
    let alertmessage="";

    //Function to Get Form Validity and Output Alert
    function validate()
    { 
        methodvalidate();
        personalvalidate();
        billingvalidate();
        paymentvalidate();
        if(alertmessage=="")
        {
            alertmessage="You Have Successfully Completed Ordering Process";
            alert(alertmessage);
        }
        else
        {
            alert(alertmessage);
        }
    }


    //Function to Get Delivery Address Section Validated
    function methodvalidate()
    {
        if(!pickup.checked && !delivery.checked )
        {
            alertmessage="Please select a Method 'delivery' or 'pickup'";
        }
        if(delivery.checked)
        {
            deliveryvalidate();
        }
        if(order.value.trim()=="")
        {
            alertmessage+="\nPlease Enter your Order";
        }
    }


    //Function to Get Personal Details Section Validated
    function personalvalidate()
    {
        if(name.value.trim()=="")
        {
            alertmessage+="\nPlease Enter your name";
        }
        if(email.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Email Address Field";
        }
        else if(!email.value.match(mailformat))
        {
            alertmessage+="\nPlease Enter valid Email Address according to the example format";
        }
        if(contact.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Contact Number Field";
        }
        else if(!contact.value.match(phoneno))
        {
            alertmessage+="\nPlease Enter valid Contact Number according to the example format";
        }
    }


    //Function to Get Billing Address Section Validated
    function billingvalidate()
    {
        if(delivery.checked)
        {
            if(!yes.checked && !no.checked)
            {
                alertmessage+="\nPlease select the Answer Method ";
            }
        }
        if(billingaddress.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Address field under Billing Information"
        }
        if(billingsuburd.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Suburb field under Billing Information"
        }
        if(billingpostcode.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Postcode field under Billing Information"
        }
        else if(!billingpostcode.value.match(postcode) )
        {
            alertmessage+="\nPlease Enter valid postcode under Billing Information according to the example format";
        }
    }


    //Function to Get Delivery Address Section Validated
    function deliveryvalidate()
    {
        if(deliveryaddress.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Address field under Delivery Information"
        }
        if(deliverysuburb.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Suburb field under Delivery Information"
        }
        if(deliverypostcode.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Postcode field under Delivery Information"
        }
        else if(!deliverypostcode.value.match(postcode) )
        {
            alertmessage+="\nPlease Enter valid postcode under Delivery Information according to the example format";
        }
    }


    //Function to Get Payment Method Section Validated
    function paymentvalidate()
    {
        if(!onpickup.checked && !online.checked)
        {
            alertmessage+="\nPlease select the Payment Method ";
        }
        if(online.checked)
        {
            onlinevalidate();
        }
    }

    //Function to Get Payment Details Section Validated
    function onlinevalidate()
    {
        if(fullname.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Full Name Field under Payment Information";
        }
        if(creditcard.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the Credit Card Field under Payment Information";
        }
        else if(!creditcard.value.match(creditcardno))
        {
            alertmessage+="\nPlease Enter a Valid Credit Card Number according to the example format";
        }
        if(month.value=="selectone")
        {
            alertmessage+="\nPlease Select the Expiry Month";
        }
        if(year.value=="selectone")
        {
            alertmessage+="\nPlease Select the Expiry Year";
        }
        if(cvv.value.trim()=="")
        {
            alertmessage+="\nPlease Fill the CVV Field under Payment Information";
        }
        else if(!cvv.value.match(cvvformat))
        {
            alertmessage+="\nPlease Enter A Valid CVV Number according to the example format"
        }
    }

//=======================================================================================================================
//                                                          EventListeners
//=======================================================================================================================


    //Submit Button
    submit.addEventListener('click',()=>{
        validate();
    })
    //Delivery Radio Button
    delivery.addEventListener('click',()=>{
        deliveryinfo.style.visibility='visible';
        choice.style.display='inline';
    })

    //Pickup Radio Button
    pickup.addEventListener('click',()=>{
        deliveryinfo.style.visibility='hidden';
        pickup.checked='true'
        choice.style.display='none';
    })


    //Pay On Pickup Radio Button
    onpickup.addEventListener('click',()=>{
        paymentinfo.style.display='none';
    })


    //Pay Online Radio Button
    online.addEventListener('click',()=>{
        paymentinfo.style.display='inline';
    })


    //Yes Radio Button
    yes.addEventListener('click',()=>{
        billingaddress.value=deliveryaddress.value;
        billingpostcode.value=deliverypostcode.value;
        billingsuburd.value=deliverysuburb.value;
    })


    //No Radio Button
    no.addEventListener('click',()=>{
        billingaddress.value='';
        billingpostcode.value='';
        billingsuburd.value='';
    })