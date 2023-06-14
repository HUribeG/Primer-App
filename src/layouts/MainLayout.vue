<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat squared icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <q-avatar>
            <q-icon name="scoreboard" size="md" />
          </q-avatar>
          Tablero
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      class="bg-grey-3"
      overlay
      elevated
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple to="basket" active-class="menu-link" exact>
            <q-item-section avatar>
              <q-icon name="sports_basketball" />
            </q-item-section>

            <q-item-section> Basketball </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="volley" active-class="menu-link">
            <q-item-section avatar>
              <q-icon name="sports_volleyball" />
            </q-item-section>

            <q-item-section> Volleyball </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="about" active-class="menu-link">
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>

            <q-item-section> Contacto </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>

<style lang="scss">
.menu-link {
  color: #e2e2e2;
  background: #6c17d5;
}
</style>
