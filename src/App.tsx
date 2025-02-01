import "./App.scss";

import Tiptap from "@/components/tiptap/Tiptap";
import { Provider } from "@/components/ui/provider";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      <div className="demo-container">
        <Heading size="3xl" color="green.600">
          TipTap Demo
        </Heading>
        <Tiptap />
        
      </div>
    </Provider>
  );
}

export default App;
