<template>
    <div>
        <router-view />
    </div>
</template>
<script>
const default_layout = "default";

export default {
    computed: {},
    data() {
        return {
            message: "Hello World"
        };
    }
};
</script>
