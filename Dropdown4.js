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
import Rating from '@mui/material/Rating';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from "@mui/material/Checkbox";
//import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';

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
    
      <div className="Dropdown-Userrating-filter">
      <div className="user-rating-exapnd">
   <CardActions disableSpacing>
              <div style={{width:400 , display:"flex", justifyContent:"space-between", alignItems:"Center"}}>

                <Typography>User Rating</Typography>
              </div>
              <div className="user-rating-expand-arrow">
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
      <div style={{display:"flex"}}>
          <Checkbox/>
        <FormControlLabel
          control={<Rating name="half-rating-read" defaultValue="5" precision="0.5" readOnly />}
        value="5 Star"
          labelPlacement="5 Star"
          />
        </div>
        <div style={{display:"flex"}}>
          <Checkbox/>
        <FormControlLabel
          control={<Rating name="half-rating-read" defaultValue="4" precision="0.5" readOnly />}
        value="5 Star"
          labelPlacement="5 Star"
          />
        </div>
          
        <div style={{display:"flex"}}>
          <Checkbox/>
        <FormControlLabel
          control={<Rating name="half-rating-read" defaultValue="3" precision="0.5" readOnly />}
        value="5 Star"
          labelPlacement="5 Star"
          />
        </div>
        <div style={{display:"flex"}}>
          <Checkbox/>
        <FormControlLabel
          control={<Rating name="half-rating-read" defaultValue="2" precision="0.5" readOnly />}
        value="5 Star"
          labelPlacement="5 Star"
          />
        </div>
        <div style={{display:"flex"}}>
          <Checkbox/>
        <FormControlLabel
          control={<Rating name="half-rating-read" defaultValue="1" precision="0.5" readOnly />}
        value="5 Star"
          labelPlacement="5 Star"
          />
        </div>
        
      </FormGroup>
    </FormControl>
              </CardContent>
            </Collapse>
          </div>
    
          </div>
  
  );
}