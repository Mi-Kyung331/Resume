import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data_resume";

import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import Footer from './components/Footer/Footer';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  let tabContent = <p>보고 싶은 항목을 선택해주세요!</p>;

  if (selectedTopic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }

  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>나의 핵심 역량</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>자세히 보기</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("career")}>About Me</TabButton>
            <TabButton onSelect={() => handleSelect("projects")}>My INFO</TabButton>
            <TabButton onSelect={() => handleSelect("skills")}>Skills</TabButton>
            <TabButton onSelect={() => handleSelect("education")}>License</TabButton>
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
      <Footer />
    </div> 
  );
}

export default App;

