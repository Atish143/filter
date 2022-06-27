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
    
      <div className="Dropdown-facliltes-filter">
     <div className="facilites-expand">
   <CardActions disableSpacing>
              <div style={{width:400 , display:"flex", justifyContent:"space-between", alignItems:"Center"}}>
                <Typography>Facilities</Typography>
              </div>
              <div className="faceilites-expand-arrow">
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
        value="Wake-up call"
          control={<Checkbox />}
          label="Wake-up call"
          labelPlacement="Wake-up call"
          />
        <FormControlLabel
        value="Car hire"
          control={<Checkbox />}
          label="Car hire"
          labelPlacement="Car hire"
          />
        <FormControlLabel
          value="Bicycle hire"
          control={<Checkbox />}
          label="Bicycle hire"
          labelPlacement="Bicycle hire"
          />
        <FormControlLabel
          value="LCD/LED"
          control={<Checkbox />}
          label="LCD/LED"
          labelPlacement="LCD/LED"
        /><div className="facilites">
        <FormControlLabel
        value="Laundry and dry cleaning"
          control={<Checkbox />}
          label="Laundry and dry cleaning"
          labelPlacement="Laundry and dry cleaning"
          /></div>
        <FormControlLabel
        value="Internet – Wifi"
          control={<Checkbox />}
          label="Internet – Wifi"
          labelPlacement="Internet – Wifi"
          />
        <FormControlLabel
        value="Coffee and Tea Maker"
          control={<Checkbox />}
          label="Coffee and Tea Maker"
          labelPlacement="Coffee and Tea Maker"
          />
        <FormControlLabel
        value="Air Conditione"
          control={<Checkbox />}
          label="Air Conditione"
          labelPlacement="Air Conditione"
          />
        <FormControlLabel
        value="Complimentary Water"
          control={<Checkbox />}
          label="Complimentary Water"
          labelPlacement="Complimentary Water"
          />
        <FormControlLabel
        value="Intercom"
          control={<Checkbox />}
          label="Intercom"
          labelPlacement="Intercom"
          />
        <FormControlLabel
        value="Bathroom Kit"
          control={<Checkbox />}
          label="Bathroom Kit"
          labelPlacement="Bathroom Kit"
          />
        <FormControlLabel
        value="Pay at Hotel"
          control={<Checkbox />}
          label="Pay at Hotel"
          labelPlacement="Pay at Hotel"
          />
        <FormControlLabel
        value="Doctor on call"
          control={<Checkbox />}
          label="Doctor on call"
          labelPlacement="Doctor on call"
          />
        <FormControlLabel
        value="Sanitization facility"
          control={<Checkbox />}
          label="Sanitization facility"
          labelPlacement="Sanitization facility"
          />
        <FormControlLabel
        value="First aid kit"
          control={<Checkbox />}
          label="First aid kit"
          labelPlacement="First aid kit"
          />
        <FormControlLabel
        value="Parking"
          control={<Checkbox />}
          label="Parking"
          labelPlacement="Parking"
          />
        
      </FormGroup>
    </FormControl>
              </CardContent>
            </Collapse>
          </div>
    
          </div>
  
  );
}