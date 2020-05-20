import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather";

const tabs = [
  {
    title: "tab1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, faucibus vel maximus maximus, faucibus eget libero. Suspendisse potenti. Nulla eget leo vitae nulla imperdiet pellentesque eu a elit. Mauris non velit ligula. Nunc ut faucibus dui. Phasellus rutrum tempor quam non vestibulum. Suspendisse potenti. Vestibulum non leo metus. In ornare augue sed enim fermentum, et suscipit mi ullamcorper. Cras tempor, arcu id interdum placerat, augue diam ornare sem, sed hendrerit mi arcu et turpis. Nulla mattis vitae odio non maximus. Duis dui tortor, dapibus sed vehicula quis, laoreet ac dui. Nulla vitae lorem aliquam, convallis risus eget, gravida eros. Nulla egestas sollicitudin magna, vitae bibendum purus vestibulum et.",
  },
  {
    title: "tab2",
    content:
      "Nullam elementum neque eget elit volutpat, ac finibus velit elementum. Maecenas mi sem, dapibus nec porta vel, cursus quis metus. Vestibulum eleifend congue mauris. Aenean consectetur eros ut quam luctus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id volutpat eros. Donec in urna tincidunt, vehicula leo congue, tincidunt arcu. Sed lacinia nulla at metus condimentum, sit amet pharetra justo mollis. Sed ultricies neque leo. Duis iaculis fermentum odio in bibendum. Vestibulum ac arcu sodales est suscipit porttitor nec ornare justo. Phasellus consectetur lobortis felis varius hendrerit. Aliquam rutrum pellentesque massa, nec pretium felis. Maecenas vel blandit sem. In lectus sem, scelerisque eu lacus vitae, consequat gravida tortor. Aliquam sit amet maximus turpis, a posuere neque.",
  },
  {
    title: "tab3",
    content:
      "In eu velit luctus, viverra lacus nec, eleifend felis. Phasellus dignissim convallis magna, in suscipit eros dignissim sed. Nam vel quam at quam tincidunt tempor. Quisque non odio blandit, lacinia lorem et, condimentum lectus. Quisque porta lobortis dui a facilisis. Donec turpis purus, facilisis quis nibh id, interdum dictum tellus. Curabitur interdum libero viverra diam pellentesque, et consequat nisl varius. Nullam sit amet placerat ante.",
  },
];

const Root = () => (
  <div>
    <Clock />
    <Tabs tabs={tabs} />
    <Weather />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  ReactDOM.render(<Root />, main);
});
