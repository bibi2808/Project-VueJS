<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="ass1-section__list">
                        <div class="ass1-section">
                            <post-item />

                            <post-feeling />
                        </div>

                        <post-add-comment />

                        <post-comment />
                    </div>
                </div>
                <side-bar />
            </div>
        </div>
    </main>
</template>

<script>
import SideBar from "../components/SideBar";
import PostItem from "../components/PostItem";
import PostFeeling from "../components/PostFeeling";
import PostAddComment from "../components/PostAddComment";
import PostComment from "../components/PostComment";
export default {
    name: "post-detail",
    components: {
        SideBar,
        PostItem,
        PostFeeling,
        PostAddComment,
        PostComment
    }
};
</script>

<style>
</style>