<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="team in teams" :key="team.name">
              <v-card flat="" class="text-xs-center ma-3">
                  hfhfhhf
              </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "The net Ninja",
          role: "Web developer"
        },
        {
          name: "Chu Li",
          role: "Graphic designer"
        },
        {
          name: "Phonix",
          role: "Web developer"
        },
        {
          name: "Goku",
          role: "Social media marverick"
        },
        {
          name: "Yoshi",
          role: "Sales guru"
        }
      ]
    };
  }
};
</script>
