<template>
  <div class="wrap-popup" v-bind:class="getClassPopup">
    <div class="rule">
      <h3>Rules</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iste soluta dolores nobis reprehenderit pariatur distinctio magnam dolor eaque rem quos natus, animi qui, earum accusantium voluptate. Nesciunt, vitae totam!</p>
      <button class="button" v-on:click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  data() {
    return {};
  },
  props: {
      isOpenPopup: {
          type:Boolean,
          default: false
      }
  },
  computed: {
      getClassPopup() {
          return {
              'open-popup': this.isOpenPopup 
            //   if isOpenPopup == true => add class open-popup
            //   else => dont add class open-popup
          }
      }
  },
  methods: {
      confirm() {
          // truyen event cho Parent to close Popup
          this.$emit('handleConfirmRule');
      }
  }
};
</script>

<style>
.wrap-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease;
}

.wrap-popup.open-popup{
    opacity: 1;
    visibility: visible;
}

.rule{
    position: absolute;
    background: white;
    width: 300px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding:20px;
    transition:0.4s ease;
}
.open-popup .rule {
    transform: translate(-50%, -50%) scale(1);
}

.rule h3 {
    margin:10px auto;
    text-align: center;  
}



.button {
    margin:15px 90px;
    padding:10px;
    border-radius: 10%;
    background: white;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.button:hover {
    background: black;
    color:white;
    cursor: pointer;
}



</style>