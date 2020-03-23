import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Icon } from "react-icons-kit";
import { heartO } from "react-icons-kit/fa/heartO";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const ArticlesCard = (props) => {
  console.log(props)
  const classes = useStyles();
  return (
    <CardContainer>
      <Card className="content">
        <CardActionArea>
          <CardMedia
            component="img"
            width="220"
            image="https://picsum.photos/220/220"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="small">
              {props.value.create}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.tag}
          </Button>
          <Button size="small" color="primary">
            <Icon icon={heartO} />
          </Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
};
export default ArticlesCard;

const CardContainer = styled.div`
  width: 220px;
  margin-bottom: 10px;

`;
