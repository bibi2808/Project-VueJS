<template>
  <div id="app">
    <div class="wrapper clearfix">
      <!-- Props -> Parent to Child -->
      <players
        v-bind:isWinner="isWinner"
        v-bind:scorePlayer="scorePlayer"
        v-bind:currentScore="currentScore"
        v-bind:activePlayer="activePlayer"
      />

      <control
        v-bind:isPlaying="isPlaying"
        v-on:handleNewGame="handleNewGame"
        v-on:handleRollDices="handleRollDices"
        v-on:handleHoldScore="handleHoldScore"
        v-bind:finalScore="finalScore"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
      />

      <dices v-bind:dices="dices" />

      <popup-rule v-bind:isOpenPopup="isOpenPopup" v-on:handleConfirmRule="handleConfirmRule" />
    </div>
  </div>
</template>

<script>
import Players from "./components/Players";
import Dices from "./components/Dices";
import Control from "./components/Control";
import PopupRule from "./components/PopupRule";
export default {
  name: "app",
  data() {
    return {
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0, // ai là người chơi hiện tại
      scorePlayer: [18, 21],
      dices: [3, 5],
      currentScore: 5,
      finalScore: 50
    };
  },
  components: {
    Players,
    Dices,
    Control,
    PopupRule
  },
  computed: {
    isWinner() {
      let { scorePlayer, finalScore } = this;
      if (scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore) {
        // Stop
        this.isPlaying = false;
        return true;
      }
      return false;
    }
  },
  methods: {
    handleChangeFinalScore(event) {
      var num = parseInt(event.target.value);
      if (!isNaN(num)) {
        this.finalScore = num;
      } else {
        this.finalScore = "";
      }
    },
    nextPlayer() {
      // active = 0 => ===== 1 và ngược lại
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleHoldScore() {
      if (this.isPlaying) {
        let { scorePlayer, activePlayer, currentScore } = this;
        let oldScore = scorePlayer[activePlayer];
        // let cloneScore = [...scorePlayer];
        // cloneScore[activePlayer] = oldScore + currentScore;
        this.$set(this.scorePlayer, activePlayer, oldScore + currentScore); // giá trị muốn thay đổi --> index --> thay đổi như nào
        if (!this.isWinner) {
          this.nextPlayer();
        }
      } else {
        alert("Please click to New Game");
      }
    },

    handleRollDices() {
      if (this.isPlaying) {
        // roll dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        this.dices = [dice1, dice2];

        if (dice1 === 1 || dice2 === 1) {
          let activePlayer = this.activePlayer;
          setTimeout(() => {
            alert(
              `Player ${activePlayer +
                1} has rolled number 1 , Sorry about that`
            );
          }, 10);

          // đổi lượt chơi và reset điểm hiện tại = 0
          this.nextPlayer();
        } else {
          // Cộng currentScore của người chơi hiện tại
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        alert("Please click to New Game");
      }
    },
    handleNewGame() {
      // display popup rules
      this.isOpenPopup = true;
    },
    handleConfirmRule() {
      // close popup rules
      this.isOpenPopup = false;
      // Start game
      this.isPlaying = true;
      //reset data
      this.activePlayer = 0;
      this.scorePlayer = [0, 0];
      this.currentScore = 0;
      this.dices = [1, 1];
    }
  }
};
</script>

<style>
</style>
