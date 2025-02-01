import React, { useState } from "react";
import axios from "axios";
import useRazorpay from "react-razorpay";
import crypto from "crypto-js"


export const LohagadBooking = () => {
    const [trekDetails, setTrekDetails] = useState({
        name:"Lohagad",
        date:"10/06/2024",
        price:499
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [pincode, setPincode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    const [Razorpay] = useRazorpay();
    const initPay = (data) => {
        const options = {
          key : "rzp_test_axvMsqlpqBjktG",
          amount: data.amount,
          currency: data.currency,
          name: "Outdoor Experience",
          description: "Test",
          order_id: data.id,
          handler: async (response) => {
            const mailData = {
              email: email,
              trek: trekDetails.name,
              firstName: firstName,
              paymentID: response.paymentID
            }
            const fet = await fetch('http://localhost:8080/api/email/send', {
              method: 'POST',
              body: JSON.stringify(mailData),
              headers: {
                  'Content-Type': 'application/json'
              }
            })
              const json = await fet.json()
      
              if (!fet.ok) {
              setError(json.error)
              }
              if (fet.ok) {
              setError(null)
              setFirstName('')
              setLastName('')
              setAddress('')
              setAge('')
              setPincode('')
              setEmail('')
              setPhone('')

            }
            // console.log("SEEEEEM")
            // try {
            //   const verifyURL = "http://localhost:8080/api/payment/verify";
            //   const {data} = await axios.post(verifyURL,response);
            //   console.log(data)
            // } catch(error) {
            //   console.log(error);
            // }
            // console.log('succeeded');
            // console.log(response);
            // paymentId.current = response.razorpay_payment_id;

            // Most important step to capture and authorize the payment. This can be done of Backend server.
            // const succeeded = crypto.HmacSHA256(`${data.id}|${response.razorpay_payment_id}`, "rzp_test_axvMsqlpqBjktG").toString() === response.razorpay_signature;
            
            // If successfully authorized. Then we can consider the payment as successful.
            // if (succeeded) {
            //   console.log("BHEEEM")
              // handlePayment('succeeded', {
              //   orderId,
              //   paymentId,
              //   signature: response.razorpay_signature,
              // });
            // } else {
              // handlePayment('failed', {
              //   orderId,
              //   paymentId: response.razorpay_payment_id,
            //   });
            // }
          },
          theme: {
            color: "#000000",
          },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
      };

    const handlePay = async () => {
        try {
          const orderURL = "http://localhost:8080/api/payment/orders";
          const {data} = await axios.post(orderURL,{amount: trekDetails.price});
          console.log(data);
          initPay(data.data);
        } catch (error) {
          console.log(error);
        }
    };

    return <div className="ml-[65px] mt-12 font-Quicksand">
        <form action="">
            <div className="mb-4 font-LeagueSpartan text-[25px] font-medium text-zinc-800">Would love to know you better!</div>
            <div className="flex justify-between w-10/12">
                <div className="">
                    <div className="text-zinc-400 text-[15px]">First Name</div>
                    <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-[240px]" type="text" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
                </div>
                <div className="">
                    <div className="text-zinc-400 text-[15px]">Last Name</div>
                    <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-[240px]" type="text" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-zinc-400 text-[15px]">Address</div>
                <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-10/12" type="text" onChange={(e)=>{setAddress(e.target.value)}} value={address}/>
            </div>
            
            <div className="flex justify-between w-10/12 mt-4">
                <div className="">
                    <div className="text-zinc-400 text-[15px]">Pincode</div>
                    <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-[240px]" type="number" onChange={(e)=>{setPincode(e.target.value)}} value={pincode}/>
                </div>
                <div className="">
                    <div className="text-zinc-400 text-[15px]">Age</div>
                    <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-[240px]" type="number" onChange={(e)=>{setAge(e.target.value)}} value={age}/>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-zinc-400 text-[15px]">Email</div>
                <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-10/12" type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            </div>
            <div className="mt-4">
                <div className="text-zinc-400 text-[15px]">Phone Number</div>
                <input className="border-2 rounded-[4px] text-[15px] font-medium py-1 px-2 border-zinc-300 w-10/12" type="number" onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
            </div>
            <div className="uppercase mt-10 w-10/12 py-2 cursor-pointer hover:text-red-500 text-center bg-black text-white" onClick={handlePay}>
                    pay
                </div>
            
        </form>
    </div>
}