import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";

import "../styles/pages/Dashboard.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  function handleColor() {
    const colorsData = ["#356C7D", "#725A7A", "#C56C86", "#FF7582"];
    const rand = colorsData[(Math.random() * colorsData.length) | 0];
    return rand;
  }
  useEffect(() => {
    const myData = [
      {
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 2,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 2,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditatedelenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 2,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditatedelenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
      {
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },{
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },{
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },{
        id: 1,
        title: "Hello,world!",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad delectus placeat eius modi vel tenetur reiciendis saepe officiaminus eveniet sequi consequuntur, aliquid cupiditate delenitiincidunt eum ex beatae!",
        data: "01/01/2020 - 09:02",
        usuario: "André Souza",
        color: handleColor(),
      },
    ];
    console.log(myData);
    setPosts(myData);
  }, []);
  return (
    <>
      <Header />
      <div id="dashboard">
        <section id="container-dashboard">
          <Nav />

          <section className="listPosts">
            {posts.map((post) => (
              <div
                onClick={() => {
                  console.log(`Nota ${post.id}`);
                }}
                className="boxPost"
                style={{ backgroundColor: post.color }}
              >
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <footer>
                  <small>{post.data}</small> <small>{post.usuario}</small>
                </footer>
              </div>
            ))}
          </section>
        </section>
        <footer>
          <span>&copy; Todos os direitos reservados - 2020</span>
        </footer>
      </div>
    </>
  );
}

export default Dashboard;
