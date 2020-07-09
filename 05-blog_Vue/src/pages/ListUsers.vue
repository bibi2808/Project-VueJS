<template>
    <b-container class="mt-5">
        <b-row>
            <b-col sm="4">
                <b-list-group>
                    <router-link
                        v-for="(user,index) in listUsers"
                        :key="index"
                        :to="`/user/${index + 1}`"
                        tag="b-list-group-item"
                        exactActiveClass="active"
                    >{{ user.fullName }}</router-link>
                </b-list-group>
            </b-col>
            <b-col sm="8">
                <h2 v-if="!currentId">Please choose any user</h2>
                <template v-else-if="findUser">
                    <p>{{ findUser.fullName }}</p>
                    <p>{{ findUser.email }}</p>
                    <p>{{ findUser.isActive }}</p>
                    <p>{{ findUser.description }}</p>
                </template>
                <h2 v-else>This user is not exist !!</h2>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import listUsers from "../mocks/list-users";
export default {
    name: "list-users",
    data() {
        return {
            listUsers,
            currentId: null
        };
    },
    watch: {
        $route(to, from) {
            // react to route changes...
            this.currentId = to.params.id;
        }
    },
    computed: {
        findUser() {
            let id = parseInt(this.currentId);
            if (id > this.listUsers.length) return null;
            return this.listUsers[id - 1];
        }
    }
};
</script>

<style>
</style>