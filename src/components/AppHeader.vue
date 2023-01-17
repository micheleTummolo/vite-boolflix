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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <!-- Search bar -->
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            v-model="store.search">
                    </form>
                    <button class="btn btn-outline-success" type="submit" @click="$emit('search')">Search</button>
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
        }
    }
}
</style>