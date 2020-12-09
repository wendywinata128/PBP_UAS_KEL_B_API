 <template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="forms.name"
            label="Name"
            outlined
            required
            hide-details="auto"
            :rules="rules"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="forms.date"
                label="Date"
                outlined
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="forms.date" no-title scrollable required hide-details="auto" :rules="rules">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="forms.guest"
            label="Guest"
            type="number"
            outlined
            required
                :rules="rules2"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            :items="items"
            label="Time"
            outlined
            
            :rules="rules"
            v-model="forms.time"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="forms.table"
            label="Table"
            type="number"
            :rules="rules2"
            outlined    
            required
            disabled
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="forms.note" label="Note" required outlined>
          </v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="addReservation">SUBMIT</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "reservation",
  data() {
    return {
        rules :[ value => !!value || 'Required.'],
        rules2: [value => value>0 || 'Number is invalid'],
         menu: false,
      valid: true,
      forms: {
        name: "",
        guest: 0,
        note: "",
        date: "",
        table: 0,
        time: "",
      },
      items: ["2.00 PM", "3.00 PM"],
    };
  },
  methods: {
    addReservation() {
      this.$store.dispatch("functionalApp/addReservation", this.forms);
    },
  },
};
</script>

<style scoped>
</style>
