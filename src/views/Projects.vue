<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Utem</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </v-expansion-panels>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a website",
          person: "The net Ninja",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vitae nunc blandit pulvinar ac et risus. Vestibulum ultricies et odio eget gravida. Vestibulum ut porttitor leo. Suspendisse potenti. Sed aliquam odio neque, in sollicitudin justo posuere eget. Morbi molestie nec dolor id dignissim. Pellentesque rhoncus maximus neque id dictum. Praesent lacinia tincidunt tellus, tristique laoreet arcu pellentesque non. Morbi vel nulla eleifend, accumsan sem eget, efficitur ex. Donec at vehicula dolor, at lobortis justo. Nunc vel interdum turpis. Ut malesuada augue vel tellus lacinia, eget feugiat dolor viverra. Pellentesque tellus elit, volutpat eget dolor at, rhoncus condimentum nisi. Ut et libero diam. Ut posuere dolor pharetra iaculis mollis. Curabitur ut eros ultrices, pulvinar nunc et, elementum quam."
        },
        {
          title: "code up to homepage",
          person: "Chu Li",
          due: "10th Jan 2029",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vitae nunc blandit pulvinar ac et risus. Vestibulum ultricies et odio eget gravida. Vestibulum ut porttitor leo. Suspendisse potenti. Sed aliquam odio neque, in sollicitudin justo posuere eget. Morbi molestie nec dolor id dignissim. Pellentesque rhoncus maximus neque id dictum. Praesent lacinia tincidunt tellus, tristique laoreet arcu pellentesque non. Morbi vel nulla eleifend, accumsan sem eget, efficitur ex. Donec at vehicula dolor, at lobortis justo. Nunc vel interdum turpis. Ut malesuada augue vel tellus lacinia, eget feugiat dolor viverra. Pellentesque tellus elit, volutpat eget dolor at, rhoncus condimentum nisi. Ut et libero diam. Ut posuere dolor pharetra iaculis mollis. Curabitur ut eros ultrices, pulvinar nunc et, elementum quam."
        },
        {
          title: "Design Video Thumnail",
          person: "Phonix",
          due: "22nd Oct 2020",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vitae nunc blandit pulvinar ac et risus. Vestibulum ultricies et odio eget gravida. Vestibulum ut porttitor leo. Suspendisse potenti. Sed aliquam odio neque, in sollicitudin justo posuere eget. Morbi molestie nec dolor id dignissim. Pellentesque rhoncus maximus neque id dictum. Praesent lacinia tincidunt tellus, tristique laoreet arcu pellentesque non. Morbi vel nulla eleifend, accumsan sem eget, efficitur ex. Donec at vehicula dolor, at lobortis justo. Nunc vel interdum turpis. Ut malesuada augue vel tellus lacinia, eget feugiat dolor viverra. Pellentesque tellus elit, volutpat eget dolor at, rhoncus condimentum nisi. Ut et libero diam. Ut posuere dolor pharetra iaculis mollis. Curabitur ut eros ultrices, pulvinar nunc et, elementum quam."
        },
        {
          title: "Create community forum",
          person: "Goku",
          due: "16th Jan 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vitae nunc blandit pulvinar ac et risus. Vestibulum ultricies et odio eget gravida. Vestibulum ut porttitor leo. Suspendisse potenti. Sed aliquam odio neque, in sollicitudin justo posuere eget. Morbi molestie nec dolor id dignissim. Pellentesque rhoncus maximus neque id dictum. Praesent lacinia tincidunt tellus, tristique laoreet arcu pellentesque non. Morbi vel nulla eleifend, accumsan sem eget, efficitur ex. Donec at vehicula dolor, at lobortis justo. Nunc vel interdum turpis. Ut malesuada augue vel tellus lacinia, eget feugiat dolor viverra. Pellentesque tellus elit, volutpat eget dolor at, rhoncus condimentum nisi. Ut et libero diam. Ut posuere dolor pharetra iaculis mollis. Curabitur ut eros ultrices, pulvinar nunc et, elementum quam."
        }
      ]
    };
  }
};
</script>

<style>
.project.completed {
  border-left: 4px solid #29c4b46e;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.v-chip--no-color.completed {
  background: #29c4b46e;
}

.v-chip.v-chip--no-color.overdue {
  background: tomato;
}

.v-chip.v-chip--no-color.ongoing {
  background: orange;
}
</style>
