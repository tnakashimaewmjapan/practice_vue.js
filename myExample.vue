<!-- HTML部分 -->
<!-- コンポーネントの template: オプションを抜き出したもの -->
<template>
    <div class="examplme">
        <span class="title">{{ myText }}</span>
    </div>
</template>

<!-- JavaScript(Vue.js)部分 -->
<!-- コンポーネントの template: 以外を抜き出したもの -->
<script>
    export default {
        name: 'Example',
        data() {
            return {
                myText: 'This is SFC example'
            }
        }
    }
</script>

<!-- CSS部分 -->
<!-- scoped をつけることでこのテンプレート内でしか適用されず、衝突を気にする必要がなくなる -->
<style scoped>
    span.title {
        color: #ff7800;
    }
</style>


