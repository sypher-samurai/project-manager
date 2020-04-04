<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="690">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add a New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
            <v-textarea
              solo
              v-model="content"
              name="input-7-4"
              label="Information"
              prepend-icon="edit"
            ></v-textarea>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content:''
    };
  },
};
</script>
