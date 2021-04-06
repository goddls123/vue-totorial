
<script src="./join.script.js"></script>
<style scoped src="./join.css"></style>

<template>
    <div class="container">
        <div class="join">
            <div class="title" v-on:click="movePage('/')">Mi-flow</div>
                <div class="contents">
                    <div class="input-box" v-bind:class="{ on:user.id,error: idError }">
                        <div class="error-text" v-if="idError">{{idError}}</div>
                        <input type="text" name="id" placeholder="ID" v-model="user.id">
                    </div>
                    <div class="input-box" v-bind:class="{ on:user.name,error: nameError }">
                        <div class="error-text" v-if="nameError">{{nameError}}</div>
                        <input type="text" name="name" placeholder="Name" v-model="user.name">
                    </div>
                    <div class="input-box" v-bind:class="{on: user.password, error: passwordError}">
                        <div class="error-text" v-if="passwordError">{{passwordError}}</div>
                        <input type="password" name="password" placeholder="Password" v-model="user.password">
                    </div>
                    <div class="input-box" v-bind:class="{on : passwordConfirm}">
                        <div class="error-text" v-if="passwordConfirmError">{{passwordConfirmError}}</div>
                        <input type="password" name="password" placeholder="Password Confirm" v-model="passwordConfirm">
                    </div>
                    <div class="join-box" v-on:click="submit()">
                        OK
                    </div>
                </div>
        </div>
    </div>
</template>
