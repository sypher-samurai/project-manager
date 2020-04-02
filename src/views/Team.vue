<template>
  <div class="team" color="grey lighten-4">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md3 v-for="team in teams" :key="team.name">
          <v-card flat="" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar>
                <img :src="team.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ team.name }}</div>
              <div class="grey--text">{{ team.role }}</div>
            </v-card-text>

            <v-card-actions>
              <v-flex justify-center>
                <v-btn text="" color="gray">
                  <v-icon small="" left>message</v-icon>
                  <span>message</span>
                </v-btn>
              </v-flex>
            </v-card-actions>
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
          role: "Web developer",
          avatar: "/avartar-1.jpg"
        },
        {
          name: "Chu Li",
          role: "Graphic designer",
          avatar: "/avartar-2.png"
        },
        {
          name: "Phonix",
          role: "Web developer",
          avatar: "/avartar-3.jpg"
        },
        {
          name: "Goku",
          role: "Social media marverick",
          avatar: "/avartar-4.png"
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar: "/avartar-5.png"
        }
      ]
    };
  }
};
</script>
