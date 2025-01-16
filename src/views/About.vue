<template>
<section>
    <div class="text-overlay">
        <h1>About Novo</h1>
        <h5>Redefining Comfort, One Piece At A Time.</h5>
    </div>
    <div class="first-section">
        <div class="content">
            <h1>Who Are We?</h1>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
        </div>
        <div class="images"></div>
    </div>
    <div class="middle-section">
        <div class="container"></div>
    </div>
    <div class="last-section">
        <h2>The Minds Behind the Mission: Meet the Team That Brigns Novo to Life</h2>
    </div>
    <div class="newsletter">
        <div class="text">
            <h3>If you want more deals, subscribe to our newsletter</h3>
        </div>
        <input type="email" placeholder="example@gmail.com">
        <button key="enter">Subscribe Now</button>
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
    .first-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: white;
        /* margin: 80px 0 0 0 ; */
    }
    .first-section, .content{
        padding: 0 80px;
    }
    .first-section, .content h1{
        font-weight: 400;
        font-size: 40px;
        text-align: left;
        margin: 140px 0 40px 0;
    }
    .first-section, .content p{
        font-weight: 300;
        font-size: 28px;
        margin: 0 0 20px 0;
    }
    .container{
        height: 291px;
        background-color: #CBB26A;
        margin: 80px 160px 100px 160px;
    }
    .last-section h2{
        color: white;
        font-weight: 350;
        font-size: 28px;
        text-align: left;
        margin: 0 160px 50px ;
    }
    .newsletter{
        height: 211px;
        color: black;
        background-image: url('https://github.com/candice-dk3/novo/blob/frontend/src/assets/house2.jpg?raw=true');
        background-size:cover;
    }
    .text h3{
        background-color: #0c264e7e ;
        width: 30%;
        height: 40px;
        display: contents;
        justify-content: center;
    }
</style>