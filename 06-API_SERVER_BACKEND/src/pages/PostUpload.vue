<template>
    <div class="row">
        <div class="col-lg-8">
            <!--section-->
            <div class="ass1-section ass1-section__edit-post">
                <div class="ass1-section__content">
                    <form action="#">
                        <div class="form-group">
                            <input
                                v-model="url_image"
                                type="text"
                                class="form-control ttg-border-none"
                                placeholder="https://"
                            />
                        </div>
                        <div class="form-group">
                            <textarea
                                v-model="post_content"
                                type="text"
                                class="form-control ttg-border-none"
                                placeholder="Describle ..."
                            ></textarea>
                        </div>
                    </form>
                    <div class="ass1-section__image" @click="uploadImage">
                        <img :src="renderImage" alt="default" />
                    </div>
                    <a
                        href="https://memeful.com/generator"
                        target="_blank"
                        class="ass1-btn ass1-btn-meme"
                    >
                        Create image from
                        meme
                    </a>
                    <button @click="uploadImage" class="ass1-btn ass1-btn-meme">From computer</button>
                    <!-- ref -->
                    <input
                        @change="handleUploadImage"
                        style="display: none;"
                        ref="imageUpload"
                        type="file"
                        name="images"
                        class="form-control"
                    />
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <aside class="ass1-aside ass1-aside__edit-post">
                <div>
                    <button @click="handleUploadPost" class="ass1-btn">Post</button>
                </div>
                <div class="ass1-aside__edit-post-head">
                    <span style="display: block; width: 100%; margin-bottom: 10px;">Choose item</span>

                    <label class="ass1-checkbox" v-for="item in allCategories" :key="item.id">
                        <input
                            :value="item.id"
                            v-model="categories"
                            type="checkbox"
                            name="state-post"
                        />
                        <span></span>
                        <p>{{ item.text }}</p>
                    </label>
                </div>
                <div class="ass1-aside__get-code">
                    <p>Share Link</p>
                </div>
                <div class="ass1-aside__social">
                    <a href class="ass1-btn-social__facebook ass1-btn-social">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href class="ass1-btn-social__twitter ass1-btn-social">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href class="ass1-btn-social__google ass1-btn-social">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
import {
    TYPE_OF_FILE_WRONG,
    UPLOAD_SUCCESS,
    UPLOAD_FAILED
} from "../constants";
import { checkImageURL, checkImageFile } from "../helpers";
import { mapActions } from "vuex";

export default {
    name: "post-upload",
    data() {
        return {
            post_content: "",
            url_image: "",
            obj_image: {
                objFile: null,
                base64URL: ""
            },
            categories: []
        };
    },
    computed: {
        allCategories() {
            return this.$store.state.post.categories;
        },
        renderImage() {
            if (this.url_image) return this.url_image;
            else if (this.obj_image.base64URL) return this.obj_image.base64URL;

            return "/dist/images/no_image_available.jpg";
        }
    },
    methods: {
        ...mapActions(["createNewPost"]),
        uploadImage() {
            this.$refs.imageUpload.click();
        },
        handleUploadImage(e) {
            if (e.target.files && e.target.files.length) {
                console.log("file", e);
                const imageUpload = e.target.files[0];
                let check = checkImageFile(imageUpload);
                if (!check) {
                    this.$notify(TYPE_OF_FILE_WRONG);
                    return;
                }
                let reader = new FileReader();
                reader.addEventListener(
                    "load",
                    () => {
                        let previewSrc = reader.result;
                        this.obj_image.base64URL = previewSrc;
                        this.obj_image.objFile = imageUpload;
                    },
                    false
                );
                if (imageUpload) {
                    reader.readAsDataURL(imageUpload);
                }
            }
        },
        resetData() {
            this.categories = [];
            this.post_content = "";
            this.url_image = "";
            this.obj_image = {
                base64URL: "",
                objFile: null
            };
        },
        handleUploadPost() {
            let { post_content, url_image, categories, obj_image } = this;

            if (post_content && categories.length) {
                if (url_image || obj_image.objFile) {
                    let data = {
                        post_content,
                        url_image,
                        category: categories
                    };

                    if (obj_image.objFile) data.obj_image = obj_image.objFile;

                    this.createNewPost(data).then(res => {
                        if (res.ok) {
                            // Reset lại toàn bộ data cũ
                            this.resetData();
                            this.$$notify(UPLOAD_SUCCESS);
                        } else {
                            this.$notify(UPLOAD_FAILED);
                        }
                    });
                } else {
                    this.$notify(UPLOAD_FAILED);
                }
            } else {
                this.$notify(UPLOAD_FAILED);
            }
        }
    }
};
</script>

<style>
</style>