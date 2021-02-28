<template>
  <div>
    <v-row>
      <v-card width="550" class="mx-12">
        <v-card-title>Camp 1</v-card-title>
        <v-card-text>
          <!-- <bars
            :key="1"
            class="px-4"
            :data="[9, 3, 3, 13, 5, 6, 8, 13, 5, 6, 8, 2, 12, 6, 8]"
            :gradient="['#008080', '#89D5D2']"
            :barWidth="8"
            :rounding="4"
            :growDuration="1"
          >
          </bars> -->
                <VueApexCharts width="500" type="line" :options="options" :series="series1"></VueApexCharts>
        </v-card-text>
      </v-card>
      <v-card class="mx-2 pa-2 " width="400px">
        <v-card-title>Some title here</v-card-title>
        <v-row>
          <v-row align="center" class="my-4 ml-4" style="display: flex">
            <v-avatar class="my-6 primary">
              <v-icon dark> mdi-chart-timeline-variant</v-icon>
            </v-avatar>
            <v-col>
              <p
                style="
                  font-size: 20px;
                  margin: 0px;
                  font-weight: bold;
                  color: black;
                "
              >
                Supplies
              </p>
              <p style="font-size: 25px; display: inline; font-weight: bold">
                343
              </p>
              days left
            </v-col>
          </v-row>

          <v-row align="center" class="my-4 ml-4" style="display: flex">
            <v-avatar class="my-2 primary">
              <v-icon dark> mdi-account-outline</v-icon>
            </v-avatar>
            <v-col>
              <p
                style="
                  font-size: 20px;
                  margin: 0px;
                  font-weight: bold;
                  color: black;
                "
              >
                Refugees
              </p>
              <p style="font-size: 25px; display: inline; font-weight: bold">
                343
              </p>people
            </v-col>
          </v-row>

          <v-row align="center" class="my-4 ml-4" style="display: flex">
            <v-avatar class="my-2 primary">
              <v-icon dark> mdi-currency-usd</v-icon>
            </v-avatar>
            <v-col>
              <p
                style="
                  font-size: 20px;
                  margin: 0px;
                  font-weight: bold;
                  color: black;
                "
              >
                Account
              </p>
              <p style="font-size: 25px; display: inline; font-weight: bold">
                343
              </p>
              $
            </v-col>
          </v-row>

          <v-row align="center" class="my-4 ml-4" style="display: flex">
            <v-avatar class="my-2 primary">
              <v-icon dark> mdi-currency-usd</v-icon>
            </v-avatar>
            <v-col>
              <p
                style="
                  font-size: 20px;
                  margin: 0px;
                  font-weight: bold;
                  color: black;
                "
              >
                Account
              </p>
              <p style="font-size: 25px; display: inline; font-weight: bold">
                343
              </p>
              $
            </v-col>
          </v-row>
        </v-row>
      </v-card>
    </v-row>
    <v-card class="ma-10" width="50%">
      <v-card-title>Refugees Information</v-card-title>
        <v-row>
        <VueApexCharts type="donut" :options="chartOptions" :series="series" width="350px"></VueApexCharts>
        <v-divider class="primary" vertical> 
        </v-divider>
        <div style="margin: 20px">
          <v-card color="blue" class="ma-2 mb-8 pa-2" height="60px">
            <v-row>
            <v-icon color="white" size="40px">mdi-human-male</v-icon>
            <div style="display:inline"  class="mr-4 mt-2 ">
            <p style="font-size:20px; display: inline;color:white ; font-weight: bolder "> Male</p>
            <p style="font-size:15px; color:white ">3009</p>
            </div>
            </v-row>
          </v-card>
          <v-card color="pink" class="ma-2 pa-2" height="60px">
            <v-row>
            <v-icon color="white" size="40px">mdi-human-female</v-icon>
            <div style="display:inline"  class="mr-4 mt-2 ">
            <p style="font-size:20px; display: inline;color:white ; font-weight: bolder "> Female</p>
            <p style="font-size:15px; color:white ">3009</p>
            </div>
            </v-row>
          </v-card>
        </div>
        </v-row>
    </v-card>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
// import bars from "vuebars";
export default {
  name: "HelloWorld",
  components: {
    // bars,
     VueApexCharts
  },
  data: () => ({
    options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series1: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
    series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
          
        
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
