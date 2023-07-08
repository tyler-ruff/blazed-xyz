<script setup>
    import { config } from '../config/config';
    function menuDrawerToggle(){
        const menuDrawerCheckbox = document.querySelector("#mobile-menu-drawer");
        if(menuDrawerCheckbox.checked === true){
            menuDrawerCheckbox.checked = false;
        } else {
            menuDrawerCheckbox.checked = true;
        }
    }
</script>
<template>
    <header>
        <nav class="nav-top navbar shadow-lg">
            <div class="flex-1">
                <a v-bind:title="config.title" href="/" class="btn btn-ghost group normal-case text-xl">
                    <img class="group-hover:opacity-75" v-bind:src="config.logo" />
                </a>
            </div>
            <div class="hidden md:flex navbar-end">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="(item, index) in config.menu" :key="index">
                        <a v-bind:href="item.url" v-bind="">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div> 
            <div class="flex md:hidden navbar-end drawer-content">
                <label for="mobile-menu-drawer" class="btn btn-circle btn-outline drawer-button">
                    <svg id="burger-menu" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="currentColor" class="inline-flex w-5 h-5">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </label>
            </div>
        </nav>
        <nav class="nav-drawer block md:hidden drawer">
            <input id="mobile-menu-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <label for="mobile-menu-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li>
                        <a v-on:click="menuDrawerToggle" class="cursor-pointer text-gray-800 group">
                            <i class="inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="group-focus:text-white" fill="conentColor" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </i>
                            Close Menu
                        </a>
                    </li>
                    <li class="btn-disabled pt-5 bg-transparent">
                        <hr />
                    </li>
                    <li v-for="(item, index) in config.menu" :key="index">
                    <a v-bind:href="item.url">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.navbar{
    background: #757F9A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #D7DDE8, #8b96b5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #D7DDE8, #8b96b5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-top: 1px solid rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(0,0,0,0.4);
}
.navbar a:hover{
    color: rgba(0,0,0,0.6);
}
.navbar a:active{
    color: rgba(255,255,255,0.5);
}
.dropdown-content, .drawer{
    z-index:99999;
}
</style>