import * as React from "react";
import "../Photo.css";
import "../App.css"
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
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
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
   <div>
    <div className="Dropdown-Main">
      <div className="Dropdown-popular-filter">
   <h3 >Filter</h3>
     <div className="popular-filter-expand">
   <CardActions disableSpacing >
             
              <div style={{width:400 , display:"flex", justifyContent:"space-between", alignItems:"Center"}}>
              
              <Typography >Popular Filter</Typography>
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
        value="Couple Friendly"
          control={<Checkbox />}
          label="Couple Friendly"
          labelPlacement="Couple Friendly"
          />
        <FormControlLabel
        value="Travellers Adda"
          control={<Checkbox />}
          label="Travellers Adda"
          labelPlacement="Travellers Adda"
          />
        <FormControlLabel
          value="Business Boutique"
          control={<Checkbox />}
          label="Business Boutique"
          labelPlacement="Business Boutique"
          />
        <FormControlLabel
          value="Devotes Special"
          control={<Checkbox />}
          label="Devotes Special"
          labelPlacement="Devotes Special"
        />
        <FormControlLabel
        value="Family Travellers"
          control={<Checkbox />}
          label="Family Travellers"
          labelPlacement="Family Travellers"
          />
        <FormControlLabel
        value="Budget Hotels"
          control={<Checkbox />}
          label="Budget Hotels"
          labelPlacement="Budget Hotels"
          />
        <FormControlLabel
          value="Economic Hotel"
          control={<Checkbox />}
          label="Economic Hotel"
          labelPlacement="Economic Hotel"
          />
        <FormControlLabel
          value="Premium Hotel"
          control={<Checkbox />}
          label="Premium Hotel"
          labelPlacement="Premium Hotel"
        />
      </FormGroup>
    </FormControl>
              </CardContent>
            </Collapse>
          </div>
    </div>
          </div>
  
  );
}

//             <div className="Dropdown-popular-filter">
     
//      <CardActions disableSpacing>
//                 <IconButton aria-label=" add to FavoriteIcon"></IconButton>
//                 <IconButton aria-label="share">
//                  <ShareIcon /> 
//                 </IconButton>
  
//                 <ExpandMore
//                   expand={expanded}
//                   onClick={handleExpandClick}
//                   aria-expanded={expanded}
//                   aria-label="show more"
//                 >
//                   <Typography>how to book</Typography>
//                   <ExpandMoreIcon />
//                 </ExpandMore>
//               </CardActions>
  
//               <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
                  
//                 </CardContent>
//               </Collapse>
//             </div>


//             <div className="Dropdown-popular-filter">
     
//    <CardActions disableSpacing>
//               <IconButton aria-label=" add to FavoriteIcon"></IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>

//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <Typography>how to book</Typography>
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>

//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
                
//               </CardContent>
//             </Collapse>
//           </div>

//           <div className="Dropdown-popular-filter">
     
//    <CardActions disableSpacing>
//               <IconButton aria-label=" add to FavoriteIcon"></IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>

//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <Typography>how to book</Typography>
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>

//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
                
//               </CardContent>
//             </Collapse>
//           </div>
 


