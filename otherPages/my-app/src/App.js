import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
for (var i = 0; i < friends.length; i++) {
  <FriendCard
      name={friends[i].name}
      image={friends[i].image}
      occupation={friends[i].occupation}
      location={friends[i].location}
         tokens={friends[0].tokens}
    />
}
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
      tokens={friends[0].tokens}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;
