<script setup>
    import { doc, getDoc } from "firebase/firestore" 
    import { firebase } from '../state/app'

    import { ref } from 'vue'

    import { useRoute } from 'vue-router'
    import router from './../util/router.js'

    const route = useRoute();

    const docRef = doc(firebase.db, "catalog", route.params.id);
    const docSnap = await getDoc(docRef);
    let item = {};

    if(docSnap.exists()){
        item = {
            uid: route.params.id,
            title: docSnap.data().title,
            description: docSnap.data().description,
            type: docSnap.data().type,
            download: docSnap.data().download
        };
    } else {
        router.push('/catalog');
    }
    const publication = ref(item);
</script>
<template>
    <div class="single-item">
        <h1 class="text-3xl">
            {{ publication.title }}
        </h1>
        <p>
            Type: 
            <span class="text-gray-500">
                {{ publication.type }}
            </span>
        </p>
        <p>
            {{ publication.description }}
        </p>
        <hr />
        <div class="action-buttons">
            <a v-bind:href="publication.download" class="btn btn-active btn-neutral text-white">
                Download
            </a>
        </div>
    </div>
</template>
<style scoped>
    .single-item{
        padding-top:10px;
        padding-bottom:10px;
    }
    .action-buttons{
        padding-top:20px;
    }
</style>