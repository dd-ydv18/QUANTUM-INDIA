import React from "react";
import clsx from "clsx";
import { TiThMenu } from "react-icons/ti";
import {Divider, ListItem, ListItemText, List, Button, makeStyles, SwipeableDrawer} from "@material-ui/core";
import categories from '../../data/Category';
import './HamburgerDrawer.css';

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft:10,
    paddingRight:5,
    marginLeft:50,
  },
  fullList: {
    width: "auto",
  },
});

export default function  SwipeableTemporaryDrawer({setCategory}) {
  
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className='categories'>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem style={{height:40,borderRadius:3}}button key={text} onClick={() => setCategory(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)} className="menubutton">
          <TiThMenu color="#4F4846" size="15px" />
          <h2 className="explore">{"  "}Explore</h2>
        </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
