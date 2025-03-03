<template>
    <section>
        <div class="newsletter">
            <div class="text">
                <h3>If you want more deals, subscribe to our newsletter</h3>
            </div>
            <input type="email" name="email" placeholder="example@gmail.com">
            <button type="submit">Subscribe Now</button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Newsletter',
}
</script>
<style>
    .newsletter{
        height: 230px;
        color: black;
        background-image: url('https://github.com/candice-dk3/novo/blob/frontend/src/assets/newsletter.png?raw=true');
        background-size:cover;
        /* display: flex; */
        justify-items: center;
    }
    .text h3{
        background-color: #ffffff53 ;
        width: 550px;
        height: 28px;
        display: inline-block;
        justify-content: center;
        justify-items: center;
        margin: 40px 0 40px 0;
    }
      .newsletter input{
        background-color: #CBB26A;
        border: none;
        height: 50px;
        width: 300px;
        color: white;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        font-family: "Kalnia", serif;
    }
    ::-webkit-input-placeholder {
    color: white;
    text-indent: 1rem;
    font-family: "Kalnia", serif;
    }
    input:focus {
        color: white;
        text-indent: 1rem;
        font-family: "Kalnia", serif;
    }
    .newsletter button{
        background-color: #0c264e;
        border: none;
        height: 50px;
        width: 180px;
        color: white;
        font-family: "Kalnia", serif;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
    .newsletter button:hover{
        background-color: #0c264e;
        transition: 0.1s;
        color: #CBB26A;
        font-weight: 600;

    }
</style>