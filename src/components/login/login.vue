
<script src="./login.script.js"></script>
<style scoped src="./login.css"></style>

<template>
    <div class="container">
        <div class="login">
            <div class="title" @click="$router.push('/')" >Mi-flow</div>
            <div class="contents">
                <div class="input-box" v-bind:class="{on : user.id}">
                    <div class="error-text" v-if="idError">{{idError}}</div>
                    <i class="icon-login-mail" v-bind:class="{on : user.id}"></i>
                    <input type="text" name="id" placeholder="ID" v-model="user.id">
                </div>
                <div class="input-box" v-bind:class="{on : user.password}">
                    <div class="error-text" v-if="passwordError">{{passwordError}}</div>
                    <i class="icon-login-password "  v-bind:class="{on : user.password}"></i>
                    <input type="password" name="password" placeholder="Password" v-model="user.password">
                </div>
                <div class="option-box">
                    <div class="front">
                        <div class="login-status">
                            <input type="checkbox" name="login_status" id="">
                            <div class="text">로그인 상태 유지</div>
                        </div>
                        <div class="email-remember">
                            <input type="checkbox" name="email_remember">
                            <div class="text">이메일 아이디 기억</div>
                        </div>
                    </div>
                    <div class="end">
                        <div class="password-recover">비밀번호 찾기</div>
                    </div>
                </div>
                <div class="login-box" v-on:click="submit()">
                    Login
                </div>
            </div>
        </div>
    </div>
</template>


