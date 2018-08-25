<template>
    <div>
        <span class="city">{{ item.city }},</span>
        <span>{{ item.country }} ({{ item.textcode }})</span>
    </div>
</template>

<script>
    export default {
        props: {
            item: { required: true },
            searchText: { required: true }
        }
    }
</script>
