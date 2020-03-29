<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-900">Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          v-bind:to="link.href"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", href: "/" },
        { icon: "folder", text: "My Projects", href: "/projects" },
        { icon: "person", text: "Team", href: "/team" }
      ]
    };
  }
};
</script>
