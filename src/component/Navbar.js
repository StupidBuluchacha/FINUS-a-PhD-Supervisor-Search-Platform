import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontStyle: 'italic'
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const {push} = useHistory()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{background: '#7c2424'}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" onClick={() => push('/')} className={classes.logo}>
          FINUS
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/recommendation" className={classes.link}>
            Recommendation
            </Link>
            <Link to="/profList" className={classes.link}>
            Professor's List
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
