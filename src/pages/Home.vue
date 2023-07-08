<script setup>
    import Hero from './../components/one/Hero.vue'
</script>
<template>
    <div class="mx-auto max-w-xl text-center px-10 pt-5 pb-5">
        <Hero
            title="Blazed Publishing"
            description="Discover the physical and digial creations of Blazed Labs.">
            <router-link to="/catalog">
                <a class="cursor-pointer btn btn-primary block w-full rounded bg-blue-600 hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Catalog
                </a>
            </router-link>
            <router-link to="/contact">
                <a class="cursor-pointer btn btn-primary block w-full rounded hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Contact
                </a>
            </router-link>
        </Hero>
    </div>
</template>