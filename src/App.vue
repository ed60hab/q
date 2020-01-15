<template>
  <div id="app">
    <h2 class="blueshadow">Echo Q Calc</h2>
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
h2 {
  padding-top: 15px;
}
.blueshadow {
  text-align: center;
  text-shadow: 1.5px 1px blue;
}

body {
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
  background-color: rgb(96, 26, 26);
  -webkit-box-shadow: 2px 2px 2px 3px hsl(40, 23%, 77%); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 2px 2px 2px 3px hsl(40, 23%, 77%); /* Firefox 3.5 - 3.6 */
  box-shadow: 2px 2px 2px 3px hsl(40, 23%, 77%);
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
  background-color: rgb(130, 34, 34);
  margin: 0px;
  padding: 5px;
  -webkit-box-shadow: 3px 3px 3px 3px hsl(40, 23%, 77%); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 3px 3px hsl(40, 23%, 77%); /* Firefox 3.5 - 3.6 */
  box-shadow: 0px 4px 0px 5px hsl(40, 23%, 77%);
}

#nav {
  padding-bottom: 10px;
  text-align: center;
  font-size: 22px;
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

input[type="text"] {
  width: 26%;
  box-sizing: border-box;
  border: 2px solid burlywood;
  border-radius: 6px;
  background-color: beige;
  color: black;
  text-align: center;
}

.heighttext {
  height: 25px;
}

a[href^="mailto"] {
  color:cyan;
}
</style>
