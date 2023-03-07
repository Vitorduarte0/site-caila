import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { About } from "../page/About";
import { Home } from "../page/Home";

import { TransitionGroup, CSSTransition } from "react-transition-group";


export const AppRouter = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <TransitionGroup component={null}>
          <CSSTransition timeout={600} classNames="page" key={location.pathname}>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </>
  );
};
