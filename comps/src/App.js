import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "ghjghk",
      label: "Can I use React on a Project?",
      content:
        "yes, you can use React in any project you want. ou can use React in any project you want",
    },
    {
      id: "lkjhf",
      label: "Can I use Javascript on a project?",
      content:
        "yes, you can use React in any project you want. ou can use React in any project you want",
    },
    {
      id: "fghfghfjhg",
      label: "Can I use CSS on a project",
      content:
        "yes, you can use React in any project you want. ou can use React in any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
