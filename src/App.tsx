import { ChatContent } from "./components/ChatContent";
import { ChatsManagement } from "./components/ChatsManagement";
import { IntroLabel } from "./components/IntroLabel";
import { SidebarSection } from "./components/SidebarSection";

export const App = () => {
  return (
    <div className="container">
      <section className={`sidebar`}>
        <ChatsManagement />
        <SidebarSection />
      </section>
      <section className="main">
        <IntroLabel />
        <ChatContent />
      </section>
    </div>
  );
};

export default App;
