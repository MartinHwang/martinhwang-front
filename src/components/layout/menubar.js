import React from "react";
import { Link } from "react-router-dom";

// Material Ui 
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Material Ui Icon
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';

// Image
import martinCaricature from '../../assets/images/martincaricature.png';

// const ITEM_HEIGHT = 55;

const useStyles = makeStyles({
  root: {
    maxWidth: "28ch",
    textAlign: "center",
    margin: "-0.2em 0 2em 0.25em"
  },
  media: {
    width: "14em",
    height: 140,
    borderRadius: "5em",
    marginLeft: "1em"
    
  },
  menuButton: {
    color: "#424242",
  }

});

export default function LongMenu() {
  const classes = useStyles();
  // Primary menu
  const [primaryMenuEl, setprimaryMenuEl] = React.useState(null);
  const primaryMenuOpen = Boolean(primaryMenuEl);
  // Secondary menu
  const [secondaryMenuDeveloperEl, setSecondaryMenuDeveloperEl] = React.useState(null);
  const secondaryMenuDeveloperOpen = Boolean(secondaryMenuDeveloperEl);
  const [secondaryMenuTechEl, setSecondaryMenuTechEl] = React.useState(null);
  const secondaryMenuTechOpen = Boolean(secondaryMenuTechEl);
  const [secondaryMenuProjectEl, setSecondaryMenuProjectEl] = React.useState(null);
  const secondaryMenuProjectOpen = Boolean(secondaryMenuProjectEl);

  const handlePrimaryMenuOpen = event => {
    setprimaryMenuEl(event.currentTarget);
  };
  const handlePrimaryMenuClose = () => {
    setprimaryMenuEl(null);
  };

  const handleSecondaryMenuDeveloperOpen = event => {
    setSecondaryMenuDeveloperEl(event.currentTarget);
  };
  const handleSecondaryMenuDeveloperClose = () => {
    setSecondaryMenuDeveloperEl(null);
  };
  const handleSecondaryMenuTechOpen = event => {
    setSecondaryMenuTechEl(event.currentTarget);
  };
  const handleSecondaryMenuTechClose = () => {
    setSecondaryMenuTechEl(null);
  };
  const handleSecondaryMenuProjectOpen = event => {
    setSecondaryMenuProjectEl(event.currentTarget);
  };
  const handleSecondaryMenuProjectClose = () => {
    setSecondaryMenuProjectEl(null);
  };
  const primaryMenuId = "primary-menu";
  const primaryMenu = ( 
    <Menu
      id={primaryMenuId}
      anchorEl={primaryMenuEl}
      keepMounted
      open={primaryMenuOpen}
      onClose={handlePrimaryMenuClose}
      PaperProps={{
        style: {
          // height: ITEM_HEIGHT * 10.5,
          height: "70ch",
          width: "29ch",
        }
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardHeader className={classes.header}
            title="Full Stack Dveloper"
            titleTypographyProps={{variant:'subtitle1'}} 
            subheader="Martin Hwang"/>
          <CardMedia
            className={classes.media}
            image={martinCaricature}
            title="martinHwang"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="h5">
              <a href="mailto:developer.martinhwang@gmail.com">developer.martinhwang@gmail.com</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a href="tel:+15195803811"><PhoneIcon/>519 580 3811</a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Link to="/">
        <MenuItem onClick={handlePrimaryMenuClose}>
          Home
        </MenuItem>
      </Link>
      <MenuItem  
        aria-controls="secondary-menu-tech"
        aria-haspopup="true"
        onClick={handleSecondaryMenuDeveloperOpen}
      >
        Developer Venue
      </MenuItem>
      <MenuItem 
        aria-controls="secondary-menu-tech"
        aria-haspopup="true"
        onClick={handleSecondaryMenuTechOpen}
      >
        Tech Venue</MenuItem>
      <MenuItem
        aria-controls="secondary-menu-project"
        aria-haspopup="true"
        onClick={handleSecondaryMenuProjectOpen}
      >
        Project Venue</MenuItem>
    </Menu>
  );

  // SecondaryMenuDeveloper
  const secondaryMenuDeveloperId = "secondary-menu-developer"
  const secondaryMenuDeveloper = (
    <Menu
      id={secondaryMenuDeveloperId}
      anchorEl={secondaryMenuDeveloperEl}
      keepMounted
      open={secondaryMenuDeveloperOpen}
      onClose={handleSecondaryMenuDeveloperClose}
      PaperProps={{
        style: {
          height: "30ch",
          width: "20ch",
          marginLeft: "8em"
        }
      }}
    >
      <Link to="/developervenue"><MenuItem onClick={handleSecondaryMenuDeveloperClose}>summary</MenuItem></Link>
      <MenuItem onClick={handleSecondaryMenuDeveloperClose}>work experience</MenuItem>
      <MenuItem onClick={handleSecondaryMenuDeveloperClose}>education</MenuItem>
      <MenuItem onClick={handleSecondaryMenuDeveloperClose}>volunteer</MenuItem>
    </Menu>
  );
  // SecondaryMenuTech
  const secondaryMenuTechId = "secondary-menu-tech"
  const secondaryMenuTech = (
    <Menu
      id={secondaryMenuTechId}
      anchorEl={secondaryMenuTechEl}
      keepMounted
      open={secondaryMenuTechOpen}
      onClose={handleSecondaryMenuTechClose}
      PaperProps={{
        style: {
          height: "30ch",
          width: "20ch",
          marginLeft: "8em"
        }
      }}
    >
      <MenuItem onClick={handleSecondaryMenuTechClose}>css</MenuItem>
      <MenuItem onClick={handleSecondaryMenuTechClose}>javascript</MenuItem>
      <MenuItem onClick={handleSecondaryMenuTechClose}>react</MenuItem>
      <MenuItem onClick={handleSecondaryMenuTechClose}>java</MenuItem>
    </Menu>
  );

  // SecondaryMenuProject
  const secondaryMenuProjectId = "secondary-menu-project"
  const secondaryMenuProject = (
    <Menu
      id={secondaryMenuProjectId}
      anchorEl={secondaryMenuProjectEl}
      keepMounted
      open={secondaryMenuProjectOpen}
      onClose={handleSecondaryMenuProjectClose}
      PaperProps={{
        style: {
          height: "30ch",
          width: "20ch",
          marginLeft: "8em"
        }
      }}
    >
      <MenuItem onClick={handleSecondaryMenuProjectClose}>martinhwang.ca</MenuItem>
      <MenuItem onClick={handleSecondaryMenuProjectClose}>expressivecafe.com</MenuItem>
      <MenuItem onClick={handleSecondaryMenuProjectClose}>martinhwangs.com</MenuItem>
      <MenuItem onClick={handleSecondaryMenuProjectClose}>proudtale.com</MenuItem>
    </Menu>
  );

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="primary-menu"
        aria-haspopup="true"
        onClick={handlePrimaryMenuOpen}
        className={classes.menuButton}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      {primaryMenu}
      {secondaryMenuDeveloper}
      {secondaryMenuTech}
      {secondaryMenuProject}
    </div>
  );
}