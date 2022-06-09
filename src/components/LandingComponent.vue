<template>
    <div class="container">
        <div class="row">
            <div class="col-12 m-4">
                <ul class="list-group w-100 text-center d-inline-block">
                    <li class="list-group-item d-inline-block mx-3">
                        <router-link to="/" >Home</router-link>
                    </li>
                    <li class="list-group-item d-inline-block mx-3">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="list-group-item d-inline-block mx-3">
                        <router-link to="/contact" >Contact</router-link>
                    </li>
                    <li class="list-group-item d-inline-block mx-3">
                        <router-link to="/gallary">Gallary</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>