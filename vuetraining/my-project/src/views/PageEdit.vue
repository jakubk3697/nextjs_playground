
<template>
    <div>
        <form action="" class="container mb-3">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input type="text" class="form-control" v-model="page.title">
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea type="text" class="form-control" rows="5" v-model="page.content"></textarea>
                    </div>

                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link text
                        </label>
                        <input type="text" class="form-control" v-model="page.link.text">
                    </div>

                    <div class="row mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="page.published">
                            <label class="form-check-label" for="gridCheck1">Published</label>
                        </div>
                    </div>

                    <div class="mb-3">
                        <button class="btn btn-primary" @click.prevent="submit">
                            Edit
                        </button>
                        <button class="btn btn-primary">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>


<script setup>
    import { useRouter } from 'vue-router';
    import { defineProps } from 'vue';
    import { inject } from 'vue';

    const router = useRouter();
    const pages = inject('$pages');

    const props = defineProps(['index']);

    let page = pages.getSinglePage(props.index);

    function submit() {
        pages.editPage(props.index, page);
        router.push('/');
    }
</script>