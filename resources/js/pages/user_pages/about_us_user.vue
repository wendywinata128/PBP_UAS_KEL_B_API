<template>
    <div class="about_us" :style="restokuStyle">
        <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            indicators
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
        >

            <b-carousel-slide
                img-src="/img/about_us_carousel/restaurant_photo.jpg"
                style="height:500px"
                alt="Restaurant Photo">
                <h1>HI THERE, <br/> WELCOME TO RESTOKU!</h1>
            </b-carousel-slide>

            <b-carousel-slide img-src="/img/about_us_carousel/cooking.jpg"
                style="height:500px"
                alt="Cooking">
                <h1>HI THERE, <br/> WELCOME TO RESTOKU!</h1>
            </b-carousel-slide>

            <b-carousel-slide img-src="/img/about_us_carousel/eat_together.jpg"
                style="height:500px"
                alt="Eat Together">
                <h1>HI THERE, <br/> WELCOME TO RESTOKU!</h1>
            </b-carousel-slide>
        </b-carousel>

        <div class="content">
            <!--Greetings-->
            <h4 style="width: 400px">{{ titleContent.greetings }}</h4>
            <v-img class="owner_photo" src="/img/logo/owner.jpg"></v-img>
            <p><strong>Hello! Thank you for coming to Restoku's website.</strong></p>
            <p>Since January 1, 2007, we have been dedicated to bringing an authentic dining experience to the people of Yogyakarta.  Dine-in or carry-out, we promise we serve you the best!
                Our menu is thoughtfully designed to bring customers a variety of the many tastes of Indonesian to Western foods.  From fried rice to salad dishes, we offer a wide range of choices for any taste.</p>
            <p>Our passion not only serve good and delicious food, but also concern to the 
                customer happiness & satisfaction, more than that we want the generation coming keep the old cooking tradition and enjoy the warmness of homecooked meals.</p>
            <v-btn class="white--text" color="#FAA84B">ORDER NOW</v-btn>

            <v-divider class="mt-15 mb-5"></v-divider>

            <!-- Delivery Service-->
            <div class="delivery" style="text-align: right;">
                <h4 style="display:inline;">{{ titleContent.delivery }}</h4>
                <br><br>
                <v-img class="delivery_photo" src="/img/menu/besek.jpg" width="350px"></v-img>
                <p class="mt-1">Thinking about delivery food? We provide a <strong>24 hours delivery service for Yogyakarta area only</strong>. So you can order anytime you want!
                    Simply click "Menu" on this website and add your order to cart. For payment methods, you can choose OVO, DANA, or LinkAja. We are also available at GoFood and GrabFood application, 
                    we are just one click away from you.</p>
                <p>By the way, for delivery and take away packaging we use bamboo box (in Indonesia we call it besek) to save the planet.</p>   
            </div>
            
            <v-divider class="mb-5" style="margin-top: 290px"></v-divider>
            
            <!--Contact Us-->  
            <div class="d-flex justify-space-around">
                <div>
                    <h4 style="width: 170px;">{{ titleContent.contact }}</h4> 
                    <v-img class="logo_restoku" src="/img/logo/logo_restoku.png"></v-img>
                    <v-img class="contact" src="/img/pin.png"></v-img>
                    <p>{{ contactUs.address }}</p>

                    <v-img class="contact" src="/img/social_media/whatsapp.png"></v-img>
                    <p>{{ contactUs.phone }}</p>

                    <v-img class="contact" src="/img/social_media/gmail.png"></v-img>
                    <p>{{ contactUs.mail }}</p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7173081970973!2d110.36583741440234!3d-7.8197174943652445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a33d12c8db%3A0x255fd3a34cf7cf10!2sJl.%20Parangtritis%20No.76%2C%20Mantrijeron%2C%20Kec.%20Mergangsan%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055143!5e0!3m2!1sen!2sid!4v1606204368725!5m2!1sen!2sid" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            
            
        </div>
    </div>  
</template>

<script>
export default {
    name: "aboutUs",
    data() {
        return {
            restokuStyle: {
                backgroundColor: "#FEE8CB",
            },

            titleContent: {
                greetings: "GREETINGS FROM OUR OWNER!",
                delivery: "DELIVERY SERVICE",
                contact: "CONTACT US"
            },

            contactUs: {
                address: "Jalan Parangtritis No. 76, Mantrijeron, Yogyakarta, 55143",
                phone: "0816 227 8890",
                mail: "restokujogja@gmail.com"
            }
        }
    },
    methods: {
    
    }
}
</script>

<style>
    @import url();
    h1 {
        font-size: 50px;
        font-weight: 550;
    }

    .content {
        margin: 20px 50px;
    }

    h4 {
        font-weight: 550;
        border-bottom: 4px solid #FAA84B; 
    }

    .owner_photo,
    .delivery_photo {
        border-radius: 10px;
        box-shadow: 6px 6px 20px 2px rgba(0, 0, 0, 0.25);
    }

    .owner_photo {
        margin: 10px 20px 20px 0px;
        float: left;
        width: 400px;
    }

    .delivery_photo {
        margin: 0px 0px 20px 20px;
        float: right;
        width: 210px;
    }

    .logo_restoku {
        margin: 30px 20px 30px 0px;
        width: 180px;
    }

    .contact {
        margin-right: 20px;
        float: left;
        width: 25px;
    }
</style>