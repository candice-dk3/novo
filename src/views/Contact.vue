<template>
<section class="inner-sec">
    <div class="text-overlay">
        <h1>Contact Us</h1>
        <h5>Want to find out more about us?</h5>
    </div>
   <div class="contact-form-sec">
    <h1>Let's get in touch</h1>
    <form action="https://formspree.io/f/mdkabbpa" method="POST">
        <div class="first-few">
            <label>
                <input type="name" name="name" placeholder="First Name">
            </label>
            <label>
                <input type="name" name="name" placeholder="Last Name">
            </label>
            <label>
                <input type="phone-number" name="number" placeholder="Number">
            </label>
            <label>
                <input type="email" name="email" placeholder="Email">
            </label>
        </div>
        <div class="message">
            <label>
                <textarea name="message" placeholder="Message"></textarea>
            </label>
        </div>
        <div class="buttons">
            <button type="submit">Send Message</button>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/>
            <button type="reset">Clear Message</button>
        </div>
    </form>
   </div>
   <!-- <div class="comming-soon-items"></div> -->
   <div class="contact-footer">
       <div class="contact-inner">
           <div class="address">
               <h1>Physical Address</h1>
               <h3>05 Rosewood Street</h3>
               <h3>Cape Town, Western Cape</h3>
               <h3>South Africa</h3>
           </div>
           <div class="email">
               <h1>Email Address</h1>
               <h3>novo@gmail.com</h3>
           </div>
           <div class="numbers">
               <h1>Phone Numbers</h1>
               <h3>+27 12 345 6789</h3>
               <h3>+27 23 456 7891</h3>
           </div>
           <div class="hours">
               <h1>Open Hours</h1>
               <h3>Monday: 9am - 6pm</h3>
               <h3>Tuesday - Thursday: 9am - 5pm</h3>
               <h3>Friday: 9am - 1pm</h3>
           </div>
       </div>
   </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .text-overlay{
        height: 600px;
        width: 100%;
        background-color: #0c264e7e;
    }
    .text-overlay h1{
        color: #CBB26A;
        font-weight: 500;
        font-size: 120px;
        text-align: center;
        position: relative;
        top: 30%;
    }
    .text-overlay h5{
        color: white;
        font-weight: 400;
        font-size: 22px;
        position: relative;
        top: 30%;
    }
    .contact-footer{
        background-color: #0c264e60;
        padding: 4rem;
        color: white;
    }
    .contact-inner{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        justify-items: center;
    }
    h1{
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 14px;
        text-align: left;
    }
    h3{
        font-weight: 300;
        font-size: 20px;
        text-align: left;
        margin: 0 0 14px 0px;
    }
    .contact-form-sec h1{
        /* margin-top: 20rem; */
        color: #fff;
        font-weight: 400;
        font-size: 55px;
        text-align: center;
        margin: 100px 0 20px 0;
    }
    form{
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        justify-items: center;
        margin-top: 80px;
    }
    .first-few{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 60%;
    }
    .first-few label input{
        font-size: 24px;
        margin: 0 0 60px 0;
        background-color: transparent;
        border: none;
        border-bottom: #fff 4px solid;
        width: 382.89px;
        outline: none;
        color: #fff;
    }
    /* .message {
        height: 20px !important;
    } */
    label textarea{
        font-size: 24px;
        margin: 0 0 60px 0;
        background-color: transparent;
        border: none;
        border-bottom: #fff 4px solid;
        width: 947.97px;
        outline: none;
        color: #fff;
    }
    .buttons{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 60%;
        justify-items: center;
    }
    button{
        background-color: transparent;
        color: #fff;
        border: none;
        font-family: 'Kalnia';
        font-size: 20px;
        font-weight: 400;
        text-align: left;
    }
</style>