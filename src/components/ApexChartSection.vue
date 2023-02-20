<template>
    <v-container>
        <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6 pa-4">
            <h1 class="page-title">Charts</h1>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" color="secondary" class="text-capitalize button-shadow">Latest
                        Reports</v-btn>
                </template>

            </v-menu>
        </v-row>

        <v-row justify="center">
            <v-col>
                <v-card>
                    <UserChartSection />
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <ChartSection />
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <ChartSection />
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card width="775">
                    <StaticsChartSection />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import ChartSection from './charts/ChartSection.vue'
    import StaticsChartSection from './charts/StaticsChartSection.vue';
    import UserChartSection from './charts/UserChartSection.vue';
    export default {
        components: {
            ChartSection,
            StaticsChartSection,
            UserChartSection
        }
    }
</script>
