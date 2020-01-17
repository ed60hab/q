<template>
  <div id="app">
    <header class="blueshadow">Echo Q Calc</header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/acronyms">Acronyms</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style>
header {
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  padding: 10px;
}
.blueshadow {
  text-align: center;
  text-shadow: 1.5px 1px blue;
}

body {
  background-image: url ("./assets/background.jpg");
  background-color: rgb(53, 13, 13);
}

#app {
  border-radius: 25px;
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: white;
  background-image: url ("@/assets/background.jpg");
  background-color: rgb(96, 26, 26);
  -webkit-box-shadow: 0px 1px 0px 1px hsl(40, 23%, 77%); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 0px 1px 0px 1px hsl(40, 23%, 77%); /* Firefox 3.5 - 3.6 */
  box-shadow: 0px -1px 0px 1px hsl(40, 23%, 77%);
}

.sqr {
  border-radius: 25px;
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  color: white;
  background-image: url ("@/assets/background2.jpg");
  background-color: rgb(130, 34, 34);
  margin: 0px;
  padding: 0px;
  -webkit-box-shadow: 3px 3px 3px 3px hsl(40, 23%, 77%); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 3px 3px hsl(40, 23%, 77%); /* Firefox 3.5 - 3.6 */
  box-shadow: 0px 2px 0px 3px hsl(40, 23%, 77%);
}

a[href^="mailto"] {
  color: rgb(255, 255, 0);
}

#nav {
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;
  background-color: rgb(53, 13, 13);
}

#nav a {
  font-weight: bold;
  color: lightgray;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: yellow;
}

.info {
  font-size: 18px;
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
}

#results {
  color: white;
  text-align: center;
}

.mini {
  font-size: 16px;
  text-align: center;
}
.mini-left {
  font-size: 14px;
}

.patientdata {
  width: 5px;
  height: 25px;
}

input[type="number"] {
  width: 26%;
  line-height: 15px;
  /* padding: 13px 10px; */
  /* box-sizing: border-box; */
  /* border: 2px solid burlywood; */
  /* border-radius: 6px; */
  color: black;
  text-align: center;
}

.heighttext {
  height: 18px;
}
</style>
