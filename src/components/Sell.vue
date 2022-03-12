<template>
  <div id="sellProduct">
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">A</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <li v-for="(tutorial, index) in A1" :key="index">
      {{ tutorial.name }}
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sellProduct",
  data() {
    return {
      A1: [
        {
          id: "1001183193",
          name: "EP.3 Tiger matchbox - Top and Shorts 02",
          imageUrl:
            "https://obs.line-scdn.net:443/r/ect/ect/image_164645396646287874219cb2439t0f5f0bbe",
          discountPercent: 0,
          salePrice: "฿360",
          shopName: "Baby Lovett",
          storefrontUrl: "https://shop.line.me/@babylovett/product/1001183193",
          price: "฿360",
          hasRLP: true,
          __typename: "ContentProduct",
        },
        {
          id: "1001183103",
          name: "EP.3 Tiger matchbox - Top and Shorts 01",
          imageUrl:
            "https://obs.line-scdn.net:443/r/ect/ect/image_164645368587831737919cb1908t0f5f0aa5",
          discountPercent: 0,
          salePrice: "฿360",
          shopName: "Baby Lovett",
          storefrontUrl: "https://shop.line.me/@babylovett/product/1001183103",
          price: "฿360",
          hasRLP: true,
          __typename: "ContentProduct",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    axios
      .create({
        baseURL: "https://power-products.netlify.app/products.json",
        headers: {
          "Access-Control-Allow-Origin":"https://power-products.netlify.app"
          //"Content-type": "application/json",
        },
      })
      .get("")
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
