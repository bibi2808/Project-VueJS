<template>
    <b-container>
        <b-form>
            <b-form-group
                label="Email address:"
                description="We'll never share your email with anyone else."
            >
                <b-form-input type="email" placeholder="Enter email"></b-form-input>
            </b-form-group>

            <b-form-group label="Your Password:">
                <b-form-input placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: []
            },
            foods: [
                { text: "Select One", value: null },
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn"
            ],
            show: true
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>