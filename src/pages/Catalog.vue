<script setup>
    import { collection, getDocs } from "firebase/firestore" 
    import { firebase } from '../state/app'

    import Card from './../components/one/Card.vue'

    import { ref } from 'vue'

    const querySnapshot = await getDocs(collection(firebase.db, "catalog"));
    let buildCatalog = [];
    querySnapshot.forEach((doc) => {
        buildCatalog.push({
            uid: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            type: doc.data().type
        })
    });
    const catalog = ref(buildCatalog)

</script>
<template>
    <h1 class="text-3xl select-none py-3">
        Browse Publications
    </h1>
    <div class="catalog-grid grid grid-cols-3 justify-center">
        <div class="inline-flex" v-for="(item, index) in catalog" :key="index">
            <Card
                v-bind:title="item.title"
                v-bind:description="item.description"
                v-bind:viewLink="`/view/${item.uid}`"
                v-bind:type="item.type"
            />
        </div>
    </div>
</template>
<style scoped>
    .catalog-grid{
        padding-top:20px;
        padding-bottom:20px;
    }
    @media screen and (max-width:1000px) {
        .catalog-grid{
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media screen and (max-width:760px) {
        .catalog-grid{
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>