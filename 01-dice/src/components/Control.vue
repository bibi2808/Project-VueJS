<template>
  <div class="wrap-control">
    <button @click="$emit('handleNewGame')" class="control btn-new">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button @click="$emit('handleRollDices')" class="control btn-roll">
      <i class="ion-ios-loop"></i>Roll dice
    </button>
    <button class="control btn-hold" @click="$emit('handleHoldScore')">
      <i class="ion-ios-download-outline"></i>Hold
    </button>

    <input 
    v-bind:disabled="isPlaying"
    v-bind:value="finalScore"
    v-on:input="$emit('handleChangeFinalScore',$event)"
    type="number" placeholder="Final score" class="final-score" />
    <!-- 1. Rằng buộc dữ liệu (Thuộc tính HTML) ->v-bind 
        1 chiều từ data -> input HTML
        2. Rằng buộc dữ liệu 2 chiều -> v-model
         1 chiều từ data -> input
         1 chiều từ input -> data

         Nếu như không phải data trực tiếp của Component Control -> không thể thay đổi data
    -->

  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {};
  },
  props: {
      finalScore: {
          type:[Number, String],
          default:0
      },
      isPlaying: {
          type:Boolean,
          default: false
      }
  }
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(../assets/images/back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
/**********************************************
*** Control
**********************************************/
.control {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}
.control.disable {
  pointer-events: none;
}

.control:hover {
  font-weight: 600;
}
.control:hover i {
  margin-right: 20px;
}

.control:focus {
  outline: none;
}

.control i {
  color: #42b983;
  display: inline-block;
  margin-right: 15px;
  font-size: 32px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  color: #555;
  font-size: 18px;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  width: 160px;
  text-transform: uppercase;
  cursor: pointer;
}

.final-score:focus {
  outline: none;
}
</style>