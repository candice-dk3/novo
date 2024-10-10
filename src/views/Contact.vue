<template>
<section class="inner-sec">
   <div class="text-overlay-sec"></div> 
   <div class="contact-header">
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
        </div>
    </div>
   </div>
   <div class="contact-form-sec"></div>
   <div class="comming-soon-items"></div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact-header{
        background-color: #0C264E;
        padding: 4rem;
        color: white;
    }
    .contact-inner{
        display: grid;
        grid-template-columns: repeat(4,1fr);
    }
    h1{
        font-size: 2rem;
        margin-bottom: 1rem;
        /* text-align: left; */
    }
    h3{
        font-weight: 500;
        /* text-align: left; */
        margin-bottom: 1rem;
    }

    .contact-form-sec{
        margin-top: 20rem;
    }
</style>