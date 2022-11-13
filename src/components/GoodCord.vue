<template>
    <div class="good">
        <a-image width="200" :preview="false" height="200" :src="src" />
        <h3 class="title">{{ title }}</h3>
        <div>￥{{ money }}</div>
    </div>
</template>
<script>

export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: '标题'
        },
        money: {
            type: Number,
            default: 0
        }
    },
    setup() {

    },
}
</script>
<style lang="scss" scoped>
.good{
    text-align: left;
    margin-bottom: 46px;
}
.title {
    margin: 30px 0  23px 0;
    font-size: 14px;
}
</style>