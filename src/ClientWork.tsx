import * as React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { CardData } from "./types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { List } from "./client-work/List";
import { Item } from "./client-work/Item";

function Store({ match, history }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && 
          (
            <Item id={id} key="item" history={history}/>
          )
        }
      </AnimatePresence>
    </>
  );
}

export const ClientWork = () => (

    <AnimateSharedLayout type="crossfade">
      <Switch>
        <Route path={["/client-work/:id", "/client-work/"]} component={Store} />
      </Switch>
    </AnimateSharedLayout>

  );