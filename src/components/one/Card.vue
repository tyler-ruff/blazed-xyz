<script setup>
    defineProps(['title', 'type', 'description', 'viewLink'])
    function getTypeColor(type){
        let typeColor = '';
        switch(type){
            case "book":
                typeColor = 'primary';
                break;
            case "website":
                typeColor = 'secondary';
                break;
            case "software":
                typeColor = 'accent';
                break;
            default:
                typeColor = 'neutral';
                break;
        }
        return `badge badge-${typeColor}`;
    }
</script>
<template>
    <a v-bind:href="viewLink" class="blz-card inline-flex px-5">
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title justify-center">
                    {{ title }}
                </h2>
                <div class="py-5 justify-center">
                    <div v-bind:class="getTypeColor(type)">
                        {{ type }}
                    </div>
                </div>
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
    </a>
</template>
<style scoped>
    .blz-card{
        padding-bottom:10px;
    }
    .badge-primary{
        background:#4c00cf;
        color:#fff;
    }
    .badge-secondary{
        background:#0079cf;
        color:#fff;
    }
    .badge-accent{
        background:#cf0000;
        color:#fff;
    }
</style>