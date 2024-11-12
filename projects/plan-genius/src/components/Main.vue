<script setup>
import BlockPrompt from './BlockPrompt.vue'
import { ref, computed } from 'vue'
const goodsType = ['Maison', 'Appartement']
const goodsFormat = [
  'Studio',
  'T1',
  'T2',
  'T3',
  'T3 Bis',
  'T4',
  'T3 T4',
  'T5',
  'T6',
  'Duplex',
  'Triplex',
  'Souplex',
  'Loft',
]

// Variables réactives pour stocker les choix de l'utilisateur
const selectedGoodsType = ref(goodsType[0]) // Par défaut à 'Maison'
const selectedGoodsFormat = ref(goodsFormat[0]) // Par défaut à 'Studio'
const surface = ref('') // Stocke la surface saisie

// Variables réactives pour stocker les champs d'aménagement

const salonQty = ref(0)
const salonSejourQty = ref(0)
const cuisineQty = ref(0)
const chambresQty = ref(0)
const dressingQty = ref(0)
const salleDeBainsQty = ref(0)
const wcQty = ref(0)
const buandrieQty = ref(0)

// Texte dynamique pour le prompt
// Texte dynamique pour le prompt
const promptText = computed(() => {
  return `Génère moi des plans pour un ${selectedGoodsType.value} de format ${selectedGoodsFormat.value} avec une surface de ${surface.value || '50'} m², comprenant :<br/>
    - Salon : ${salonQty.value} <br/>
    - Cuisine : ${cuisineQty.value}<br/>
    - Salon/Sejour : ${salonSejourQty.value}<br/>
    - Chambres : ${chambresQty.value}<br/>
    - Salle de bains : ${salleDeBainsQty.value}<br/>
    - WC : ${wcQty.value}<br/>
    - Buandrie : ${buandrieQty.value}<br/>
    - Dressing : ${dressingQty.value}`
})
</script>
<template>
  <main>
    <section>
      <p class="sectionGroup">Project Definition</p>
      <div>
        <div class="sectionScope">
          <p class="sectionTitles">Base</p>
          <div>
            Type de bien :
            <select v-model="selectedGoodsType" name="goodsType" id="goodsType">
              <option v-for="type in goodsType" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div>
            Surface en m2 :
            <input
              v-model="surface"
              type="text"
              name="surface"
              id="surface"
              placeholder="50"
              class="input"
            />
          </div>
          <div>
            Format du bien :
            <select v-model="selectedGoodsFormat" name="goodsFormat" id="goodsFormat">
              <option v-for="format in goodsFormat" :key="format" :value="format">
                {{ format }}
              </option>
            </select>
          </div>
          <div class="sectionScope">
            <p class="sectionTitles">Aménagement</p>
            <div>Salon <input v-model="salonQty" type="text" name="salonQty" id="salonQty" /></div>
            <div>
              Cuisine <input v-model="cuisineQty" type="text" name="cuisineQty" id="cuisineQty" />
            </div>
            <div>
              Salon/Sejour
              <input
                v-model="salonSejourQty"
                type="text"
                name="salonSejourQty"
                id="salonSejourQty"
              />
            </div>
            <div>
              Chambres
              <input v-model="chambresQty" type="text" name="chambresQty" id="chambresQty" />
            </div>
            <div>
              Salle de bains
              <input
                v-model="salleDeBainsQty"
                type="text"
                name="salleDeBainsQty"
                id="salleDeBainsQty"
              />
            </div>
            <div>WC <input v-model="wcQty" type="text" name="wcQty" id="wcQty" /></div>
            <div>
              Buandrie <input v-model="buandrieQty" type="text" name="buandrieQty" id="wcQty" />
            </div>
            <div>
              Dressing
              <input v-model="dressingQty" type="text" name="buandrieQty" id="dressingQty" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <BlockPrompt :promptText="promptText" />
    </section>
  </main>
</template>
<style scoped>
main {
  margin: 20px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
main > section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sectionScope {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
section > p {
  margin: 30px 0;
}
.definition > div {
  display: flex;
  justify-content: space-between;
}
.sectionScope input {
  width: 20px;
}
.sectionScope > div {
  display: flex;
  justify-content: space-between;
}
.sectionTitles {
  font-weight: bold;
  margin: 20px 0;
}
</style>
