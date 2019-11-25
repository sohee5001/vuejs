<template>
    <!-- breadcrumb start-->
    <section class="breadcrumb breadcrumb_bg align-items-center">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-sm-6">
                    <div class="breadcrumb_tittle text-left">
                        <h2>{{name}}</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="breadcrumb_content text-right">
                        <p>Home<span>/</span>{{name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb start-->
</template>

<script>
    export default {
        name: 'Title',
        props: {
            name : {
                type: String
            }
        }
    }
</script>
