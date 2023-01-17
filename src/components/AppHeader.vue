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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-4">
                <!-- Logo -->
                <a class="navbar-brand boolflix_color" href="#">BOOLFLIX</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Menu items -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">
                                Film
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">La mia lista</a>
                        </li>
                    </ul>
                    <!-- Search bar -->
                    <div class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            v-model="store.search" @keyup.enter="$emit('search')">
                        <button class="btn btn-outline-success" type="submit" @click="$emit('search')">Search</button>
                    </div>

                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss">
header {

    nav {
        background-color: rgb(27, 27, 27);

        .boolflix_color {
            color: rgb(228, 19, 26);

            &:hover {
                color: rgb(181, 16, 21);
            }
        }
    }
}
</style>