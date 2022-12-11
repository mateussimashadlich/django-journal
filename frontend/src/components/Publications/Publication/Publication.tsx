import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IPublication } from "../interfaces";
import { Typography } from "@mui/material";

export const Publication = ({ publication }: { publication: IPublication }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={publication.thumbnail}
        alt="Publication's thumbnail"
      ></CardMedia>
      <CardContent>
        <Typography>
          {publication.titulo}
          <br />
          <br />
          Publish date: {new Date(publication.data).toLocaleString("pt-br")}
        </Typography>
      </CardContent>
    </Card>
  );
};
