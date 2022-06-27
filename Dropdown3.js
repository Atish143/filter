import * as React from "react";
import "../Photo.css";
import "../App.css";
import { styled } from "@mui/material/styles";
//import Card from "@mui/material/Card";
//import CardHeader from "@mui/material/CardHeader";
//import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
//import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Stack from "@mui/material/Stack";
//import Button from "@mui/material/Button";
//import Rating from "@mui/material/Rating";
//import HomeWorkSharpIcon from "@mui/icons-material/HomeWorkSharp";
//import { Link } from "@mui/material";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from "@mui/material/Checkbox";
//import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "2rem",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Dropdown1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Dropdown-Main">
    
      <div className="Dropdown-StarCategory-filter">
     <div className="star-category-expand">
   <CardActions disableSpacing>
              <div style={{width:400 , display:"flex", justifyContent:"space-between", alignItems:"Center"}}>
                 <Typography>Star Category</Typography>
              </div>
              <div className="star-category-expand-arrow">
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
              </div>
            </CardActions>
</div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <FormGroup aria-label="position" column>
        <FormControlLabel
        value="5 Star"
          control={<Checkbox />}
          label="5 Star"
          labelPlacement="5 Star"
          />
        <FormControlLabel
        value="4 Star"
          control={<Checkbox />}
          label="4 Star"
          labelPlacement="4 Star"
          />
        <FormControlLabel
          value="3 Star"
          control={<Checkbox />}
          label="3 Star"
          labelPlacement="3 Star"
          />
        <FormControlLabel
          value="2 Star"
          control={<Checkbox />}
          label="2 Star"
          labelPlacement="2 Star"
        />
        <FormControlLabel
        value="1 Star"
          control={<Checkbox />}
          label="1 Star"
          labelPlacement="1 Star"
          />
        
      </FormGroup>
    </FormControl>
              </CardContent>
            </Collapse>
          </div>
    
          </div>
  
  );
}