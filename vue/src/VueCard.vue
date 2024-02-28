<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps<{
    username: string
}>()

</script>

<template>
    Hey Vue, I'm {{ username }}
</template>
