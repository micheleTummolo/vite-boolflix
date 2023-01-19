<script>
import { store } from '../store';
export default {
    components: {

    },

    data() {
        return {
            store
        }
    },

}
</script>
<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-lg p-2">
            <div class="container-fluid px-4">
                <!-- Logo -->
                <a class="navbar-brand boolflix_color boolflix_size" href="#">BOOLFLIX</a>
                <!-- Menu items -->
                <div class="" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                        <li class="nav-item me-3">
                            <a class="active text-secondary" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="" href="#">
                                Film
                            </a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="" href="#">Originali</a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item me-3">
                            <a class="" href="#">La mia lista</a>
                        </li>
                    </ul>
                </div>
                <!-- Search bar -->
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        v-model="store.search" @keyup.enter="$emit('search')">
                    <button class="btn btn-outline-success" type="submit" @click="$emit('search')"><i
                            class="fa-solid fa-magnifying-glass search_icon"></i></button>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss">
header {

    nav {
        background-color: rgb(27, 27, 27);

        ul {
            flex-direction: row;

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    color: red;
                }
            }
        }

        .boolflix_color {
            color: rgb(228, 19, 26);
        }

        .boolflix_size {
            font-size: 1.5rem;
        }

        button:hover .search_icon {
            color: white;
        }

        .search_icon {
            color: rgb(25, 135, 84);
        }
    }
}
</style>