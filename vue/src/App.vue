<template>
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: vue</div>
        <div>Framework: vue3</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
        <VueCard username="Mg Mg"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VueCard from './VueCard.vue'

export default defineComponent({
    components: {
        VueCard
    }
});
</script>
