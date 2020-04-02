<template>
  <div class="projects">
    <v-expansion-panels class="my-5">
      <v-expansion-panel v-for="project in myProjects" :key="project.content" class="mb-5">
        <v-expansion-panel-header color="grey lighten-4"
          >{{project.title}}</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          {{project.content}}
        </v-expansion-panel-content>
        <v-card class="px-4 white--text " color="#3f51b5" flat text>
          <v-card-title>
            <div class="font-weight-bold">due by {{project.due}}</div>

          
          </v-card-title>
        </v-card>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a website",
          person: "sypher-samurai",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vitae nunc blandit pulvinar ac et risus. Vestibulum ultricies et odio eget gravida. Vestibulum ut porttitor leo. Suspendisse potenti. Sed aliquam odio neque, in sollicitudin justo posuere eget. Morbi molestie nec dolor id dignissim. Pellentesque rhoncus maximus neque id dictum. Praesent lacinia tincidunt tellus, tristique laoreet arcu pellentesque non. Morbi vel nulla eleifend, accumsan sem eget, efficitur ex. Donec at vehicula dolor, at lobortis justo. Nunc vel interdum turpis. Ut malesuada augue vel tellus lacinia, eget feugiat dolor viverra. Pellentesque tellus elit, volutpat eget dolor at, rhoncus condimentum nisi. Ut et libero diam. Ut posuere dolor pharetra iaculis mollis. Curabitur ut eros ultrices, pulvinar nunc et, elementum quam."
        },
        {
          title: "Design a website ..again",
          person: "sypher-samurai",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "Lorem ipsum "
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
  },
  computed:{
    myProjects(){
      return  this.projects.filter(project => {
        return project.person === "sypher-samurai"
      })
      
    }
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
