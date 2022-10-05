<template>
   <HeadNav />
   <AgregarStock />
   <InventarioMain />
   <IndexJumbotron />
   <FooterBar/>
</template>

<script>
import AgregarStock from '../components/AgregarStock.vue';
import IndexJumbotron from '../components/IndexJumbotron.vue';
import HeadNav from '@/body/HeadNav.vue';
import FooterBar from '@/body/Footer-Bar.vue';
export default {
    data() {
        return {
            HeadNav,
            AgregarStock,
            IndexJumbotron,
            FooterBar
        };
    },
    components: { AgregarStock, IndexJumbotron, HeadNav, FooterBar, }
}
</script>
