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

//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
//import Checkbox from "@mui/material/Checkbox";
//import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Slider from '@mui/material/Slider';

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

export default function Dropdown2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
    // Our States
    const [value, setValue] =  React.useState([0, 10500]);
    
    // Changing State when volume increases/decreases
    const rangeSelector = (event , newValue) => {
      setValue(newValue);
      console.log(newValue)
    };

  return ( <div className="Dropdown-Pricerange-filter">
     <div className="price-range-expand-arrow">
  <CardActions disableSpacing>
              <div style={{width:400 , display:"flex", justifyContent:"space-between", alignItems:"Center"}}>
               <Typography>Price Range</Typography>
              </div>
              <div className="expand-arrow-price-range">
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
             <div style={{
              display:"flex",
              flexDirection:"column",
              height:100,
              width:180,
              wordWrap:"break-word",
              }}>
      
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>

      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        style={{width:170}}
      />
      Your range is between {value[0]}/- & {value[1]}/-
    </div>
             </CardContent>
           </Collapse>
         </div>

)
}
