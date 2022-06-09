<template>
    <div class="container">
        <div class="row">
            <Header />
        </div>
        <div class="row">
            <div class="col-4">
                <ul class="list-group w-100 text-center">
                    <li class="list-group-item active">
                        <a href="#" @click.prevent="targetComponent= 'Content'" class="text-light">Home</a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" @click.prevent="targetComponent= 'Contact'" >Contact</a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" @click.prevent="targetComponent= 'About'" >About</a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" @click.prevent="targetComponent= 'Gallary'" >Gallary</a>
                    </li>
                </ul>
            </div>

            <div class="col-8">
                <component :is="targetComponent"></component>
            </div>
        </div>
        <div class="row">
            <Footer />
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Contact from './components/Contact.vue'
    import About from './components/About.vue'
    import Gallary from './components/Gallary.vue'
    import Content from './components/Content.vue'
    import Footer from './components/Footer.vue'
    export default {
        data(){
            return {
                targetComponent: 'Content'
            }
        },
        components: {
            Header,
            Content,
            Footer,
            Contact,
            About,
            Gallary
        }
    }
</script>
